import { useState,useEffect } from "react";



function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // To prevent state updates if the component is unmounted

    async function fetchdata() {
      try {
        const response = await fetch(url)
        const jsonData = await response.json()
        if(isMounted) {
          setData(jsonData)
        }
      } catch (error) {
        if(isMounted) {
          setError(error)
        }
      } finally {
        if(isMounted) {
          setLoading(false)
        }
      }
    }
    fetchdata();

    return () => {
      isMounted = false;
    }
  },[url])

  return {data,loading,error}
}

export default useFetch;
