import { Typography } from "antd"
import styled from "styled-components"

const { Title } = Typography

const StyledTitle = styled(Title)`
  margin-top: 0px;
  padding-top: 0px;
`

interface HeadlineProps {
  text: string
  level: 1 | 2
  leftMargin?: number
}

const Headline: React.FC<HeadlineProps> = ({ text, level, leftMargin }) => {
  return <StyledTitle style={{marginLeft: `${leftMargin}px`}} level={level}>{text}</StyledTitle>
}

export default Headline
