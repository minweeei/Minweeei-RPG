# Minweeei RPG — GitHub Pages Edition

A self-contained, mobile-first pixel-RPG-style wellness tracker.

## Features
- English interface, responsive iPhone layout, bottom navigation
- Weight history and SVG progress chart
- Water logging (+3 coins per water log)
- Calorie / meal logging and daily unplanned-snack counter (limit 2)
- Aspirational-look carousel placeholders
- Coin store and achievements
- Local storage, PWA manifest, service worker, app icons

## Deploy to GitHub Pages (no command line required)
1. Sign in at https://github.com/.
2. Tap **+** → **New repository**.
3. Name it `minweeei-rpg` and set it to **Public** (GitHub Free requires a public repository for Pages).
4. Create the repository.
5. Open the repository and choose **Add file → Upload files**.
6. Unzip this package on your computer, then upload **the files inside the `Minweeei-RPG` folder** (not the outer folder itself). Make sure `index.html` is at the repository root.
7. Commit the files.
8. Open **Settings → Pages**.
9. Under **Build and deployment**, choose **Deploy from a branch**.
10. Choose branch **main**, folder **/(root)**, then press **Save**.
11. Wait a few minutes, then open the URL shown on the Pages settings screen. It will usually be `https://YOUR-USERNAME.github.io/minweeei-rpg/`.

## Add to iPhone Home Screen
1. Open the published HTTPS URL in **Safari** (not an in-app browser).
2. Tap **Share**.
3. Choose **Add to Home Screen**.
4. Turn on **Open as Web App** if shown, then tap **Add**.

## Important notes
- This is a web app, not a native SwiftUI app.
- Tracking data is stored in this browser on this device. Clearing Safari website data or changing devices may remove or not transfer records.
- Anyone can visit a public GitHub Pages site. Do not store sensitive/private information in it.
- The two look screens are editable placeholders, not celebrity photographs.
- If you update the app and the iPhone keeps showing an old version, close the web app and reload Safari; service-worker cache updates may take a refresh.
