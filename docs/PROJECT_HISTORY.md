# Kiana Tiny Chaos — project history

## Checkpoint — 24 October 2026

The game is being made for the user's second daughter, Kiana. The goal is a cute physics puzzle game playable on iPhone, Android, tablets and the web, with eventual app-store release.

### Creative direction

- Original coral-and-cream Kiana character with expressive faces, elastic left/right pulling, squash and stretch, and bouncy follow-through.
- Yellow and blue companion characters rescued from bubbles.
- Warm bedroom setting and glossy toy-like UI inspired by the feel of Angry Birds and Cut the Rope, using original artwork.
- Portrait presentation preferred; no description panel beside gameplay.

### Source and deployment

- Repository: https://github.com/CodeMaster42-arc/kiana-tiny-chaos
- Branch: main
- Initial complete game commit: 4a004c73b432d66292bf32b1b15eefdc9a7e43e5 (118 files).
- Vercel setup guidance: import this repository, Framework Other, Root Directory dist, no build command, no environment variables.
- The user reported completion after the portrait update. The exact Vercel production URL and deployment state have not been independently verified in this checkpoint.

### Completed work

- Ten authored levels, a local 2D physics solver, drop and one-use bounce controls, local progression and star scores.
- Character pose/expression assets and sprite-based UI integrated into the game.
- Physics checks previously passed for floor settling, ramp response, ten-level solution routes, exact bubble sensors and passive collision chains.
- Removed the right-hand desktop description from dist/index.html.
- Added standalone web-app metadata for mobile.
- Added portrait sizing rules preserving the 9:16 game ratio, centered without stretching.
- Advanced service-worker cache from tiny-chaos-v3 to tiny-chaos-v4.
- Portrait source checks confirmed description removal, portrait CSS and cache version; no browser/device visual test was available during that update.

### Relevant portrait commits

- d3a331ec2af667acb508f6a898ae5ab31636aa2d — portrait HTML shell.
- 3d00e3901474a2be563cab016434fe420a20627d — 9:16 CSS layout.
- 7c13b6e69ab7f1bceb2fa390f20b768d1a1d6f5b — offline cache refresh.

### Continue from here

1. Confirm the actual Vercel production URL and deployed commit.
2. Test portrait layout, menus, touch pulling, bounce and sound on physical iPhone, Android and tablet devices.
3. Verify offline cache updates and safe-area spacing on those devices.
4. Tune animation feel and level difficulty through playtesting.
5. Complete native packaging, signing and device QA before store submission. Capacitor configuration exists; signed Android/iOS builds are still outstanding.

This file is a durable project checkpoint. Update it as work progresses.
