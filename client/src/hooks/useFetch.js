import { useEffect,useState } from "react";

import { makeRequest } from "../makeRequest";

const  useFetch = (url) => {
    const[data,setData] = useState(null);
    const[loading,setLoading] = useState(false);
    const[error,setError] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
          try {
            setLoading(true);
           const res = await makeRequest.get(url );
           console.log("ga")
           console.log(res);
           console.log(res.data.data);

          setData(res.data.data);
         
          // console.log(res.data.data);

          } catch(e) {
            setError(true);
            // console.log(e)
          }
          setLoading(false);

        }
        fetchData()


      },[url]);
      return {data,loading,error}

}
export default useFetch;
