import { useState, useEffect } from 'react';
export function useFetch(url) {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(url));
  const [error, setError] = useState(null);

  useEffect(() => {
     if (!url) {
      setData(null);
      setError(null);
      setLoading(false);
      return;
    }

  const controller = new AbortController();
  const signal = controller.signal;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url,{signal});
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        if (err.name !== 'AbortError'){
          setError(err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [url]); 

  return { data, loading, error }; 
}