import apiClient from "@/services/api-client"
import { AxiosRequestConfig, CanceledError } from "axios"
import { useEffect, useState } from "react"

interface FetchResponse<T> {
    count: number
    results: T[]
}

const useData = <T>(endPoint: string, requestConfig?: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

useEffect(() => {
    const controller = new AbortController()

    setIsLoading(true)
    apiClient.get<FetchResponse<T>>(endPoint, { signal: controller.signal, ...requestConfig })
    .then(response => {
        setIsLoading(false)
        setData(response.data.results)
    })
    .catch(error => {
        if(error instanceof CanceledError) return 
        setError(error.message)
    })
    return () => controller.abort()
},deps ? [...deps] : [])

return { data, error, isLoading}
}

export default useData;