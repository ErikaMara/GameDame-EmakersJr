import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function Lancamentos() {
    return (
        <div className="lancamentos">
            <p className="titulo">Lançamentos</p>
            <img className="bob" src="src/Images/bob.png" width={190} height={250}></img>
            <div className="preco1">R$299,90</div>
            <img className="deliver" src="src/Images/deliver.png" width={190} height={250}></img>
            <div className='preco2'>R$299,00</div>
            <img className="spellforce" src="src/Images/spellforce.png" width={190} height={250}></img>
            <div className='preco3'>R$299,00</div>
            <img className="death" src="src/Images/death.png" width={190} height={250}></img>
            <div className='preco4'>R$299,00</div>
            <img className="perish" src="src/Images/perish.png" width={190} height={250}></img>
            <div className='preco5'>R$299,00</div>
            <div className="circle">
                <a id="shop" href='/shoppingCart' >
                    <button className="shopping">
                        <FontAwesomeIcon icon={faCartShopping} flip="horizontal" color='white'></FontAwesomeIcon>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Lancamentos