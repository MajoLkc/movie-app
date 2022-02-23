import LabelHeader from "../LabelHeader"
import { Row } from "antd"
import Label from "../Label"

interface SectionProps {
  header: string
  text?: string
}

const Section: React.FC<SectionProps> = ({header, text}) => (
  <>
    <Row>
      <LabelHeader>{header}</LabelHeader>
    </Row>
    <Row>
      <Label>{text}</Label>
    </Row>
  </>
)

export default Section
