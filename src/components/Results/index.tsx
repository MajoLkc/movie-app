import MovieCard from "../MovieCard"
import MovieWrapper from "../MovieWrapper"

interface ResultsProps {
  data: {
    Title: string
    Poster: string
    Type: string
    imdbID: string
  }[]
}

const Results: React.FC<ResultsProps> = ({ data }) => {
  const mappedData = data.map((movie) => (
    <MovieCard
      id={movie.imdbID}
      title={movie.Title}
      alt={`Poster of ${movie.Title} film`}
      src={movie.Poster}
      type={movie.Type}
      key={movie.imdbID}
      favorite={false}
    />
  ))
  return <MovieWrapper>{mappedData}</MovieWrapper>
}

export default Results
