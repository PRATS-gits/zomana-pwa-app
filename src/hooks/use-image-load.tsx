
import { useState, useEffect } from 'react';

export function useImageLoad(src: string) {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const img = new Image();
    
    const onLoad = () => {
      setLoaded(true);
    };
    
    const onError = (e: ErrorEvent) => {
      setError(new Error(`Failed to load image: ${e.message}`));
      setLoaded(true); // Mark as loaded even on error so we can stop showing loading states
    };
    
    img.addEventListener('load', onLoad);
    img.addEventListener('error', onError as EventListener);
    
    img.src = src;
    
    // If the image is already cached, the load event might not fire
    if (img.complete) {
      setLoaded(true);
    }
    
    return () => {
      img.removeEventListener('load', onLoad);
      img.removeEventListener('error', onError as EventListener);
    };
  }, [src]);

  return { loaded, error };
}
