import "antd/dist/antd.css"
import * as route from "../../routes"
import { Routes, Route } from "react-router-dom"
import Detail from "../../pages/Detail"
import Favorite from "../../pages/Favorite"
import Search from "../../pages/Search"

function App() {
  return (
    <Routes>
      <Route path={route.SEARCH} element={<Search />} />
      <Route path={route.DETAIL} element={<Detail />} />
      <Route path={route.FAVORITE} element={<Favorite />} />
    </Routes>
  )
}

export default App
