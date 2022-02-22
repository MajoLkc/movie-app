import { PageHeader } from "antd"
import HeaderLink from "./HeaderLink"
import * as route from "../../routes"
import styled from "styled-components"

const StyledHeader = styled(PageHeader)`
  background-color: black;
  span {
    color: white;
  }
`

const Header = () => {
  return (
    <StyledHeader
      ghost={false}
      //   onBack={() => window.history.back()}
      title="Movie database"
      subTitle="See all movies"
      extra={[
        <HeaderLink key="1" route={route.SEARCH} name="Search" />,
        <HeaderLink key="2" route={route.FAVORITE} name="Favorites" />,
      ]}
    />
  )
}

export default Header
