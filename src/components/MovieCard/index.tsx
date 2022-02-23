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
  margin: 10px;
  img {
    height: 300px;
  }
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
    const data: MovieCardProps = {
      id,
      alt,
      src,
      title,
      type,
    }
    setIsFavorite(!isFavorite)
    const storageData = localStorage.getItem(STORAGE_NAME)
    if (!isFavorite) {
      if (storageData === null) {
        const newData = [data]
        localStorage.setItem(STORAGE_NAME, JSON.stringify(newData))
      } else {
        const parsedData = JSON.parse(storageData)
        const newData = [...parsedData, data]
        localStorage.setItem(STORAGE_NAME, JSON.stringify(newData))
      }
    } else {
      if (storageData === null) return
      const parsedStorageData = JSON.parse(storageData)
      const filteredData = parsedStorageData.filter(
        (item: MovieCardProps) => item.id !== data.id
      )
      localStorage.setItem(STORAGE_NAME, JSON.stringify(filteredData))
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
