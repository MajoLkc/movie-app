import { Input } from "antd"
import { useSelector } from "react-redux"
import Info from "../../components/Info"
import { useAction } from "../../hooks/useAction"
import SearchResults from "./SearchResults"

const { Search } = Input

const SearchInput: React.FC = () => {
  const { searchMovies } = useAction()
  const { data, error, loading } = useSelector((state: any) => state.movies)
  console.log(data)
  console.log(error)
  const onSearch = (value: string) => {
    searchMovies(value)
  }

  return (
    <>
      <Search
        placeholder="Enter film name here"
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        loading={loading}
      />
      {error ? (
        <Info message="No data to display" type="error" />
      ) : (
        <SearchResults data={data} />
      )}
    </>
  )
}

export default SearchInput
