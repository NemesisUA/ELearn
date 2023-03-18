import { useState, useEffect } from 'react';

export const useFetch = ({ uri }) => {
  const [data, setData] = useState([])  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    if (!uri) return;
    
    fetch(uri)
      .then(response => response.json())
      .then(myJson => setData(myJson))
      .then(setLoading(false))
      .catch(setError)
  }, [uri]) 

  return (
    {data, loading, error}
  )
}
