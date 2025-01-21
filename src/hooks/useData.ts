import apiClient from "@/services/api-client"
import { CanceledError } from "axios"
import { useEffect, useState } from "react"

interface FetchResponse<T> {
    count: number
    results: T[]
}

const useData = <T>(endPoint: string) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

useEffect(() => {
    const controller = new AbortController()

    setIsLoading(true)
    apiClient.get<FetchResponse<T>>(endPoint, { signal: controller.signal})
    .then(response => {
        setIsLoading(false)
        setData(response.data.results)
    })
    .catch(error => {
        if(error instanceof CanceledError) return 
        setError(error.message)
    })
    return () => controller.abort()
},[])

return { data, error, isLoading}
}

export default useData;