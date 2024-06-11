import "./HomePage.css"
import NavBar from "../Components/NavBar";
import Carousel from "../Components/Carousel";
import Lancamentos from "../Components/Lancamentos";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Lancamentos />
    </div>
  )
}

export default HomePage