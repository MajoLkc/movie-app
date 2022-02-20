import Header from "../Header"

const Page: React.FC = (props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  )
}

export default Page
