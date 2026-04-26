/*
 * Inline audio player with generated waveform.
 *
 * Use from Markdown via `md_in_html`:
 *
 *   <div class="lom-audio"
 *        data-title="Coastal wind · Baltic shore"
 *        data-sub="Outdoor · 9 m/s · 1:12"
 *        data-src="/assets/audio/coastal-wind.mp3"></div>
 *
 * The script hydrates each .lom-audio container on DOMContentLoaded.
 */
(function () {
  function makeBars(seed, count) {
    const bars = [];
    for (let i = 0; i < count; i++) {
      const x = (Math.sin(i * 0.7 + seed) * 0.5 + 0.5) * 0.6
              + (Math.sin(i * 0.23 + seed * 2) * 0.5 + 0.5) * 0.4;
      bars.push(Math.max(0.15, x));
    }
    return bars;
  }

  function hydrate(el) {
    const title = el.dataset.title || 'Sample';
    const sub   = el.dataset.sub   || '';
    const src   = el.dataset.src   || '';

    const seed = [...title].reduce((a, c) => a + c.charCodeAt(0), 0);
    const bars = makeBars(seed, 72);

    el.innerHTML = `
      <button class="lom-audio-play" aria-label="Play">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5v14l12-7z"/></svg>
      </button>
      <div class="lom-audio-meta">
        <div class="lom-audio-title">${title}</div>
        <div class="lom-audio-sub">${sub}</div>
        <div class="lom-audio-wave" role="slider">
          ${bars.map(h => `<div class="bar" style="height:${h*100}%"></div>`).join('')}
        </div>
      </div>
      <div class="lom-audio-time">0:00</div>
      <audio preload="metadata" src="${src}"></audio>
    `;

    const audio = el.querySelector('audio');
    const btn   = el.querySelector('.lom-audio-play');
    const wave  = el.querySelector('.lom-audio-wave');
    const time  = el.querySelector('.lom-audio-time');
    const barEls = [...el.querySelectorAll('.lom-audio-wave .bar')];

    function fmt(s) {
      if (!isFinite(s)) s = 0;
      s = Math.floor(s);
      return `${Math.floor(s/60)}:${String(s%60).padStart(2,'0')}`;
    }

    btn.addEventListener('click', () => {
      if (audio.paused) audio.play(); else audio.pause();
    });
    audio.addEventListener('play', () => {
      btn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="5" width="4" height="14"/><rect x="14" y="5" width="4" height="14"/></svg>';
    });
    audio.addEventListener('pause', () => {
      btn.innerHTML = '<svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M7 5v14l12-7z"/></svg>';
    });
    audio.addEventListener('timeupdate', () => {
      const p = audio.currentTime / (audio.duration || 1);
      time.textContent = `${fmt(audio.currentTime)} / ${fmt(audio.duration)}`;
      barEls.forEach((b, i) => b.classList.toggle('played', i / barEls.length < p));
    });
    wave.addEventListener('click', (e) => {
      const r = wave.getBoundingClientRect();
      const p = (e.clientX - r.left) / r.width;
      if (audio.duration) audio.currentTime = p * audio.duration;
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lom-audio[data-src]').forEach(hydrate);
  });
})();
