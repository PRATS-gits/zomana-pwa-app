import { useState, useEffect } from 'react';
import { AlertTriangle, WifiOff } from 'lucide-react';

export function OfflineIndicator() {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Update state when online/offline status changes
    const handleOnline = () => {
      setIsOffline(false);
      setShowBanner(false);
    };

    const handleOffline = () => {
      setIsOffline(true);
      setShowBanner(true);
    };

    // Initialize
    setIsOffline(!navigator.onLine);
    if (!navigator.onLine) {
      setShowBanner(true);
    }

    // Add event listeners
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Cleanup
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Close the banner manually
  const handleClose = () => {
    setShowBanner(false);
  };

  // Only show when offline
  if (!isOffline || !showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-2">
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 flex items-center justify-between rounded shadow-lg">
        <div className="flex items-center">
          <WifiOff className="h-5 w-5 text-yellow-400 mr-3" />
          <span className="text-sm text-yellow-700">
            You're currently offline. Some features may be limited.
          </span>
        </div>
        <button
          onClick={handleClose}
          className="text-yellow-700 hover:text-yellow-900 focus:outline-none"
        >
          <span className="sr-only">Close</span>
          <span className="text-xl">&times;</span>
        </button>
      </div>
    </div>
  );
}

export default OfflineIndicator; 