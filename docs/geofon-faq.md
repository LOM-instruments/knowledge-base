# Geofón FAQ

A collection of questions and answers about the Geofón — what it is, how it sounds, how to use it, and how it differs from other contact-recording tools.

## The basics

### What is the Geofón?

Geofón is a sensitive geophone adapted for field recording. A geophone is a transducer originally developed for seismic exploration: it captures the vibration of solid surfaces — ground, walls, trees, structures, machinery — and converts that vibration into an electrical signal you can record.

Unlike a regular microphone, which responds to airborne sound (pressure waves in air), a geophone responds only to motion of the surface it is mechanically coupled to. Air-borne sounds reach it indirectly, through whatever the geophone is touching.

### Does it need power?

No. Geofón is a fully passive transducer — a coil suspended in a magnetic field. Surface motion moves the coil, which generates a voltage directly. No phantom power, no batteries, no internal electronics. Plug it into a balanced microphone input and it works.

Phantom power will not damage the Geofón, but it provides no benefit and is not required.

### Does the orientation matter?

No. Geofón uses an omni-tilt geophone element with a symmetric dual-spring suspension, designed to work in any orientation — vertical, horizontal, upside-down, or any angle in between. You can stick it to a vertical wall, the underside of a bridge, an angled tree trunk, or hold it freely; it will perform consistently in all cases.

### What's in the signal path?

The geophone element is connected directly to pins 2 and 3 of the XLR connector for fully balanced output. Nothing else — no resistors, no capacitors, no electronics. The signal you record is exactly what the coil generates.

## How it sounds

### Why does it sound darker than my piezo contact mic?

This is the most common question, and the answer is: because piezo and geophone transducers measure different physical quantities of the same vibration, and they have very different mechanical characteristics.

A piezo crystal responds to **strain** (deformation of the surface) and effectively functions as a high-frequency-emphasizing sensor in the audible range. Its first mechanical resonance is typically in the tens of kHz, well above hearing, so it stays bright and articulate throughout the audio band.

Geofón is a **velocity** sensor. It responds to how fast the surface is moving, not how much it is deformed. The moving mass of the coil (10.3 g) and the spider suspension have parasitic resonances starting around 400 Hz and increasing in influence above 1 kHz, which gradually attenuate the high end. The housing also has inertia: at high frequencies, the housing can no longer perfectly follow the surface motion, especially on light or stiff surfaces.

The result: piezo sounds bright, crispy, near-surface. Geofón sounds dark, weighty, structural. Neither is wrong — they are recording different things.

### What does it sound best on?

Surfaces and sources where structural resonance, low-frequency body, and slow propagating motion are interesting:

- Large structures (bridges, walls, scaffolding, fences, metal poles)
- Trees, especially large trunks and root systems
- Ice on lakes and rivers (the long bell-tone resonances are spectacular)
- The ground itself — footsteps, vehicle traffic, distant machinery felt through soil
- Heavy machinery (motors, pumps, compressors, refrigeration)
- Doors, windows, and the resonant bodies of large rooms
- Tunnels, drainage pipes, ventilation shafts

Less well-suited:

- Small, light objects (the geophone's mass loads them too much)
- Very stiff, high-frequency surfaces like glass, where you want the brightness of a piezo
- Anything where you want to capture surface texture rather than structural body

### Can I use it for stereo recording?

Yes. Two Geofóns placed on the same large structure (or paired structures) make a compelling stereo pair. The resulting recording is not "stereo" in the traditional binaural sense — it captures the spatial distribution of vibration *within* the structure rather than directional acoustic information — but the result can be deeply immersive.

A few practical notes for stereo:

- For repeatable spectral matching across units, consider applying the optional damping mod (see below) to both Geofóns. Without damping, the 20 Hz resonance peak is sensitive to small variations between units.
- Spacing matters less than placement. Two Geofóns on opposite sides of the same wall, or on the two endpoints of a beam, often produce more dramatic results than two Geofóns inches apart.
- Phase matters for low-frequency content. If both Geofóns receive correlated low-frequency vibration but with phase differences, you may hear comb filtering or rumble cancellation.

### How does it compare to LOM's Elektrosluch?

Different physical principle entirely. Elektrosluch detects **electromagnetic fields** — the invisible signals around electronics, power lines, displays, motors, communications gear. It uses a coil but listens for radiated EM, not mechanical vibration.

Geofón detects **mechanical vibration** of surfaces. The two instruments are completely complementary. Many recordists own both.

## Connecting to a recorder

### What preamp or recorder works best?

For the cleanest, flattest response, look for recorders with **input impedance between approximately 1.5 kΩ and 2.5 kΩ.** Most pro field recorders fall in this range, including:

- Zoom F3, F6, F8 series
- Sound Devices MixPre, 7-series, Scorpio (most models around 4 kΩ — slightly higher than ideal, but workable)
- Tascam DR-series
- Sonosax SX-R4+

Recorders with very high input impedance (above ~5 kΩ) will produce a more pronounced low-frequency peak around 20 Hz. This may sound exaggerated or boomy on impulsive content. If you're using such a recorder, consider the damping mod (see below) or accept the resonance as a stylistic choice.

### Why is there a low-frequency peak / boom in my recording?

Geofón ships with the raw geophone element — no electrical damping. This preserves the element's full sensitivity (88 V/(m/s)) but leaves the natural mechanical resonance at 20 Hz unsuppressed. Depending on your preamp's input impedance, this resonance can produce a peak of up to +10 dB at 20 Hz.

This is by design and reversible. See the damping mod section below for how to flatten the response if you prefer.

### Why does it ring after impulsive sounds?

Same reason as the low-frequency peak. Without electrical damping, the 20 Hz mechanical resonance has a long decay. Sharp impulses (a knock, a footstep transmitted through soil, a door slam felt through a wall) excite the resonance and you hear it ring at 20 Hz for several hundred milliseconds afterward.

If this character is undesired for your recordings, the damping mod eliminates it.

### Can I use it with a portable recorder's mic input directly?

Yes, with an XLR cable. Geofón's output level (88 V/(m/s) sensitivity) is comparable to a sensitive dynamic microphone — typically below condenser-mic levels but well above contact-mic levels. Most field recorders' built-in preamps handle it without difficulty.

If your recorder requires a high-pass filter to clean up infrasonic content from handling or wind, enable it. Geofón has genuine output well below 20 Hz, and you may not always want it.

## The optional damping mod

### What is the damping mod?

A small modification — adding a single 2 kΩ resistor across the geophone element's pins — that electrically damps the resonance peak at 20 Hz. The result is a flatter frequency response that is independent of preamp input impedance, at the cost of approximately 9 dB of sensitivity (88 V/(m/s) → ~30 V/(m/s)).

Full instructions: [Geofón damping mod tutorial](https://knowledge.lom.audio/guides/geofon-damping-mod)

### Should I do it?

Maybe. Reasons to do the mod:

- You want flat, predictable response regardless of which recorder you use
- You record impulsive content (footsteps, impacts, transients) and don't want 20 Hz ringing
- You use a high-impedance preamp (above ~5 kΩ input) and hear excessive low-end peaking
- You run multiple Geofóns in stereo or array setups and want uniform response between units

Reasons not to do the mod:

- You record ambient or textural content where the natural resonance character is part of what you want
- You work in very quiet environments where every dB of sensitivity matters
- You like the natural sound of an unmodified Geofón (many recordists do)

### Is it reversible?

Yes. Desolder the resistor and Geofón returns to its original raw configuration. No traces are cut, no original components are removed.

### Will it affect resale value or warranty?

The mod is documented and supported by us — performing it does not void warranty for normal element function. For resale, a clear note about the modification (and the easy reversibility) is enough; some buyers will prefer the modded version, others the original.

### Why don't you just ship it damped from the factory?

We've shipped many hundreds of Geofóns in the original raw configuration over the years, and changing the standard sensitivity now would create inconsistency between old and new units. Existing customers' recordings would no longer match new units they buy. Offering the mod as an optional, reversible user modification preserves consistency for current owners while giving anyone who wants flat response the option to achieve it.

## Sensor type and physics

### What does "velocity sensor" mean in practical terms?

Geofón outputs a voltage proportional to the **speed** at which the surface is moving — not its position, not its acceleration. The three quantities are mathematically related (displacement → velocity → acceleration, by successive differentiation in time), and all three describe the same vibration, but each weights the spectrum differently.

Velocity is, for most natural and built-environment vibration, the most spectrally balanced quantity. Displacement-based sensors emphasize lows; accelerometers emphasize highs. Velocity sits in the middle, which is one reason geophones translate so well from their original seismological context to general field recording.

For a deeper explanation, see the *Why does it sound darker than my piezo contact mic?* section above.

### What's the actual frequency response?

The geophone element has a natural resonance at 20 Hz. Without damping (as Geofón ships), the response shape depends on preamp input impedance:

- **Below 20 Hz:** rolls off at 12 dB/octave (mass-spring behavior)
- **At 20 Hz:** resonance peak, 0 to +10 dB depending on preamp loading
- **20 Hz to ~400 Hz:** approximately flat (with peak influence diminishing)
- **400 Hz to ~1 kHz:** usable but with parasitic resonances becoming visible
- **Above ~1 kHz:** progressively attenuated and increasingly non-flat

Response curves for raw and damped configurations are available on the product page.

### What is the spurious frequency?

A geophone's "spurious frequency" is the first parasitic resonance of the suspension — a higher-order mode of the spider springs that competes with the desired piston motion of the coil. Below the spurious frequency, the geophone's response is well-behaved; above it, response becomes peaky and unit-to-unit variable.

Geofón's element has a typical spurious frequency above 400 Hz. In practice this means content above ~1 kHz is captured with diminishing fidelity. For most field-recording uses this is not a limitation — the interesting content is below this range — but it explains why Geofón sounds darker than transducers with higher inherent bandwidth.

### Below 20 Hz, is anything captured at all?

Yes, but with significant attenuation. The 12 dB/octave rolloff means that at 10 Hz the signal is roughly 12 dB below the flat-region level; at 5 Hz, roughly 24 dB below. Strong infrasonic events (heavy machinery, low-frequency structural motion, distant blasting) will still produce recordable signal. True seismological content at fractions of a Hz is below the geophone's useful range.

## Use and care

### How should I mount it?

The Geofón comes with three mounting options:

- **Magnet:** strong neodymium magnet for ferrous surfaces (steel beams, fences, machinery, vehicle bodies). Excellent coupling, very repeatable.
- **Spike:** stainless steel spike for soil, soft wood, snow, sand. Works best when firmly seated.
- **Suction cup:** for smooth non-ferrous surfaces (glass, polished stone, plastic, lacquered wood). Works well only on truly smooth surfaces; texture defeats it.

For surfaces none of these handle (rough wood, rough metal, fabric, irregular stone), the most reliable approach is firm contact under the geophone's own weight. A heavy weight placed on top of the Geofón improves coupling on imperfect surfaces. Gaffer tape or museum putty can also work.

### Does mounting really make a big difference?

Yes — often more than you'd expect. The mounting interface is part of the mechanical signal path between the surface and the geophone element. Loose contact attenuates high frequencies and introduces rattle. Rigid contact transmits faithfully.

Two Geofóns in different positions on the same structure, or the same Geofón in two different mounting arrangements, can sound dramatically different. Worth experimenting the way you'd experiment with mic placement in a room.

### Is it weatherproof?

Geofón is reasonably robust against splashes, light rain, dust, and cold. It is not waterproof — do not submerge it. The XLR connector and cable gland are not designed for sustained water exposure.

For use in light precipitation or in very humid conditions, the body is sufficiently sealed for short sessions. For extended outdoor placement in unpredictable weather, additional protection is wise.

### What if I drop it?

The geophone element has a coil suspended on thin spring spiders inside a precise magnetic gap. Drops can damage the suspension or knock the coil off-center, in which case the element may rattle, lose sensitivity, or stop working entirely.

Most casual handling is fine. Drops onto hard surfaces from waist height or higher are risky.

### How do I clean it?

Wipe the housing with a slightly damp cloth. Avoid solvents that could attack the polyurethane cable jacket or the cable gland seal. Keep moisture away from the XLR connector.

### Can I take it apart?

Yes — Geofón is shipped as a DIY kit and is designed to be user-disassemblable. The two halves of the body unscrew. See the [assembly guide](https://knowledge.lom.audio/guides/geofon) for details. Take care when handling the geophone element itself: hold it by the metal ring around the pins, not by the cable solder joints, and avoid prolonged heat when soldering.

## Buying and ordering

### Do I need any other accessories?

You need a **balanced XLR cable** to connect Geofón to your recorder. A standard microphone cable works.

That's it. No phantom power, no preamp, no special interface required.

### Can I buy a pair for stereo recording?

Yes. We do not currently offer a pre-matched stereo pair, but two individual Geofóns work well together. For best matching across the pair, consider applying the optional damping mod to both units.

### Can you build a custom version?

Possibly. Contact us at [info@lom.audio](mailto:info@lom.audio) with your specific need.

## Further reading

- [Geofón DIY assembly guide](https://knowledge.lom.audio/guides/geofon)
- [Geofón damping mod tutorial](https://knowledge.lom.audio/guides/geofon-damping-mod)
- [Geofón product page](https://lom.audio/products/geofon)
