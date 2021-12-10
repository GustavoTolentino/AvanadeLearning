import "./styles/style.css";
import { api } from "../../../services/api";

// importando icones do react
import {  MdClose, MdEdit } from "react-icons/md";
import { IoImagesOutline } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsBank2 } from "react-icons/bs";

//https://stock.adobe.com/br/images/id/200844990?as_campaign=Flaticon&as_content=api&as_audience=idp&tduid=c6ebecb0f44c74f81130ec7b58cc9b30&as_channel=affiliate&as_campclass=redirect&as_source=arvato

import { useHistory } from "react-router-dom";
import { FormF } from "../../../components/Forms/FormFive";
// import { Button } from "../../../components/Common/Button";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ListSixElements } from "../../../components/Lists/ListSixElements/index";
import React, { useEffect, useState } from "react";

export function CadastrarCurso() {
    const history = useHistory();
    const [idCurso, setIdCurso] = useState("");
    const [idInstituicao, setInstituicao] = useState("");
    const [nome, setName] = useState("");
    const [descricao, setDescricao] = useState("");
    const [imagem, setImagem] = useState("");
    const [horas, setHoras] = useState("");
    const [listaCurso, setListaCurso] = useState([]);

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

    // chamada para o cadastro de cursos



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
                            <FormF
                                title="id da Instituição"
                                type="number"
                                placeholder="Id Instituição"
                                state={idInstituicao}
                                method={(e) => setInstituicao(e.target.value)}
                                icon={<BsBank2/>}

                                title="Curso"
                                type2="text"
                                placeholder2="Curso"
                                state2={nome}
                                method2={(e) => setName(e.target.value)}
                                icon2={<MdOutlineDescription/>}


                                title="descrição"
                                type3="text"
                                placeholder3="Descrição"
                                state3={descricao}
                                method3={(e) => setDescricao(e.target.value)}
                                icon3={<MdOutlineDescription/>}


                                title="imagem"
                                // type4="file"
                                type4="text"
                                placeholder4="Imagem"
                                state4={imagem}
                                method4={(e) => setImagem(e.target.value)}
                                icon4={<IoImagesOutline/>}

                                title="horas"
                                // type5="time"
                                type5="number"
                                placeholder5="Horas"
                                state5={horas}
                                method5={(e) => setHoras(e.target.value)}
                                icon5={<AiOutlineClockCircle/>}

                                // onSubmit={createCurse}
                             >
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
                                    <td>
                                        <div id="icons">
                                            <MdEdit
                                                onClick={() => {
                                                    setName(curso.nome);
                                                    setDescricao(curso.descricao);
                                                    setImagem(curso.imagem);
                                                    setHoras(curso.horas);
                                                    // setVideo(curso.video);
                                                    // setPontos(curso.pontos);
                                                }}
                                                className="icon edit-icon"
                                            />
                                            <MdClose

                                                className="icon close-icon"
                                            
                                            />
                                            {/* <MdClose
                                                onClick={() => deleteCursos(curso.idCurso)}
                                                className="icon close-icon"
                                            /> */}
                                        </div>
                                    </td>
                                </tr>

                            ))}
                        </ListSixElements>
                    </div>

                </div>
            </div>
        </div>
    )
}