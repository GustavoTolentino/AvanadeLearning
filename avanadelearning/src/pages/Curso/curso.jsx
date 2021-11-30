import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { api } from "../../services/api";
import "../Curso/style/curso.css";

// import icon from "../../assets/img/React-icon.svg";
// import clock from "../../assets/img/clock.png";
// import iconManicure from "../../assets/img/manicure.svg";
// import iconCss1 from "../../assets/img/css.svg";
// import iconCss2 from "../../assets/img/css.svg";
// import iconI from "../../assets/img/search.svg";
import { FiSearch } from "react-icons/fi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { Card } from "../../components/Common/Card";
import { InputS } from "../../components/Common/Search/index";



//https://dev.to/alexandrefreire/react-native-flexbox-55gk
//https://www.kadunew.com/blog/css/diferenca-entre-as-propriedades-margin-e-padding-do-css
//https://medium.com/reactbrasil/criando-lista-din%C3%A2mica-utilizando-reactjs-38f5faf65431

export function Curso() {
  const history = useHistory();
  const [listaCursos, setListaCursos] = useState([]);
  const [search, setSearch] = useState("");
  const [image, setImage] = useState("");

  
  //faz a chamada para a  Listagem de todos os cursos existentes
  async function getCursos() {
    const { data, status } = await api.get("/Cursos");
    if (status == 200) {
      setListaCursos(data);
      console.log(data);
    }
  }
  
  // filtro de busca
  const Buscar = (busca) => {
    setSearch(busca);
    const filtro = listaCursos.filter(e => {
      if (busca === '') {
        getCursos();
        return e
      }
      else if (e.nome.toLocaleLowerCase().includes(busca.toLocaleLowerCase())) {
        return e
      }
      return null
    });
    setListaCursos(filtro);
  } 

  async function getImage() {
    setImage("https://localhost:5001/api/Resources/Image")
  }

  // renderiza a lista de cursos
  useEffect(() => {
    getCursos();
 
  }, []);
  //retorna no console a chamada de search
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
              onChange={(e) => Buscar(e.target.value)}
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
                console.log(tipoCurso.imagem),
                <Card
                  key={tipoCurso.idCurso}
                  id={tipoCurso.idCurso}
                  nome={tipoCurso.nome}
                  icon={tipoCurso.imagem}
                  textC={tipoCurso.descricao}
                  iconH={<AiOutlineClockCircle />}
                  time={tipoCurso.horas + 'h'}
                  onChange={(e) => setListaCursos(e.target.value)}
                />
              );
            })}
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
            {listaCursos.map((tipoCurso) => {
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
            })}
          </div>
        </div>
      </section>
      <div className="adress">
        <p>Todos os direitos reservados © Avanade Learning 2021</p>
      </div>
    </div>
  );
}
