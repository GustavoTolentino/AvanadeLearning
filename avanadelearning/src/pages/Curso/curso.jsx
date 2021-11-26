import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { api } from "../../services/api";
import "../Curso/style/curso.css";

import icon from "../../assets/img/React-icon.svg";
import clock from "../../assets/img/clock.svg";
import iconManicure from "../../assets/img/manicure.svg";
import iconCss1 from "../../assets/img/css.svg";
import iconCss2 from "../../assets/img/css.svg";
import iconI from "../../assets/img/search.svg";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";

import { Card } from "../../components/Common/Card";
import { InputS } from "../../components/Common/Search/index";
// const { Meta } = Card;

//https://dev.to/alexandrefreire/react-native-flexbox-55gk
//https://www.kadunew.com/blog/css/diferenca-entre-as-propriedades-margin-e-padding-do-css
//https://medium.com/reactbrasil/criando-lista-din%C3%A2mica-utilizando-reactjs-38f5faf65431

export function Curso() {
  const history = useHistory();
  const [listaCursos, setListaCursos] = useState([]);
  const [search, setSearch] = useState('');

  // const [nome, setName] = useState("");
  // const [descricao, setDescricao] = useState("");
  // const [imagem, setImagem] = useState("");
  // const [horas, setHoras] = useState("");
  // const [isLoading, setIsLoading] = useState(false);
  // const [searchField, setSearchField] = useState("");
  // const [searchShow, setSearchShow] = useState(false);


  async function getCursos() {
    const { data, status } = await api.get("/Cursos")
    if (status == 200) {
      setListaCursos(data);
      console.log(data);
    }
  }

  // const handleChange = ({ target }) => {
  //   // se não tiver target.value
  //   if (target.value) {
  //     //nós vamos setar os repsitórios
  //     setSearch(listaCursos)
  //   }
  // }

  useEffect(() => {
    getCursos();
  
  },[]);

  console.log(search);


  return (
    <div>
      <div className="areaT">
        <div className=" flex-center-bt">
          <div className="titleA">
            <h2>Mercado de missões</h2>

            {/* Botão de busca */}
            <InputS
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              icon={<FiSearch />}
            />


          </div>
        </div>
      </div>

      {/* seção dos cursos */}
      <section className="areaKey">
        <div className="content">
          <div className="tArea">
            <h3>Missões de Tecnologia</h3>
          </div>
          <div className="card">
            {listaCursos.map((tipoCurso) => {
              return (
                <Card
                  key={tipoCurso.idCurso}
                  icon={tipoCurso.imagem}
                  textC={tipoCurso.descricao}
                  time={tipoCurso.horas}
                  // onChange={(e) => redirectAula(e.target.value)}
                  icon={iconCss2}
                  time="06h"
                  textC="React.js: Criando o projeto e
                     instalando os pacotes"
                />
              );
            })}
            {
              listaCursos.map((tipoCurso) => {
                return (
                  <Card
                    key={tipoCurso.idCurso}
                    id={tipoCurso.idCurso}
                    nome={tipoCurso.nome}
                    icon={tipoCurso.imagem}
                    textC={tipoCurso.descricao}
                    time={tipoCurso.horas}
                    // iconH={<AiOutlineClockCircle />}
                    onChange={(e) => setListaCursos(e.target.value)}
                  />
                );
              })
            }
            <Card
              // onChange={(e) => redirectAula(e.target.value)}
              icon={iconCss2}
              iconH={<AiOutlineClockCircle />}
              time="06h"
              textC="React.js: Criando o projeto e
                                 instalando os pacotes"
            />

            {/*<Card
              onChange={(e) => redirectAula(e.target.value)}
              icon={iconCss2}
              time="06h"
              textC="React.js: Criando o projeto e
                                 instalando os pacotes"
            />
              <Card
              onChange={(e) => redirectAula(e.target.value)}
              icon={iconCss2}
              time="06h"
              textC="React.js: Criando o projeto e
                                 instalando os pacotes"
            />
              <Card
              onChange={(e) => redirectAula(e.target.value)}
              icon={iconCss2}
              time="06h"
              textC="React.js: Criando o projeto e
                                 instalando os pacotes"
            />
            <Card
              onChange={(e) => redirectAula(e.target.value)}
              icon={iconCss2}
              time="06h"
              textC="React.js: Criando o projeto e
                                 instalando os pacotes"
            />
            <Card
              onChange={(e) => redirectAula(e.target.value)}
              icon={iconCss2}
              time="06h"
              textC="React.js: Criando o projeto e
                                 instalando os pacotes"
            />
            <Card
              onChange={(e) => redirectAula(e.target.value)}
              icon={iconCss2}
              time="06h"
              textC="React.js: Criando o projeto e
                                 instalando os pacotes"
            /> */}
          </div>
        </div>
      </section>

      {/* seção dos cursos  2*/}
      <section className="areaKey ">
        <div className="content">
          <div className="tArea">
            <h3>Missões Diversas</h3>
          </div>
          <div className="card3">
            {
              listaCursos.map((tipoCurso) => {
                return (
                  <Card
                key={tipoCurso.idCurso}
                    id={tipoCurso.idCurso}
                    nome={tipoCurso.nome}
                    icon={tipoCurso.imagem}
                    textC={tipoCurso.descricao}
                    time={tipoCurso.horas}
                    // iconH={<AiOutlineClockCircle />}
                    onChange={(e) => setListaCursos(e.target.value)}
                  />
                );
              })
            }
            <Card
              icon={iconManicure}
              time="06h"
              textC="Manicure: Aprendendo sobre
              o contraste das cores"
            />
          </div>
        </div>
      </section>
      <div className="adress">
        <p>Todos os direitos reservados © Avanade Learning 2021</p>
      </div>
    </div>
  );
}
