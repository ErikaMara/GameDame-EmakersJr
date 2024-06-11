import { useState } from "react"
import "./HomePage.css"
import NavBar from "../Components/NavBar";
import Carousel from "../Components/Carousel";
import Lancamentos from "../Components/Lancamentos";

function HomePage() {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Lancamentos />
    </div>
  )
}

export default HomePage