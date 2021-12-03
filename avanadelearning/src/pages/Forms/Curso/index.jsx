// import React, { useEffect, useState } from "react";
import "./styles/style.css";
import { api } from "../../../services/api";

import { MdOutlineLock, MdLocationPin, MdClose, MdEdit } from "react-icons/md";
import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FormF } from "../../../components/Forms/FormFive";
// import { Button } from "../../../components/Common/Button";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ListSixElements } from "../../../components/Lists/ListSixElements/index";

export function CadastrarCurso() {
    const history = useHistory();
    const [idCurso, setIdCurso] = useState("");
    const [nome, setName] = useState("");
    const [descricao, setDescricao] = useState("");
    const [imagem, setImagem] = useState("");
    const [horas, setHoras] = useState("");
    const [video, setVideo] = useState("");
    const [pontos,setPontos]  = useState("");
    const [listaCurso, setListaCurso] = useState("");

    const redirectBack = async (e) => {
        history.push("/curso");
    };

    useEffect(() => {
        getCursos();
    }, []);

    //mapeando a lista de cursos
    async function getCursos() {
        const { data, status } = await api.get("/Cursos");
        // console.log("Entrou no método de Get");
        if (status === 200) {
            setListaCurso(data);
            console.log(data);
            console.log("Listagem de cursos feita com sucesso!");
        }
    }

    // Chamada para o cadastro de cursos
    // const postCurses = async (e) => {
    //     e.preventDefault();

    //     const { data, status } = await api.post("/Cursos")
    // }


    // renderiza a pagina de cadastrar cursos
    return (
        <div className="curseScreen">
            <div className="contentArea">
                <div className="displayColumn">
                    <div className="curseReturn">
                        <a onClick={redirectBack}>Voltar</a>
                    </div>
                    {/* Seção formulário */}
                    <div className="curseRow">
                        <div classNama="colunmForm">
                            <FormF>

                            </FormF>
                        </div>

                        {/* Tabela da listagem de cursos */}
                        <ListSixElements title="Listagem dos cursos">
                            <tr>
                                <th>Nome</th>
                                <th>Texto</th>
                                <th>Vídeo</th>
                                <th>Imagem</th>
                                <th>Pontos</th>
                            </tr>
                            {/* Lista dos cursos existentes */}
                            {listaCurso.map((curso) => (
                                <tr key={curso.idCurso} classNama="trBody">
                                    <td>{curso.nome}</td>
                                    <td>{curso.descricao}</td>
                                    <td>{curso.video}</td>
                                    <td>{curso.imagem}</td>
                                    <td>{curso.pontos}</td>
                                    {/* <td>
                                        <div id="icons">
                                            <MdEdit
                                                onClick={() => {
                                                    setName(curso.nome);
                                                    setDescricao(curso.descricao);
                                                    setImagem(curso.imagem);
                                                    setHoras(curso.horas);
                                                    setVideo(curso.video);
                                                    setPontos(curso.pontos);
                                                }}
                                                className="icon edit-icon"
                                            />
                                            <MdClose
                                                // onClick={() => deleteCursos(curso.idCurso)}
                                                // className="icon close-icon"
                                            />
                                        </div>
                                    </td> */}
                                </tr>

                            ))}
                        </ListSixElements>
                    </div>

                </div>
            </div>
        </div>
    )
}