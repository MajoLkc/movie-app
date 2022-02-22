import { Alert } from "antd"
import styled from "styled-components"

const StyledAlert = styled(Alert)`
  margin: 10px 0;
`

interface InfoProps {
  message: string
  type: "success" | "error" | "info"
}

const Info: React.FC<InfoProps> = ({ message, type }) => (
  <StyledAlert message={message} type={type} closable showIcon />
)

export default Info
