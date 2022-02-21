import { Card } from "antd"
import styled from "styled-components"
const { Meta } = Card

const StyledCard = styled(Card)`
  width: 240px;
`

type Props = {
  alt: string
  src: string
  title: string
  type: string
}

const MovieCard = ({ alt, src, title, type }: Props) => (
//   <StyledCard hoverable style={{ width: 240 }} cover={<img alt={alt} src={src} />}>
  <StyledCard hoverable cover={<img alt={alt} src={src} />}>
    <Meta title={title} description={type} />
  </StyledCard>
)

export default MovieCard
