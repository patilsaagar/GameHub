import useData from "./useData"

interface Genere{
    id: number
    name: string
    image_background: string
}

const useGenere = () => useData<Genere>('/genres')

export default useGenere;