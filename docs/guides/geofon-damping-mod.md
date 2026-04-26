# Geofón damping mod (optional)

## Introduction

Geofón ships with the raw geophone element — no electrical damping, full sensitivity. This preserves the transducer's natural response, including a resonance peak at 20 Hz. Many recordists prefer this character: the peak emphasizes the low-frequency content that geophones are uniquely suited to capturing.

However, the raw element's response depends on what it is connected to. With a typical pro recorder (1.5–2.5 kΩ input impedance) the response is close to flat. With higher-impedance preamps the 20 Hz peak becomes more pronounced, and impulsive content (footsteps, impacts, door slams) can ring at the resonance frequency.

If you want flat response regardless of preamp, you can add a single resistor across the geophone element's pins. This tutorial shows you how.

*Technical note: This mod can be performed either during initial assembly of the Geofón DIY kit, or on an already-assembled unit. The procedure is non-destructive and fully reversible.*

## When you might want this mod

* You record **impulsive or transient content** and want clean decay without 20 Hz ringing
* You use a **high-impedance preamp** (above ~5 kΩ input) and hear excessive low-end peaking
* You run **multiple Geofóns in stereo or arrays** and want uniform response between units
* You do **measurement or analysis work** where flat response matters more than character

## When you probably don't want this mod

* You record **ambient, textural, or drone content** where the natural resonance character is part of the appeal
* You work in **very quiet environments** where every dB of sensitivity matters
* Your recorder has **1.5–2.5 kΩ input impedance** — your response is already close to flat
* You want to **match existing recordings** made with an unmodified Geofón

## What the mod does

A geophone's frequency response is shaped by how its coil is electrically loaded. The coil is essentially a velocity sensor with a mass-spring resonance at 20 Hz. With no load, that resonance is underdamped and produces a peak of roughly +10 dB. Adding a resistor across the coil electrically damps the moving mass, flattening the peak and smoothing the phase response around resonance.

The tradeoff is direct: more damping means flatter response but lower sensitivity. A 2 kΩ resistor gives a damping factor of approximately 0.7 (near-optimal, essentially flat from 20 Hz upward) and reduces open-circuit sensitivity from 88 V/(m/s) to approximately 30 V/(m/s) — a drop of about 9 dB.

The resistor must be placed **directly across the geophone element's two pins**, not externally in a cable or adapter. This is what the element manufacturer specifies, and it presents a clean, symmetric load on the floating coil at the source. Damping at any other point in the signal path either unbalances the element or compromises noise rejection on the cable.

**Response curves — raw element (blue) vs. 2 kΩ damped (green):**

![Geofón response curves — undamped vs damped](path/to/response-curve.png)

## Required parts

* 1 × metal-film resistor, **2 kΩ**, 1% tolerance, 0.25 W or smaller
  * Alternative: **1.8 kΩ** or **2.2 kΩ** both work well — the damping factor is not critical
  * Through-hole resistors are easiest to solder to the element pins

## Required tools

The same tools used for the original Geofón assembly:

* a soldering iron (at least 20 W or better)
* solder (0.75 mm or 1 mm, lead-free)
* 2.5 mm Allen (hex) key
* 14 mm wrench (optional)
* small side cutters (for trimming resistor leads)

## Procedure

### If you are assembling a new Geofón DIY kit

Follow the [standard Geofón assembly guide](https://knowledge.lom.audio/guides/geofon) up to and including step 7 (soldering the cable conductors to the element pins). Then, before proceeding to step 8:

1. **Trim the resistor leads** to approximately 5 mm each.

2. **Solder the resistor across the two element pins** — the same two pins where the brown and white conductors are already soldered. Polarity does not matter. The resistor should sit flush against the top of the element without touching the metallic ring around the pins.

   *Technical note: Solder as fast as possible — one joint should take no more than 2–4 seconds. The element contains a magnet and moving coil that can be affected by prolonged heat.*

3. **Verify the connection** (optional but recommended): with a multimeter, measure resistance between the brown and white wires at the XLR end of the cable. You should read approximately 1270 Ω (3500 Ω coil in parallel with 2 kΩ resistor). Before the mod, this reading would be approximately 3500 Ω.

4. **Continue with step 8** of the original assembly guide.

### If you are modifying an already-assembled Geofón

1. **Disconnect the Geofón** from any recorder or phantom-power source.

2. **Unscrew the two halves of the Geofón body** and carefully pull out the element. Refer to steps 5 and 9 of the [assembly guide](https://knowledge.lom.audio/guides/geofon) in reverse if needed.

3. **Trim the resistor leads** to approximately 5 mm each.

4. **Solder the resistor across the two element pins** — the same two pins where the brown and white conductors are already soldered. Polarity does not matter. Keep soldering time to 2–4 seconds per joint.

5. **Verify the connection** (optional): measure resistance between pins 2 and 3 of the XLR connector. You should read approximately 1270 Ω.

6. **Reassemble** the Geofón following steps 8–9 of the assembly guide.

## Reversing the mod

Desolder the resistor and the Geofón returns to its original raw configuration. No traces are cut, no original components are removed.

## Further reading

* [Geofón DIY assembly guide](https://knowledge.lom.audio/guides/geofon)
* [Geofón product page](https://lom.audio/products/geofon)
