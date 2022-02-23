import { Card } from "antd"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { HeartOutlined, InfoCircleOutlined } from "@ant-design/icons"
import { useState } from "react"

const { Meta } = Card

const STORAGE_NAME = "favorites"

const StyledCard = styled(Card)`
  width: 240px;
  display: inline-block;
  height: 450px;
`

interface MovieCardProps {
  id: string
  alt: string
  src: string
  title: string
  type: string
}

const style = {
  color: "red",
}

const MovieCard: React.FC<MovieCardProps> = ({ id, alt, src, title, type }) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false)
  const toggleFavoritesHandler = () => {
    setIsFavorite(!isFavorite)
    const storageData = localStorage.getItem(STORAGE_NAME)
    const data: MovieCardProps = {
      id,
      alt,
      src,
      title,
      type,
    }

    // localStorage.setItem(STORAGE_NAME, JSON.stringify(data))

    if (storageData === null) {
      const newData = [data]
      localStorage.setItem(STORAGE_NAME, JSON.stringify(newData))
    } else {
      console.log("Storage data: " + storageData)
      const parsedData = JSON.parse(storageData)
      console.log("Parsed data: " + parsedData)
      // const newData = parsedData.push(data)
      const newData = [...parsedData, data]
      console.log("Merged data: " + newData)
      localStorage.setItem(STORAGE_NAME, JSON.stringify(newData))
      // const dataForStorage = storageData.push(JSON.stringify(data))
      // console.log(dataForStorage)
      // localStorage.setItem(STORAGE_NAME, JSON.stringify(dataForStorage))
    }
  }

  return (
    <StyledCard
      id={id}
      cover={<img alt={alt} src={src} />}
      actions={[
        <Link to={`/detail/${id}`}>
          <InfoCircleOutlined key="info" />
        </Link>,
        <HeartOutlined
          key="heart"
          onClick={toggleFavoritesHandler}
          style={isFavorite ? style : undefined}
        />,
      ]}
    >
      <Meta title={title} description={type} />
    </StyledCard>
  )
}

export default MovieCard
