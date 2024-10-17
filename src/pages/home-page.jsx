import Navbar from "../components/navbar"
import Slide from "../components/slide"
import Categories from "../components/categories"
import Listings from "../components/listings"
import Footer from "../components/footer"

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Slide />
      <Categories />
      <Listings />
      <Footer />
    </>
  )
}

export default HomePage