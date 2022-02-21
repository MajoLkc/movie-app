import { PageHeader } from "antd"
import Link from "./Link"
import * as route from "../../routes"

const Header = () => {
  return (
    <PageHeader
      ghost={false}
      //   onBack={() => window.history.back()}
      title="Movie database"
      subTitle="See all movies"
      extra={[
        <Link key="1" route={route.FAVORITE} name="Favorites"/>,
      ]}
    ></PageHeader>
  )
}

export default Header
