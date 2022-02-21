import Headline from "../../components/Headline"
import Page from "../../components/Page"
import SearchInput from "./SearchInput"

const Search = () => {
  return (
    <Page>
      <Headline text="Search for your film!" level={1} />
      <SearchInput />
    </Page>
  )
}

export default Search
