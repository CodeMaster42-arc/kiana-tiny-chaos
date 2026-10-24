# Kiana: Tiny Chaos — playable prototype

A separate game from Kiana’s Little Garden. Five short physics puzzles: slide to choose a drop position, release Kiana, then tap once for an upward bounce. Kiana and moving toy objects can rescue friends in bubbles. Three drops per level, immediate retry, pause, level selection and local best-drop saves.

## Architecture

- `dist/levels.js`: five authored level layouts in a 540 × 960 world.
- `dist/physics.js`: small dependency-free circle/box rigid-body solver, SAT contacts, impulses, restitution, rotation, fixed steps; a pivoting board and spring reactions.
- `dist/game.js`: input, game states, physics stepping, procedural scene drawing, character animation, synthesised audio, panels and local save handling.
- `dist/assets/`: original generated room environment and transparent 3D-styled character expressions.
- `dist/sw.js`: optional offline asset caching; first load needs connectivity and private hosting authentication. Storage can be evicted by browsers.

A Phaser/Matter stack was originally considered. Package downloads were blocked in the execution environment. This prototype therefore uses the documented small local solver above, not Phaser or Matter. Production physics needs broader stress testing and an engine decision before expanding content.

## Animation direction

Original coral-and-cream Kiana, rounded floppy nubs, soft toy material. Generated open-eye, blink and laughing expressions share a padded sprite frame. Rendering layers apply idle breathing, a floating aim pose, gentle idle rotation, falling stretch, landing squash with spring-back, bounce trails and particles, rescued-friend wiggles and float-away celebration. The art has a 3D-rendered appearance; runtime is 2D canvas. No live 3D rig or skeletal animation is claimed. Reduced-motion mode removes trails, reduces particles and suppresses decorative bobbing; essential gameplay movement remains.

## Run / checks

Serve `dist/` with an ordinary static host, e.g. `python -m http.server 8000 --directory dist`. No package installation or build step is required. Service workers need HTTPS or localhost. Runtime files are local; there are no external scripts, fonts, analytics, ads, purchase flows, user accounts or runtime AI calls in game code. Private hosting itself requires owner authentication and may handle operational data.

`node tests/physics.cjs` validates floor settling, slope response, finite-state stability and at least one three-drop solution per authored level using the game's shot-end rules. It is not a proof of every possible route or device equivalence. Browser checks cover first-level rescue and completion, progression, level selection and a one-use bounce. Real iPhone/iPad/Android performance, app installation, offline behavior and native packaging need device testing.

## Store readiness

This is a five-level web prototype, not a signed AAB/IPA or a store-ready release. Before store submission: test on physical devices, tune difficulty with players, polish and expand levels based on feedback, decide intended audience and age ratings, complete privacy/support materials and platform disclosures, package and sign native builds, verify audio/lifecycle/accessibility, and obtain store review. No hit-game or approval guarantee.

## Artwork production

Built-in image generation created a portrait softly lit toy bedroom with an empty center; a transparent three-character row (coral Kiana, yellow leaf-tuft friend, blue friend); and an identity-matched three-expression Kiana sheet (smile, blink, laugh). Sheets were cropped and padded into runtime sprites, not rendered as a static game screenshot. Wood platforms, dominoes, bubbles, springs, cushion, UI and particles are drawn by code.

## 0.2.0 update

Ten levels, three six-pose character sprite sets (18 transparent aligned PNG frames plus original sheets under art/source), expression switching, spring-damped body angle/squash follow-through, reacting/blinking bubble friends, glossy toybox menus, character album and one-to-three star scores. These are pose sets animated by code, not complete hand-drawn frame-by-frame loops or independently rigged ears. The custom solver now uses exact body-to-bubble shapes and activated impact chains. This improves correctness but does not establish perfect physics.

Native build handoff: capacitor.config.json and package.json are provided; see docs/RELEASE.md. Dependency installation, generated Android/iOS projects, signed AAB/IPA and physical-device QA are still outstanding. Existing five-level validation notes above describe the previous prototype; the current tests cover all ten layouts plus precise sensor and gravity-only activation cases. Art was made with the built-in image tool using the original characters as identity references and six fixed pose cells per character. The supplied UI images informed original glossy button styling; their character art and assets are not copied.

## 0.3 sprite integration

The expanded sheets are now used in-game: 16 elastic motion poses and 12 Kiana expressions, 12 poses each for Sunny/Pip, and 16 UI sprite assets. Original sheets are retained in art/source; extracted frames and packing metadata live in dist/assets/atlas. A common cell frame is retained per sheet so squash/stretch is not normalized away. Drag distance selects left/right pull strength; release, upward flight, downward flight, impact and success select corresponding poses. Existing spring-damped rotation/squash provides secondary body follow-through. Companion frames react to proximity, blink, and change through stretch/airborne/celebration after rescue. Physics geometry and level data are unchanged by this cosmetic integration.

UI artwork is applied to primary/secondary/disabled buttons, pause/retry/sound/close controls, level tiles, reward stars, menu panel and bubble rings. Menu panels use sliced borders to preserve corner artwork. The offline cache was advanced to v3 and includes new assets. Existing installed copies may need all game tabs closed and reopened to activate their waiting update.
