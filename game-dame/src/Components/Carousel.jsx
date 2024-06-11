import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { IoEllipse } from "react-icons/io5";

function Carousel() {
    return (
        <div className='carousel'>
            <button className="botao-voltar"><IoIosArrowBack /></button>
            <div className="stack">
                <img className="jogo1" src="src/Images/daysgone.png" width={406} height={240}></img>
                <div className="discount1">-15%</div>
                <div className="price1">R$ 169,90</div>
                <img className="jogo3" src="src/Images/horizon.png" ></img>
                <div className="discount2">-25%</div>
                <div className="price2">R$ 149,99</div>
            </div>
            <a href='/gameScreen'>
                <img className="jogo2" src="src/Images/gow.png"></img>
            </a>
            <div className="discount3">-40%</div>
            <div className="price3">R$ 119,95</div>
            <button className="botao-avancar"><IoIosArrowForward /></button>
            <div className="elipses">
                <div className="elipse"><IoEllipse size={25} /></div>
                <div className="elipse2"><IoEllipse size={25} /></div>
                <div className="elipse3"><IoEllipse size={25} /></div>
                <div className="elipse4"><IoEllipse size={25} /></div>
            </div>
        </div>
    )
}

export default Carousel