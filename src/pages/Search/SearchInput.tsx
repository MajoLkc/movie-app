import { Input } from "antd"
import { useSelector } from "react-redux"
import Info from "../../components/Info"
import { useAction } from "../../hooks/useAction"
import Results from "../../components/Results"
import styled from "styled-components"

const { Search } = Input

const StyledSearch = styled(Search)`
  .ant-btn-primary {
    border-color: red;
  }
  .ant-btn-primary:hover {
    border-color: black;
  }
  .ant-input:hover {
    border-color: red;
  }
  .ant-input:focus {
    border-color: red;
    box-shadow: none;
  }
  button {
    background-color: red;
  }
  button:hover {
    background-color: black;
    color: red;
  }
`

const SearchInput: React.FC = () => {
  const { searchMovies } = useAction()
  const { data, error, loading } = useSelector((state: any) => state.movies)
  const onSearch = (value: string) => {
    searchMovies(value)
  }

  return (
    <>
      <StyledSearch
        placeholder="Enter film name here"
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        loading={loading}
      />
      {error ? (
        <Info message="No data to display" type="error" />
      ) : (
        <Results data={data} />
      )}
    </>
  )
}

export default SearchInput
