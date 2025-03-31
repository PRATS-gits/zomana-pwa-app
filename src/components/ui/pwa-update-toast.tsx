import { useState, useEffect } from 'react';
import { toast } from 'sonner';

interface ServiceWorkerConfig {
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
}

export const PWAUpdateToast = () => {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [registration, setRegistration] = useState<ServiceWorkerRegistration | null>(null);

  useEffect(() => {
    // Check if the browser supports service workers
    if ('serviceWorker' in navigator) {
      // Watch for changes to get notified when the service worker has an update
      navigator.serviceWorker.ready.then((reg) => {
        setRegistration(reg);

        // When there's an update, show toast notification
        reg.onupdatefound = () => {
          const installingWorker = reg.installing;
          if (installingWorker) {
            installingWorker.onstatechange = () => {
              if (installingWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available and will be used when the page is reloaded
                setUpdateAvailable(true);
                toast('App update available', {
                  description: 'A new version is available. Refresh to update.',
                  action: {
                    label: 'Update now',
                    onClick: () => updateServiceWorker(),
                  },
                  duration: 10000, // Show for 10 seconds
                });
              }
            };
          }
        };
      });
    }
  }, []);

  const updateServiceWorker = async () => {
    if (registration && registration.waiting) {
      // Send a message to the waiting service worker, 
      // instructing it to activate
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });

      // Once the service worker is activated, reload the page
      registration.waiting.addEventListener('statechange', (e) => {
        if ((e.target as any)?.state === 'activated') {
          window.location.reload();
        }
      });
    } else {
      // If no registration or no waiting service worker, just reload
      window.location.reload();
    }
  };

  return null; // This component doesn't render anything, it just shows toast notifications
};

// Add listener to handle SKIP_WAITING message from the PWAUpdateToast component
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.addEventListener('message', (event) => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
      self.skipWaiting();
    }
  });
}

export default PWAUpdateToast; 