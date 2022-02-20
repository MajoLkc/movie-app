import { Typography } from "antd"
// import styled from "styled-components"

const { Title } = Typography

// const StyledTitle = styled(Title)``

type Props = {
  text: string
  level: 1 | 2
}

const Headline = ({ text, level }: Props) => {
  return <Title level={level}>{text}</Title>
}

export default Headline
