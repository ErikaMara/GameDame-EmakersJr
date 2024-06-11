import "./GameScreen.css"
import NavBar from "../Components/NavBar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FaShoppingCart } from "react-icons/fa";

const GameScreen = () => {
    return (
        <div>
            <NavBar />
            <img className="gow" src="src/Images/gow.png"></img>
            <div className="disc">-40%</div>
            <div className="pricetag">R$ 119,95</div>
            <div className="ball">
                <p className="noveoito">98%</p>
            </div>
            <div className="rtng"></div>
            <div className="titleGod">God of War</div>
            <div className="text">
                Com a vingança contra os deuses do Olimpo em um passado distante, Kratos agora vive como um mortal no
                reino dos deuses e monstros nórdicos. É nesse mundo duro e implacável que ele deve lutar para sobreviver... e ensinar seu
                filho a fazer o mesmo.
            </div>
            <div className="whiteline"></div>
            <div className="adcCart">Adicionar ao Carrinho <FaShoppingCart /></div>
            <div className="reembolso">Solicitar Reembolso <FaShoppingCart /></div>
            <div className="ball2">
                <a id="shop" href='/shoppingCart' >
                    <button className="shoppingCart" >
                        <FontAwesomeIcon icon={faCartShopping} flip="horizontal"></FontAwesomeIcon>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default GameScreen
