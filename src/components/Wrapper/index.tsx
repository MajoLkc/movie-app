import styled from "styled-components"

const StyledWrapper = styled.div`
  width: 97%;
  margin: 10px auto;
`

const Wrapper: React.FC = (props) => (
  <StyledWrapper>{props.children}</StyledWrapper>
)

export default Wrapper
