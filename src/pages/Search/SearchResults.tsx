import MovieCard from "../../components/MovieCard"
import MovieWrapper from "../../components/MovieWrapper"

type Props = {
  data: {
    Title: string
    Poster: string
    Type: string
    imdbID: string
  }[]
}

const SearchResults = ({ data }: Props) => {
  const mappedData = data.map((movie) => (
    <MovieCard
      title={movie.Title}
      alt={`Poster of ${movie.Title} film`}
      src={movie.Poster}
      type={movie.Type}
      key={movie.imdbID}
    />
  ))
  return <MovieWrapper>{mappedData}</MovieWrapper>
}

export default SearchResults
