import Results from "../../components/FavoritesResults"
import Info from "../../components/Info"

const Content = () => {
  const favoritesData = localStorage.getItem("favorites")
  return (
    <>
      {favoritesData === null ? (
        <Info message="You have no favorite movies yet" type="info" />
      ) : (
        <Results data={JSON.parse(favoritesData)} />
      )}
    </>
  )
}

export default Content
