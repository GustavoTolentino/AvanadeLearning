// import React, { useEffect, useState } from "react";
import "./styles/style.css";
import { api } from "../../../services/api";


import { useHistory } from "react-router-dom";
import React, { useEffect, useState } from "react";



export function CadastrarCurso(){
    const history = useHistory();
    const [idCurso, setIdCurso] = useState("");
    const [nome,setName] = useState("");
    const [descricao, setDescricao] = useState("");
    const [imagem, setImagem] = useState("");
    const [horas,setHoras] = useState("");
    const [listaCurso,setListaCurso] = useState("");

    return(
        <h1>ola</h1>
    )
}