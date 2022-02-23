import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Row, Col, Image } from "antd"
import Headline from "../../components/Headline"
import Label from "../../components/Label"
import Page from "../../components/Page"
import LabelHeader from "../../components/LabelHeader"
import configData from "../../config.json"

interface MovieDataType {
  Actors: string
  Awards: string
  Director: string
  Genre: string
  Language: string
  Plot: string
  Poster: string
  Title: string
  Writer: string
  Year: string
}

const Detail: React.FC = () => {
  const filmParams = useParams()
  const [movieData, setMovieData] = useState<MovieDataType>()

  useEffect(() => {
    const loadData = async () => {
      const filmID = filmParams.filmID
      const url = `${configData.url}${configData.apiKey}&i=${filmID}`
      const response = await fetch(url)
      const responseJson = await response.json()
      setMovieData(responseJson)
    }
    loadData().catch(console.error)
  }, [])

  console.log(movieData)

  return (
    <>
      <Page>
        <Headline text={`Detail of ${movieData?.Title}`} level={1} />
        <Row>
          <Col span={18} push={6}>
            <Headline
              text={`Actor: ${movieData?.Actors}`}
              level={2}
              leftMargin={20}
            />
            <Headline
              text={`Genre: ${movieData?.Genre}`}
              level={2}
              leftMargin={20}
            />
            <Headline
              text={`Release year: ${movieData?.Year}`}
              level={2}
              leftMargin={20}
            />
          </Col>
          <Col span={6} pull={18}>
            <Image src={movieData?.Poster} />
          </Col>
        </Row>
        <Row>
          <LabelHeader>Plot</LabelHeader>
        </Row>
        <Row>
          <Label>{movieData?.Plot}</Label>
        </Row>
        <Row>
          <LabelHeader>Director</LabelHeader>
        </Row>
        <Row>
          <Label>{movieData?.Director}</Label>
        </Row>
        <Row>
          <LabelHeader>Writer</LabelHeader>
        </Row>
        <Row>
          <Label>{movieData?.Writer}</Label>
        </Row>
        <Row>
          <LabelHeader>Awards</LabelHeader>
        </Row>
        <Row>
          <Label>{movieData?.Awards}</Label>
        </Row>
        <Row>
          <LabelHeader>Language</LabelHeader>
        </Row>
        <Row>
          <Label>{movieData?.Language}</Label>
        </Row>
      </Page>
    </>
  )
}

export default Detail
