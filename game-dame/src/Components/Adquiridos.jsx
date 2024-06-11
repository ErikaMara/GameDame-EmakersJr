import { useState } from 'react'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Adquiridos = () => {
    return (
        <div>
            <div className="retangulo2"></div>
            <p className="adq">Jogos adquiridos:</p>
            <img className="bob1" src="src/Images/bob.png" width={190} height={250}></img>
            <img className="deliver1" src="src/Images/deliver.png" width={190} height={250}></img>
            <img className="god" src="src/Images/god.png" width={190} height={250}></img>
            <img className="death1" src="src/Images/death.png" width={190} height={250}></img>
            <p className='avl'>100/100</p>
            <p className='avl2'>95/100</p>
            <p className='avl3'>75/100</p>
            <a id="dif">
                <div className='avl4'>Adicionar Avaliação</div>
            </a>
            <div className="circle2">
                <a id="shop" href='/shoppingCart' >
                    <button className="shopping2" >
                        <FontAwesomeIcon icon={faCartShopping} flip="horizontal"    ></FontAwesomeIcon>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Adquiridos