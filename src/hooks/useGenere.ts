import useData from "./useData"

interface Genere{
    id: number
    name: string
}

const useGenere = () => useData<Genere>('/genres')

export default useGenere;