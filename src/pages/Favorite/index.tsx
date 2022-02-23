import Headline from "../../components/Headline"
import Page from "../../components/Page"

const Favorite = () => {
  const favoritesData = localStorage.getItem("favorites")
  
  console.log(typeof(favoritesData))
  return (
    <>
      <Page>
        <Headline text="Favorite" level={1}/>
      </Page>
    </>
  )
}

export default Favorite
