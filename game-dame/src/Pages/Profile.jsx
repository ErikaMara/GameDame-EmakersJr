import NavBar from "../Components/NavBar"
import Adquiridos from "../Components/Adquiridos";
import { BiSolidPencil } from "react-icons/bi";
import { FaTrashCan } from "react-icons/fa6";
import { GrUserAdmin } from "react-icons/gr";
import "./Profile.css"

const Profile = () => {
    const nomeUsuario = '<<Nome do Usuário>>'
    const emailUsuario = 'nomeusuario@gmail.com'
    const cpfUsuario = '123.456.789-00'

    return (
        <div>
            <NavBar />
            <div className="rec27"></div>
            <div className="ola">Olá, {nomeUsuario}</div>
            <div className="emailUsuario">Seu email é {emailUsuario}</div>
            <div className="cpfUsuario">Seu CPF é {cpfUsuario}</div>
            <a id="dif">
                <div className="alterarDados">Alterar Dados <BiSolidPencil color="#FBF6F0" /></div>
            </a>
            <a id='dif'>
                <div className='excluirConta'>Excluir Conta <FaTrashCan color="#FBF6F0" /></div>
            </a>
            <a id='dif' href="/admin">
                <div className='telaAdmin'>Tela do Admin <GrUserAdmin color="#FBF6F0" /></div>
            </a>
            <Adquiridos />
        </div>
    )
}

export default Profile