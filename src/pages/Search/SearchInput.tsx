import { Input } from "antd"
import { useState } from "react"
import SearchResults from "./SearchResults"

const { Search } = Input

const SearchInput = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [receivedData, setReceivedData] = useState([])

  const onSearch = async (value: string) => {
    setIsLoading(true)
    const searchedText = value
    const url = `http://www.omdbapi.com/?apikey=1ab65bb4&s=${searchedText}`
    const response = await fetch(url)
    const responseJson = await response.json()
    setIsLoading(false)
    const data = responseJson.Search
    console.log(data)
    setReceivedData(data)
  }

  return (
    <>
      <Search
        placeholder="Enter film name here"
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        loading={isLoading}
      />
      <SearchResults data={receivedData} />
    </>
  )
}

export default SearchInput
