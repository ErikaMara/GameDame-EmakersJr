import "./Login.css"
import { FaArrowRightLong } from "react-icons/fa6";

const Login = () => {
  return (
    <div>
      <div className='login-container'>
        <img className="imagem" src="src/Images/image.png"></img>
      </div>
      <div>
        <div className="quadrado">
          <p className="login">Login</p>
          <input className="email" type="email" placeholder="E-mail"></input>
          <input className="senha" type="password" placeholder="Senha"></input>
        </div>
      </div>
      <div className="rec">
        <a href="/home">
          <div className="seta1"><FaArrowRightLong /></div>
        </a>
      </div>
      <a href="/register">
        <div className="register1" title="Criar novo perfil">Criar Conta</div>
      </a>
      <a href="/forgotPassword">
        <div className="forgot" title="Recuperar conta">Esqueceu a senha?</div>
      </a>
    </div>
  )
}

export default Login
