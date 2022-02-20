import { Input } from "antd"
import { useState } from "react"

const { Search } = Input

const SearchInput = () => {
  const [isLoading, setIsLoading] = useState(false)
  const onSearch = async (value: string) => {
    setIsLoading(true)
    const searchedText = value
    const url = `http://www.omdbapi.com/?apikey=1ab65bb4&s=${searchedText}`
    const response = await fetch(url)
    const responseJson = await response.json()
    setIsLoading(false)
    console.log(responseJson)
  }

  return (
    <Search
      placeholder="Enter here film name"
      allowClear
      enterButton="Search"
      size="large"
      onSearch={onSearch}
      loading={isLoading}
    />
  )
}

export default SearchInput
