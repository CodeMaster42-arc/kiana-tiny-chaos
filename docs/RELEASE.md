# Release preparation — 0.2.0 playtest alpha

This repository contains the working web game and a Capacitor configuration, not a compiled or signed native app. The configured identifier com.kianagames.tinychaos is provisional; confirm ownership and final branding before the first store upload. No native Android/iOS project has been generated or verified here: Android SDK/adb/Gradle are unavailable, and prior dependency downloads were denied by environment network policy. No signing key has been created, requested or stored.

## Developer workstation

1. Install a Node version supported by Capacitor 8, Android Studio and the required Android SDK/JDK. For iOS use a Mac with a supported Xcode version.
2. Run `npm install`; retain and commit the resulting lockfile after verifying dependencies. This has not run successfully in the hosted environment.
3. Run `npm test`.
4. Run `npm run native:android` once, then `npm run native:sync` and `npm run open:android`.
5. Use Android Studio to test a debug build on real phones and tablets. Test background/resume, gestures, sound interruption, offline launches, long sessions and low-memory handling.
6. Configure final identifiers and icons, version code/name and manifest orientation/insets. Evaluate WebView performance before committing to this rendering stack for release.
7. Build a signed Android App Bundle using an upload key controlled by the owner and enroll in Play App Signing. Never commit a keystore or its passwords.
8. Create store listing, privacy policy and support page; complete age/content ratings, target audience, Data Safety and app access declarations accurately. Native bundle should use packaged assets, not require the private web preview login.
9. Release to internal testing, then the required closed test. For affected personal developer accounts created after 13 November 2023, Google currently requires at least 12 opted-in testers continuously for 14 days before applying for production access. Recheck the account's live requirements at submission.
10. Submit only after playtesting and native QA. This alpha has no advertising, purchase or analytics SDKs; adding them changes privacy/audience requirements.

For iOS: `npm run native:ios`, sync, then `npm run open:ios`; configure signing in Xcode and test through TestFlight before App Store review. A wrapper is not a guarantee of review approval.

## Current release gates

- Completed here: 18 transparent character pose frames; spring-damped body follow-through; ten authored levels; local progression and star scores; glossy original menus; simulation solution tests; web source publication.
- Remaining: native dependency installation/build, physical-device QA, performance profiling, player difficulty testing, production physics stress tests, final brand/asset review, privacy/support pages and signed store packages. No claim of perfect physics or market success.

## Primary sources checked 25 October 2026

- https://capacitorjs.com/docs/getting-started/environment-setup
- https://developer.android.com/studio/publish/app-signing
- https://support.google.com/googleplay/android-developer/answer/14151465?hl=en
- https://developer.apple.com/app-store/review/guidelines/
