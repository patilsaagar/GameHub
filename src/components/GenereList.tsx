import useGenere from '@/hooks/useGenere'

const GenereList = () => {

    const {genere} = useGenere()
  return (
    <ul>{genere.map(genere => <li key={genere.id}>{genere.name}</li>)}</ul>
  )
}

export default GenereList