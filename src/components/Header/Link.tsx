import { Link } from "react-router-dom"

type Props = {
  route: string
  name: string
}

const HeaderLink = ({ route, name }: Props) => {
  return <Link to={route}>{name}</Link>
}

export default HeaderLink
