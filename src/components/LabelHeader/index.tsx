import { Typography } from "antd"
import styled from "styled-components"

const { Text } = Typography

const StyledLabel = styled(Text)`
  margin-top: 10px;
`

const Label: React.FC = (props) => (
  <StyledLabel strong>{props.children}</StyledLabel>
)

export default Label
