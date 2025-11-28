import { useEffect, useState } from "react";
import { useAuth } from "./useAuth";

export const useFetch = (url) => 
{
  const { token } = useAuth();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    setLoading(true);

    fetch(url, 
    {
      headers: 
      {
        Authorization: token ? `Bearer ${token}` : "",
      }
    })

      .then(res => res.json())
      .then(json => setData(json))
      .catch(err => setError(err))
      .finally(() => 
        setLoading(false)
       );

  }, 
  
  [url,token]);

  return { data, loading, error };
  
};
