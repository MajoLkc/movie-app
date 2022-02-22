import { NavLink } from "react-router-dom"

const inactiveClass = {
  margin: "7px 25px",
  padding: "5px 15px",
  color: "white",
  border: "1px solid white",
  borderRadius: "2px",
}

const activeClass = {
  ...inactiveClass,
  border: "1px solid red",
  color: "red",
}

type HeaderLinkProps = {
  route: string
  name: string
}

const HeaderLink: React.FC<HeaderLinkProps> = ({ route, name }) => {
  return (
    <NavLink
      style={({ isActive }) => (isActive ? activeClass : inactiveClass)}
      to={route}
    >
      {name}
    </NavLink>
  )
}

export default HeaderLink
