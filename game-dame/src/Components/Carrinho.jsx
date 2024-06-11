function Carrinho(){
    return (
        <div>
            <div className="bigbox"></div>
            <div className="titleCart">Carrinho de Compras</div>
            <div className="infoBob">SpongeBob: Battle for BikiniBottom</div>
            <div className="bobPlat">Plataforma: PC</div>
            <div className="bobPic"><img src="src/Images/bob.png" width={190} height={250}></img></div>
            <div className="bobPrice">R$ 299,00</div>
            <div className="infoDeath">Death Stranding</div>
            <div className="deathPlat">Plataforma: PC</div>
            <div className="deathPic"><img src="src/Images/death.png" width={190} height={250}></img></div>
            <div className="deathPrice">R$299,00</div>
            <div className="thisLine"></div>
            <div className="totalPrice">R$598,00</div>
            <div className="total">Total</div>
            <div className="otherbox"></div>
        </div>
    )
}

export default Carrinho