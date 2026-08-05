# Troubleshooting

Common problems and how to resolve them. For general product questions, see the [Microphones](microphones.md) and [Geofón](geofon.md) FAQs.

## Microphones

### No sound, or a very quiet signal { #mic-no-signal }

Work through the chain from the recorder outwards:

1. **Is the microphone powered?** For Uši and mikroUši (minijack): plug-in power must be enabled — on many recorders it's off by default and hidden in an input menu. For Pro (XLR) models and basicUcho: phantom power (48 V, or a 24 V mode) must be on, *for the specific inputs you're using* — some recorders switch phantom per channel.
2. **Is it a mic input?** Line inputs expect much stronger signals and will record the microphone as near-silence. Make sure the input is set to *mic* level.
3. **Smartphone or laptop?** Headset sockets use TRRS wiring with a mono mic contact — LOM stereo microphones are not directly compatible with them.
4. **Still nothing?** Try a different cable and a different input. If a known-good chain stays silent, [contact us](https://store.lom.audio).

### Only one channel records { #mic-one-channel }

With a stereo pair, first swap the two microphones between cable branches: if the silence moves with the microphone, the issue is that capsule or its connector; if it stays on the same channel, it's the cable or the recorder input.

Also check that both mini-XLR connectors are clicked in fully, phantom power is enabled on *both* channels (Pro models), and the recorder isn't set to a mono recording mode.

### Crackling or popping sounds { #mic-crackling }

The most common cause is **condensation**: bringing the microphone from cold outdoor air into a warm room (or vice versa) deposits moisture inside the capsule. Let it acclimatize for 30–60 minutes — the crackling disappears on its own. This is not damage.

If crackling persists in stable conditions, dust or dirt may have entered the capsule. Don't open or try to clean the capsule yourself — [contact us](https://store.lom.audio).

### Distortion on loud sources { #mic-distortion }

In order of likelihood:

1. **Recorder gain set too high** — lower it so peaks stay under −12 to −6 dB.
2. **The source exceeds the capsule's limit** — roughly 122 dB SPL for the Uši series, 115 dB for mikroUši, 110 dB for basicUcho. No gain setting fixes this; use a less sensitive microphone or more distance.
3. **Plug-in power too weak** (minijack models) — some devices supply barely 2 V, which lowers the headroom. If distortion appears at moderate levels, try another recorder or the XLR cable with phantom power.

### Hum or buzz { #mic-hum }

On XLR models, steady 50/60 Hz hum usually means a cable or powering problem: a damaged or non-LOM cable, an unbalanced adapter somewhere in the chain, or phantom voltage sagging below 24 V (weak batteries). On minijack models, hum often comes from ground loops when the recorder is connected to a charger or computer — disconnect them and compare. Remember that omnidirectional microphones will also faithfully record real hum from the environment (refrigerators, transformers, dimmers) — move the microphone to check.

### I can't disconnect the cable from my Uši microphones { #i-cant-disconnect-the-cable-from-my-usi-microphones }

In certain cable configurations, disconnecting the cable from the microphone body can feel very forceful or seemingly impossible. There's a technique that removes the need for force — don't yank the cable. We've recorded a [short video demonstrating the proper procedure](https://www.youtube.com/watch?v=xnhm1sluqAA).

## Geofón

### Why is there a low-frequency peak / boom in my recording?

Geofón ships without electrical damping, so the element's mechanical resonance — at 20 Hz on current elements, 14 Hz on older ones — is unsuppressed. If your recorder's input impedance is higher than the element's design target (2 kΩ for current, 3.4 kΩ for previous), the resonance loads less and the peak gets more pronounced.

This is by design and reversible. See the [damping compensation article](../guides/geofon-damping-mod.md) for how to flatten the response if you prefer.

### Why does it ring after impulsive sounds?

Same reason as the low-frequency peak. Without electrical damping, the mechanical resonance (20 Hz current / 14 Hz previous) has a long decay. Sharp impulses (a knock, a footstep transmitted through soil, a door slam felt through a wall) excite the resonance and you hear it ring at that frequency for several hundred milliseconds afterward.

If this character is undesired for your recordings, the [damping compensation](../guides/geofon-damping-mod.md) eliminates it.

### I hear something moving inside the Geofón — is it broken?

Almost certainly not. What you hear is part of how the Geofón works — a coil suspended on springs, reaching the limit of its travel. A soft internal movement when you tilt or shake the unit is completely normal.

This is different from damage. After a hard drop, a damaged element tends to rattle harshly and is usually accompanied by lost sensitivity or no signal at all. If the Geofón still records normally, the movement you feel is just the suspension doing its job.

### What if I drop it?

The geophone element has a coil suspended on thin spring spiders inside a precise magnetic gap. Drops can damage the suspension or knock the coil off-center, in which case the element may rattle, lose sensitivity, or stop working entirely.

Most casual handling is fine. Drops onto hard surfaces from waist height or higher are risky.

## Ordering

### I signed up for the newsletter but am not receiving any emails

Because of the complexity of managing GDPR consent for marketing emails, we sometimes lose the ability to send you the newsletter. You can fix this by updating your subscription settings [here](http://eepurl.com/sThtz).

## Shipping

### My order was not delivered

This can have several causes:

1. **The order hasn't shipped yet.** Did you receive a shipment confirmation email?
2. **The order is on the way.** Check the tracking link in your confirmation email.
3. **The package is "on hold".** This usually means the courier couldn't reach you at your address, so the package is being held at your local post office or courier depot. Call or visit them for more information.

If your package was shipped with **Slovak Post**, your local post office is always the best source of information — they have the most recent details and very often hold the package themselves. A held package is usually stored for 1–2 weeks and then returned to us, so please contact them as soon as your package is overdue.

For more on shipping times, see the [Shipping FAQ](shipping.md) or the [shipping information page](https://store.lom.audio/pages/shipping-information).
