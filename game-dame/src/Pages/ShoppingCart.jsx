import "./ShoppingCart.css"
import NavBar from "../Components/NavBar"
import Carrinho from "../Components/Carrinho"
import Pagamento from "../Components/Pagamento"

const ShoppingCart = () => {
    return (
        <div>
            <NavBar />
            <Carrinho />
            <Pagamento />
        </div>
    )
}

export default ShoppingCart