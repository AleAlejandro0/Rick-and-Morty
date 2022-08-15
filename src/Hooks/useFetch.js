import axios from "axios"
import { useEffect, useState } from "react"

const useFetch = URL => {
  
    const [request, setRequest] = useState()

    useEffect(() => {
      axios.get(URL)
           .then(res => setRequest(res.data))
           .catch(err => console.log(err))
    }, [])
    
    return request
}

export default useFetch