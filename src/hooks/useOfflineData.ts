import { useEffect, useState } from 'react';

type CacheOptions = {
  key: string;
  expiry?: number; // Time in milliseconds
};

// Hook for storing and retrieving data with offline support
export function useOfflineData<T>(options: CacheOptions) {
  const { key, expiry = 24 * 60 * 60 * 1000 } = options; // Default 24 hours
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  // Function to save data to localStorage with timestamp
  const saveToStorage = (data: T) => {
    try {
      const item = {
        data,
        timestamp: Date.now(),
        expiry
      };
      localStorage.setItem(key, JSON.stringify(item));
    } catch (e) {
      console.error('Error saving to localStorage:', e);
    }
  };

  // Function to get data from localStorage and check if it's expired
  const getFromStorage = (): T | null => {
    try {
      const item = localStorage.getItem(key);
      if (!item) return null;

      const { data, timestamp, expiry } = JSON.parse(item);
      const now = Date.now();

      // Check if data is expired
      if (now - timestamp > expiry) {
        localStorage.removeItem(key);
        return null;
      }

      return data;
    } catch (e) {
      console.error('Error retrieving from localStorage:', e);
      return null;
    }
  };

  // Initial load from cache
  useEffect(() => {
    const cachedData = getFromStorage();
    if (cachedData) {
      setData(cachedData);
      setLoading(false);
    }
  }, [key]);

  // Function to fetch data with network handling
  const fetchData = async (url: string, options: RequestInit = {}): Promise<void> => {
    setLoading(true);
    setError(null);

    try {
      // Try to get from cache first if offline
      if (!navigator.onLine) {
        const cachedData = getFromStorage();
        if (cachedData) {
          setData(cachedData);
          setLoading(false);
          return;
        } else {
          throw new Error('You are offline and no cached data is available');
        }
      }

      // Fetch from network
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Network error: ${response.status} ${response.statusText}`);
      }
      
      const result = await response.json();
      setData(result);
      saveToStorage(result);
      
    } catch (err) {
      setError(err instanceof Error ? err : new Error('An unknown error occurred'));
      
      // Try to get from cache if fetch fails
      const cachedData = getFromStorage();
      if (cachedData) {
        setData(cachedData);
      }
    } finally {
      setLoading(false);
    }
  };

  // Function to update local data and storage
  const updateData = (newData: T) => {
    setData(newData);
    saveToStorage(newData);
  };

  // Listen for online/offline events
  useEffect(() => {
    const handleOnline = () => {
      // Could trigger a refresh here if needed
      console.log('App is online');
    };

    const handleOffline = () => {
      console.log('App is offline, using cached data');
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return {
    data,
    loading,
    error,
    fetchData,
    updateData,
    isOffline: !navigator.onLine
  };
}

export default useOfflineData; 