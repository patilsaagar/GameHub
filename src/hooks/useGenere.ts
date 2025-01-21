import apiClient from "@/services/api-client"
import { CanceledError } from "axios"
import { useEffect, useState } from "react"

interface Genere{
    id: number
    name: string
}

interface FetchGamesResponse {
    count: number
    results: Genere[]
}

const useGenere = () => {
    const [genere, setGenere] = useState<Genere[]>([])
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)

useEffect(() => {
    const controller = new AbortController()

    setIsLoading(true)
    apiClient.get<FetchGamesResponse>('/genres', { signal: controller.signal})
    .then(response => {
        setIsLoading(false)
        setGenere(response.data.results)
    })
    .catch(error => {
        if(error instanceof CanceledError) return 
        setError(error.message)
    })
    return () => controller.abort()
},[])

return { genere, error, isLoading}
}

export default useGenere;