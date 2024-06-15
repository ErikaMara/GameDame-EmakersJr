import "./Admin.css"
import NavBar from "../Components/NavBar";

const Admin = () => {
    return (
        <div>
            <NavBar />
            <div className="r1"></div>
            <div className="cadastrarJogo">Cadastrar Jogo</div>
            <input type="text" id="i1" placeholder="Título do jogo" />
            <input type="text" id="i2" placeholder="Gênero" />
            <input type="text" id="i3" placeholder="Descrição" />
            <button className="file-btn">Inserir imagem</button>
            <button className="cadastro">Cadastrar</button>
            <div className="r2"></div>
            <div className="removerJogo">Remover Jogo</div>
            <input type="text" id="i4" placeholder="Título do jogo ou ID" />
            <button className="remove">Remover</button>
            <div className="r3"></div>
            <div className="editarJogo">Editar Jogo</div>
            <input type="text" id="i5" placeholder="Título do jogo" />
            <input type="text" id="i6" placeholder="Gênero" />
            <input type="text" id="i7" placeholder="Descrição" />
            <button className="file-btn2">Inserir imagem</button>
            <button className="modificar">Modificar</button>
        </div>
    )
}

export default Admin