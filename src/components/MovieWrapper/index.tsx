import styled from "styled-components"

const Wrapper = styled.div`
  width: 1000px;
  div:first-of-type {
    //   margin: 10px;
  }
`

const MovieWrapper: React.FC = (props) => <Wrapper>{props.children}</Wrapper>

export default MovieWrapper
