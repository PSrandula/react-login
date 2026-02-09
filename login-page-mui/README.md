# Login Page (MUI) — React

## Project overview
- Source: `src/`
- Production build output: `build/`

## Prerequisites
- Node.js (16+ recommended)
- npm (or yarn)
- Firebase CLI (for hosting) — install with:

npm install -g firebase-tools

## Setup (local)
1. Clone the repo and open the project folder.
2. Install dependencies:

npm install

3. Start development server:

npm start

Open http://localhost:3000 in your browser.

## Build (production)

npm run build

This outputs static files to the `build/` folder.

## Deploy to Firebase Hosting
1. Login to Firebase (one-time):

firebase login

2. Initialize hosting (if not already):

firebase init hosting

When asked, set `build` as the public directory and configure as a single-page app.

3. Deploy:

npm run build
firebase deploy --only hosting

After deploy the Firebase CLI prints the hosting URL (or check the Firebase Console). Replace the placeholder below with your actual hosting link.

## Hosting link
- Hosted app URL: https://react-login-bc450.web.app 


