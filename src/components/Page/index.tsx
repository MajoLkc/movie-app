import Header from "../Header"
import Wrapper from "../Wrapper"

const Page: React.FC = (props) => (
  <>
    <Header />
    <Wrapper>{props.children}</Wrapper>
  </>
)

export default Page
