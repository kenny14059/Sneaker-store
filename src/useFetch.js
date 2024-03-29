import { useState, useEffect } from "react"

const useFetch = (url) => {
    const [data,setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=>{
        const abortCont = new AbortController();

     setTimeout(()=>{
      fetch(url, {signal: abortCont.signal})
      .then(res=> {
        if(!res.ok){
          throw Error('could not fetch the data');
        }
        return res.json();
      })
      .then(data=> {
        //console.log(data);
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err=>{
        if(!err.name === 'AbortError') {
          setIsPending(false);
          setError(err.message);
        }
        
      })
     });

     return ()=> abortCont.abort();
      },[url,data]);
    return {data, isPending, error}
}

export default useFetch