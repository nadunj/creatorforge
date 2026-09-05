---
name: "Seed-VC"
description: "Free, open-source voice conversion model that changes a narration's voice identity while keeping its original timing, emotion, and delivery."
categories: ["audio-tts", "automation"]
website: "https://github.com/Plachtaa/seed-vc"
pricingModel: "free"
hasFreeTier: true
pros:
  - "Completely free and self-hosted — no per-character or per-request billing at all"
  - "Preserves the expressive performance of the source audio (pauses, emphasis, pacing) instead of flattening it"
  - "Works well as a second pass on top of a TTS engine's output rather than replacing TTS entirely"
cons:
  - "Requires a GPU and some comfort with running Python projects locally"
  - "Voice cloning quality depends heavily on using a clean, dry reference clip — a processed or MP3-derived reference can introduce artifacts"
  - "No hosted API — this is a run-it-yourself tool, not a plug-and-play SaaS"
bestFor: "Technical creators who already generate expressive narration with a TTS engine and want to swap the voice identity for free, at scale"
draft: false
---

Seed-VC solves a specific problem: you already like the *performance* a TTS
engine gives you — its pacing, its emotional beats, its question/pause
delivery — but you want a different voice identity on top of it. Instead of
generating narration and voice in one step, you generate the performance
first, then convert the voice.

## How it works

You feed it a source narration file plus a short reference clip of the target
voice (10-20 seconds of clean, dry audio works best — avoid MP3-derived or
already-processed references, which can introduce metallic artifacts) and it
outputs the same performance in a new voice. Typical settings run around 50
diffusion steps with a CFG around 0.45 for a clean, non-distorted result.

## Who it's for

High-volume channels running their own automation pipeline who want expressive
delivery without paying per-character for it repeatedly — generate once with
a TTS engine, convert cheaply and indefinitely after that. Pairs naturally
with [Gemini TTS](/tools/gemini-tts/) as the first-pass performance layer.
