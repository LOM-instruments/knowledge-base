# Geofón damping compensation (optional)

## Introduction

The geophone element inside Geofón is designed for **flat frequency response when connected to a recorder with a specific input impedance**. This target impedance differs between the two element versions we have used during the product's lifetime, so the first step in this tutorial is identifying which element your Geofón has.

If your field recorder's input impedance matches the design target for your element, your Geofón already produces flat response and no modification is needed. If it does not, you can compensate by adding a single resistor across the geophone element's pins. The resistor value is calculated from a formula based on your recorder's input impedance.

*Technical note: This compensation can be performed either during initial assembly of the Geofón DIY kit, or on an already-assembled unit. The procedure is non-destructive and fully reversible.*

## Step 1: Decide whether you need this mod

This mod is **optional and fully reversible**. Its only job is to flatten the low-frequency resonance peak that appears when your recorder's input impedance is higher than the element was designed for. Many recordists prefer the natural, undamped character — so the first question is simply whether you want it at all.

**Quick gut-check** (you don't need to know your element version yet):

* Recorder mic input impedance **around 2 kΩ** — most Zoom handhelds (H4n, H6), Zoom F8/F8n, Tascam FR-AV2 and Portacapture X8 — means you're **at or near the design target** and essentially flat already. You can skip the mod.
* Recorder **well above ~4 kΩ** — Sound Devices MixPre / 7-series (~4 kΩ), Sonosax SX-R4+ (~5 kΩ), or a high-impedance interface — means the element is under-damped and you're a **good candidate**.
* **In between (~3–4 kΩ)** — e.g. Zoom F3, F6, F8n Pro (spec'd "3 kΩ or more") — depends on which element you have. Identify it in Step 2, then use the thresholds below.

You'd also lean toward the mod if you record impulsive content and hear low-frequency ringing, or you run multiple Geofóns in stereo and want them to match.

If you don't know your recorder's input impedance, check its specifications page or user manual — it is usually listed under "Mic input impedance" or "Balanced input impedance."

*Note on Zoom specs: Zoom (and some others) state mic input impedance as a minimum — e.g. "3 kΩ or more" — rather than a typical value. Treat these as a floor, not an exact figure. The damping factor is forgiving, so a recorder spec'd at "3 kΩ or more" can be compensated as if it were ~3 kΩ without audible penalty.*

**Per-element thresholds** (once you've identified your element in Step 2):

* **Current element** (target 2 kΩ): skip if your recorder is ~2 kΩ; consider the mod above 3 kΩ.
* **Previous element** (target 3.4 kΩ): skip if your recorder is 3–4 kΩ, or below 3 kΩ (mild over-damping is benign); consider the mod above 5 kΩ.

If you've decided the mod isn't for you, there's nothing more to do — your Geofón works as-is. If you want to proceed, continue to Step 2.

## Step 2: Identify which element your Geofón has

Two element versions have been used in Geofón. Check the original specification label that came with your Geofón. If you no longer have it, look at the markings on the element body — the newer ones have "LOM 2.0" written on top.

### Current element (Geofóns and DIY kits produced since March 2025)

* **Open-circuit sensitivity:** 88 V/(m/s)
* **Natural frequency:** 20 Hz
* Designed for **2 kΩ** total electrical load across the coil

### Previous element (older Geofóns)

* **Open-circuit sensitivity:** 80 V/(m/s)
* **Natural frequency:** 14 Hz
* Designed for **3.4 kΩ** total electrical load across the coil

The two elements are not interchangeable from a tuning perspective — the rest of this tutorial provides different formulas and values for each.

## Step 3: Calculate the shunt resistor value

### For the current element (88 V/(m/s), 20 Hz)

> **R(shunt) = 1 / (1/2000 − 1/R(recorder))**

Where both values are in ohms.

**Reference table:**

| Recorder input impedance | Recommended shunt | Nearest standard value |
|--------------------------|-------------------|------------------------|
| 2 kΩ                     | (none needed)     | —                      |
| 2.5 kΩ                   | 10 kΩ             | 10 kΩ                  |
| 3 kΩ                     | 6 kΩ              | 5.6 kΩ or 6.8 kΩ       |
| 4 kΩ                     | 4 kΩ              | 3.9 kΩ or 4.3 kΩ       |
| 5 kΩ                     | 3.3 kΩ            | 3.3 kΩ                 |
| 6 kΩ                     | 3 kΩ              | 3 kΩ or 2.7 kΩ         |
| 8 kΩ                     | 2.7 kΩ            | 2.7 kΩ                 |
| 10 kΩ                    | 2.5 kΩ            | 2.4 kΩ or 2.7 kΩ       |
| 20 kΩ                    | 2.2 kΩ            | 2.2 kΩ                 |
| Very high (∞)            | 2 kΩ              | 2 kΩ                   |

### For the previous element (80 V/(m/s), 14 Hz)

> **R(shunt) = 1 / (1/3400 − 1/R(recorder))**

Where both values are in ohms.

**Reference table:**

| Recorder input impedance | Recommended shunt | Nearest standard value |
|--------------------------|-------------------|------------------------|
| ≤ 3.4 kΩ                 | (none possible — already over-damped) | — |
| 4 kΩ                     | 22 kΩ             | 22 kΩ                  |
| 5 kΩ                     | 10 kΩ             | 10 kΩ                  |
| 6 kΩ                     | 7.8 kΩ            | 8.2 kΩ                 |
| 8 kΩ                     | 5.9 kΩ            | 5.6 kΩ or 6.2 kΩ       |
| 10 kΩ                    | 5.1 kΩ            | 5.1 kΩ                 |
| 20 kΩ                    | 4.1 kΩ            | 3.9 kΩ or 4.3 kΩ       |
| Very high (∞)            | 3.4 kΩ            | 3.3 kΩ or 3.6 kΩ       |

### Worked example

Your recorder has a stated input impedance of 10 kΩ, and you have the current element (88 V/(m/s), 20 Hz):

> R(shunt) = 1 / (1/2000 − 1/10000) = 1 / (5/10000 − 1/10000) = 1 / (4/10000) = 2500 Ω

The nearest standard 1% value is 2.49 kΩ (E96) or 2.4 kΩ / 2.7 kΩ (E24). All three are acceptable. The damping factor is forgiving — a 10% variation in shunt value produces a barely-perceptible variation in response.

## Step 4: Do the modification

### What you'll need

**Parts:**

* 1 × metal-film resistor, value calculated above, 1% tolerance recommended, 0.25 W or smaller

**Tools** (the same ones used for original Geofón assembly):

* a soldering iron (at least 20 W or better)
* solder (0.75 mm or 1 mm, lead-free)
* 2.5 mm Allen (hex) key
* 14 mm wrench (optional)
* small side cutters (for trimming resistor leads)

### If you are assembling a new Geofón DIY kit

Follow the [standard Geofón assembly guide](https://knowledge.lom.audio/guides/geofon) up to and including step 7 (soldering the cable conductors to the element pins). Then, before proceeding to step 8:

1. **Trim the resistor leads** to approximately 5 mm each.

2. **Solder the resistor across the two element pins** — the same two pins where the brown and white conductors are already soldered. Polarity does not matter. The resistor should sit flush against the top of the element without touching the metallic ring around the pins.

   *Technical note: Solder as fast as possible — one joint should take no more than 2–4 seconds. The element contains a magnet and moving coil that can be affected by prolonged heat.*

3. **Verify the connection** (optional but recommended): with a multimeter, measure resistance between the brown and white wires at the XLR end of the cable. You should read the parallel combination of 3500 Ω (coil) and your shunt value. For example, with a 4 kΩ shunt you should measure approximately 1870 Ω. Before the mod, this reading would be approximately 3500 Ω.

4. **Continue with step 8** of the original assembly guide.

### If you are modifying an already-assembled Geofón

1. **Disconnect the Geofón** from any recorder or phantom-power source.

2. **Unscrew the two halves of the Geofón body** and carefully pull out the element. Refer to steps 5 and 9 of the [assembly guide](https://knowledge.lom.audio/guides/geofon) in reverse if needed.

3. **Trim the resistor leads** to approximately 5 mm each.

4. **Solder the resistor across the two element pins** — the same two pins where the brown and white conductors are already soldered. Polarity does not matter. Keep soldering time to 2–4 seconds per joint.

5. **Verify the connection** (optional): measure resistance between pins 2 and 3 of the XLR connector. You should read the parallel combination of 3500 Ω and your shunt value.

6. **Reassemble** the Geofón following steps 8–9 of the assembly guide.

## Reversing the mod

Desolder the resistor and the Geofón returns to its original unmodified configuration. No traces are cut, no original components are removed.

## Resale and warranty

The mod is documented and supported by us — performing it does not void warranty for normal element function. For resale, a clear note about the modification (and the easy reversibility) is enough; some buyers will prefer the compensated version, others the original.

## Why it isn't done at the factory

A given resistor value only produces flat response on a recorder of one specific input impedance. Recorder impedances vary widely across the field-recording market — from around 2 kΩ to well above 10 kΩ — so there is no single factory-fit value that suits everyone. Shipping the element with its raw load (no shunt) keeps the choice in your hands and preserves consistency with the many Geofóns already in the field.

## Why the resistor must go directly across the element pins

The compensation resistor must be placed **directly across the geophone element's two pins**, not externally in a cable or adapter. This is the element manufacturer's specification, and it presents a clean, symmetric load on the floating coil at the source. Damping at any other point in the signal path either unbalances the element electrically or compromises noise rejection on the cable.

## A note on the two elements

The compensation mod flattens the resonance peak but does not change the underlying frequency response shape of the element. After the mod, both elements behave essentially flat above their natural frequency. However:

* The **current element** has a flat response above 20 Hz and usable signal up to approximately 1 kHz before the spurious frequency (>400 Hz) begins to introduce non-flatness.
* The **previous element** has a flat response above 14 Hz, giving roughly half an octave more low-frequency reach, but begins to lose the highs around 190 Hz — the audible result is a darker, more "structural" sound.

Neither is better — they are different transducers with different spectral character. If you have the previous element and like its low-frequency reach, the mod will preserve that while removing the resonance peak. If you have the current element, the mod gives you a more extended high-frequency response but starts rolling off at a higher frequency.

## Further reading

* [Geofón DIY assembly guide](geofon-diy.md)
* [Geofón FAQ](../faq/geofon.md)
* [Geofón product page](https://store.lom.audio/products/geofon)
