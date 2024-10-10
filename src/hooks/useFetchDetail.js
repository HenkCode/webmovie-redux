import { useEffect, useState } from "react"
import axios from "axios"

const useFetchDetail = (endpoint) => {
    const [data,setData] = useState()
    const [loading,setLoading] = useState(false)

    const fetchData = async() => {
        try {
          const response = await axios.get(endpoint)
          setData(response.data)
        } catch(error) {
            console.log('error', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return {data, loading}
}

export default useFetchDetail