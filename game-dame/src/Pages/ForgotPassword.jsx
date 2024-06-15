import "./ForgotPassword.css"
import { FaArrowRightLong } from "react-icons/fa6";

const ForgotPassword = () => {
    return (
        <div>
            <div className='container'>
                <img className="imagem" src="src/Images/image.png"></img>
            </div>
            <div className="rectangle1">
                <div className="recuperar">Recuperar Conta</div>
                <input className="emailForg" type="email" placeholder="E-mail" />
                <div className="rec">
                    <a href="/login">
                        <div className="seta3"><FaArrowRightLong /></div>
                    </a>
                </div>
                <a href="/login">
                    <div className="fazerLogin">Fazer Login</div>
                </a>
                <a href="/register">
                    <div className="register1" title="Criar novo perfil">Criar Conta</div>
                </a>
            </div>
        </div>
    )
}

export default ForgotPassword