# Zomana PWA - MAD Lab Project

This is a Progressive Web Application created for educational purposes as part of the Mobile Application Development (MAD) lab.

## Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)
- Git

## Setup

1.  Clone the repository:

```bash
git clone https://github.com/PRATS-gits/zomana-pwa-app.git
cd zomana-pwa-app
```

2.  Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

This will start the app in development mode with hot-reloading. Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

## PWA Features

This application has been enhanced with Progressive Web App (PWA) capabilities:

- **Offline Support**: The app can function without an internet connection, showing cached content
- **Installable**: Users can add the app to their home screen for a native app-like experience
- **Service Worker**: Manages caching and provides offline capabilities
- **Web App Manifest**: Defines how the app appears when installed

### PWA Implementation Details

1. **Service Worker**
   - Manages caching strategies for different types of assets
   - Provides an offline fallback page when network is unavailable
   - Updates automatically when new content is available

2. **Install Experience**
   - Users see an "Install App" button when the app is installable
   - Dialog explains the benefits of installation

3. **Offline UX**
   - Users see an offline indicator when network is unavailable
   - Data is cached for offline access using localStorage
   - Critical assets are pre-cached for offline use

### Testing PWA Features

To test the PWA features:

1. **Test Installation**:
   - Open the app in Chrome
   - You should see an "Install App" button or find "Install App" in Chrome's menu

2. **Test Offline Mode**:
   - Open the application
   - Navigate to a few pages to cache content
   - Turn off your network connection (airplane mode or network panel in DevTools)
   - Refresh the page - you should still see content and an offline indicator

3. **Test Updates**:
   - Make changes to the application
   - Rebuild and deploy
   - When you visit the site again, it should notify you of an update

## Build for Production

Create a production build:

```bash
npm run build
```

This will create an optimized build in the `dist` directory, including all PWA assets.

## Deployment to GitHub Pages

1.  Configure the base URL in `vite.config.ts`:

Ensure the `base` property in `vite.config.ts` is set to '/':

```typescript
base: '/',
```

2.  Deploy to GitHub Pages:

```bash
npm run deploy
```

This script will:

- Build the project
- Deploy the `dist` folder to the `gh-pages` branch

3.  Access the deployed application:

The app will be available at `https://PRATS-gits.github.io/zomana-pwa-app/`

## License

This project is for educational use only.
