# Zomana PWA - MAD Lab Project

This is a Progressive Web Application created for educational purposes as part of the Mobile Application Development (MAD) lab.

## Prerequisites

- Node.js (v18+ recommended)
- npm (v9+ recommended)
- Git

## Setup

1.  Clone the repository:

```bash
git clone https://github.com/PRATS-gits/mad-zomana-pwa.git
cd mad-zomana-pwa
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

## Build for Production

Create a production build:

```bash
npm run build
```

This will create an optimized build in the `dist` directory.

## Deployment to GitHub Pages

1.  Configure the base URL in `vite.config.ts`:

Ensure the `base` property in `vite.config.ts` is set correctly for your repository:

```typescript
base: process.env.NODE_ENV === 'production' ? '/mad-zomana-pwa/' : '/',
```

2.  Deploy to GitHub Pages:

```bash
npm run deploy
```

This script will:

- Build the project
- Deploy the `dist` folder to the `gh-pages` branch

3.  Access the deployed application:

The app will be available at `https://PRATS-gits.github.io/mad-zomana-pwa/`

## License

This project is for educational use only.
