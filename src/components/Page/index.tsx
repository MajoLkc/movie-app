import Header from "../Header"
import Wrapper from "../Wrapper"

const Page: React.FC = (props) => {
  return (
    <>
      <Header />
      <Wrapper>{props.children}</Wrapper>
    </>
  )
}

export default Page
