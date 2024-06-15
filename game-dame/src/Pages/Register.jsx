import "./Register.css"
import { FaArrowRightLong } from "react-icons/fa6";

const Register = () => {
  return (
    <div>
      <div className='container'>
        <img className="imagem" src="src/Images/image.png"></img>
      </div>
      <div className="rectangle1">
        <div className="reg">Registrar</div>
        <input className="nome" type="text" placeholder="Nome de Usuário" />
        <input className="emailReg" type="email" placeholder="E-mail" />
        <input className="cpf" type="text" placeholder="CPF" />
        <input className="senhaReg" type="password" placeholder="Senha" />
        <input className="confirmar" type="password" placeholder="Confirmar Senha" />
        <div className="rec">
          <a href="/login">
            <div className="seta2"><FaArrowRightLong /></div>
          </a>
        </div>
        <a href="/login">
          <div className="fazerLogin">Fazer Login</div>
        </a>
      </div>
    </div>
  )
}

export default Register