import MovieCard from "../MovieCard"
import MovieWrapper from "../MovieWrapper"

interface ResultsProps {
  data: {
    title: string
    src: string
    type: string
    id: string
  }[]
}

const FavoritesResults: React.FC<ResultsProps> = ({ data }) => {
  const mappedData = data.map((movie) => (
    <MovieCard
      id={movie.id}
      title={movie.title}
      alt={`Poster of ${movie.title} film`}
      src={movie.src}
      type={movie.type}
      key={movie.id}
      favorite={true}
    />
  ))
  return <MovieWrapper>{mappedData}</MovieWrapper>
}

export default FavoritesResults
