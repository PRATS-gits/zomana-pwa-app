import React, { useState } from 'react';
import usePWA from '@/hooks/usePWA';
import { Button } from '@/components/ui/button';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from '@/components/ui/dialog';
import { DownloadIcon, X } from 'lucide-react';

export function InstallPWA() {
  const { isInstallable, promptInstall } = usePWA();
  const [showInstallPrompt, setShowInstallPrompt] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);

  // Don't show if not installable
  if (!isInstallable || !showInstallPrompt) {
    return null;
  }

  const handleInstall = async () => {
    setDialogOpen(false);
    try {
      const outcome = await promptInstall();
      if (outcome === 'dismissed') {
        // User declined, don't show again for this session
        setShowInstallPrompt(false);
      }
    } catch (error) {
      console.error('Error installing PWA:', error);
    }
  };

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    setDialogOpen(false);
  };

  return (
    <>
      <div className="fixed bottom-4 right-4 z-50">
        <Button
          onClick={handleOpenDialog}
          className="flex items-center gap-2 bg-black text-white hover:bg-gray-800"
          size="sm"
        >
          <DownloadIcon size={16} />
          Install App
        </Button>
      </div>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Install Zomana as an app</DialogTitle>
            <DialogDescription>
              Enjoy a faster, app-like experience with offline access.
            </DialogDescription>
          </DialogHeader>
          
          <div className="grid gap-4 py-4">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                <img 
                  src="/favicon.ico" 
                  alt="Zomana Logo" 
                  className="w-6 h-6" 
                />
              </div>
              <div className="space-y-2">
                <h4 className="font-medium">Benefits of installing</h4>
                <ul className="text-sm text-gray-500 space-y-1">
                  <li>• Faster access and navigation</li>
                  <li>• Works offline or with poor connections</li>
                  <li>• Looks and feels like a native app</li>
                  <li>• No App Store or Play Store needed</li>
                </ul>
              </div>
            </div>
          </div>
          
          <DialogFooter className="flex sm:justify-between sm:space-x-0">
            <Button 
              variant="ghost" 
              onClick={handleDismiss}
              className="text-gray-500"
            >
              Not now
            </Button>
            <Button 
              onClick={handleInstall}
              className="bg-black text-white hover:bg-gray-800"
            >
              Install App
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default InstallPWA; 