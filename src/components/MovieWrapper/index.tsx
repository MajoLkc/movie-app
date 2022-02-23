import styled from "styled-components"

const Wrapper = styled.div`
  width: 100%;
`

const MovieWrapper: React.FC = (props) => <Wrapper>{props.children}</Wrapper>

export default MovieWrapper
