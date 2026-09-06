---
title: "Google Veo Pricing Explained (2026): Per-Second API Costs, Free Tier, and What a Real Video Costs"
description: "Google Veo 3.1's actual per-second pricing on the Gemini API, how the Google AI Pro/Ultra subscriptions compare, and what a real 60-second creator video costs to generate."
type: "pricing"
categories: ["video", "ai-tools", "automation"]
tags: ["google veo", "veo pricing", "ai video generator", "gemini api"]
pubDate: 2026-09-06
image: "/images/articles/18-video-production.jpg"
imageAlt: "Man holding a camera mounted on a gimbal stabilizer."
hasAffiliateLinks: false
---

![Man holding a camera mounted on a gimbal stabilizer.](/images/articles/18-video-production.jpg)

*Photo: [Sudhakar Chandra](https://unsplash.com/photos/man-holding-a-camera-on-a-gimbal-stabilizer-TcoDBN8CUWA), [Unsplash License](https://unsplash.com/license).*

Veo pricing is genuinely confusing because Google sells it two different
ways — a metered API rate and a flat-fee consumer subscription that bundles
credits — and the cheapest option depends entirely on how much video you
actually generate per month. Here's the real math.

## The short answer

- **API pricing (Veo 3.1, per second, with audio by default):** Standard
  $0.40/s (720p/1080p) or $0.60/s (4K); Fast $0.10-0.12/s (720p/1080p) or
  $0.30/s (4K); Lite $0.05-0.08/s (no separate 4K tier).
- **Consumer subscriptions:** Google AI Pro at $19.99/month and Google AI
  Ultra at $249.99/month both bundle monthly AI credits usable for Veo
  generation instead of metered per-second billing.
- **Cheapest path for occasional use:** the Pro subscription's bundled
  credits, if your monthly video volume is low. **Cheapest path for
  high-volume/automated pipelines:** the metered API on the Fast or Lite
  tier, where cost scales predictably with usage.

## Per-second API pricing, in full

| Tier | Resolution | Price/second | Notes |
|---|---|---|---|
| Lite | 720p | $0.05 | Cheapest generation tier |
| Lite | 1080p | $0.08 | |
| Fast | 720p | $0.10 | |
| Fast | 1080p | $0.12 | |
| Fast | 4K | $0.30 | |
| Standard | 720p/1080p | $0.40 | Highest fidelity below 4K |
| Standard | 4K | $0.60 | Top tier |

These rates include audio generation by default on Veo 3.1 — Google's own
documentation notes you're only billed for videos that actually finish
generating successfully, so a failed audio-processing pass on a given clip
isn't charged.

## What a real clip costs

An 8-second b-roll clip (a common single-shot length for narrated
long-form video) costs:

- **Lite 720p:** 8 × $0.05 = **$0.40**
- **Fast 1080p:** 8 × $0.12 = **$0.96**
- **Standard 1080p:** 8 × $0.40 = **$3.20**

A 10-minute narrated video built from roughly 40-50 such 8-second clips
(a rough estimate — actual clip count depends heavily on pacing and how much
you mix in static images) lands very differently depending on tier: **roughly
$16-20 on Lite**, **$38-48 on Fast**, and **$128-160 on Standard** for video
generation alone, before narration, editing, or any other production cost.
This is exactly why picking the right tier for the job — Lite/Fast for
disposable b-roll, Standard only for hero shots — matters more with Veo than
with a flat-fee tool.

## Subscription vs. metered API: which is actually cheaper

**Google AI Pro ($19.99/mo)** bundles a fixed monthly credit allowance that
covers a limited amount of Veo generation alongside Gemini's other features
(chat, image generation, etc.) — it's a good fit if your video generation
is occasional and you're not running an automated pipeline that needs
programmatic API access.

**Google AI Ultra ($249.99/mo)** raises that credit ceiling substantially
and is aimed at heavier individual creators, not automated production
pipelines — at that price point, most channels producing more than a
handful of videos a month will find the metered API cheaper and more
predictable, since Ultra's cost doesn't scale down when you generate less.

**The metered Gemini API** is the only option that supports direct
programmatic/automated generation (as opposed to the consumer app UI), and
its cost scales linearly with actual usage — the right choice once you're
running Veo through a script or batch pipeline rather than generating
clips one at a time by hand.

## Cost-control tips for a creator pipeline

**Default to Lite or Fast for b-roll, reserve Standard for hero shots.**
Most seconds of a finished video are supporting footage, not the single
shot the thumbnail is built around — there's rarely a visible quality
difference for background motion at Lite/Fast tiers.

**Don't regenerate a whole clip to fix a small issue.** Since you're billed
per successfully generated second, iterating with shorter test generations
(a 2-3 second preview) before committing to a full 8-second clip at your
final tier keeps failed attempts cheap.

**Track cost per finished minute, not per clip.** Because clip length,
tier, and resolution all move the price independently, the only stable
metric across a whole production is total spend divided by finished video
minutes — track that per project so tier choices you make now don't quietly
blow the budget on a longer video later.

**Mix static AI images with generated video.** A video doesn't need every
second to be Veo-generated motion — cutting in still images (from
[Midjourney](/tools/midjourney/) or [Leonardo AI](/tools/leonardo-ai/)) for
lower-motion sections cuts the total seconds of video generation you're
billed for. See [Midjourney vs Leonardo AI](/compare/midjourney-vs-leonardo-ai-creators/)
for that side of the pipeline.

## FAQ

**Is there a free tier for Veo?**
Not on the metered API — Google AI Pro's bundled monthly credits are the
closest thing to a low-cost entry point, and even those are consumed by
other Gemini features, not reserved solely for video.

**Does 4K always cost more than it's worth for YouTube?**
For most YouTube delivery, 1080p is the practical ceiling most viewers
experience — the 4K tier's roughly 50% price premium over 1080p at the same
speed tier is worth it mainly for hero shots you expect viewers to pause on,
not for full-video generation.

**How does Veo pricing compare to a subscription image/video tool like
Leonardo AI?**
They're structured completely differently — Leonardo's token system is a
flat monthly allowance regardless of how much of it you use, while Veo's
API bills exactly for what you generate. A high-volume, automated pipeline
usually favors Veo's linear API pricing; an individual creator generating
casually often prefers a flat subscription's predictability.

**Did older Veo 3.0 pricing carry over?**
No — the legacy `veo-3.0-generate-001` and `veo-3.0-fast-generate-001`
endpoints were retired mid-2026, so any new integration should be built
against Veo 3.1's current pricing above, not older published rates.
