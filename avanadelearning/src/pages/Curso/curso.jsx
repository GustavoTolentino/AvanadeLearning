import React, { useState } from "react";
// import { HiSearch } from 'react-icons/HiSearch';
// import { Button } from "../../components/Commom/Button";
import { api } from "../../services/api";
// import { Link, useHistory } from "react-router-dom";
// <<<<<<< HEAD
// import { FiClock } from 'react-icons/fi';



// <<<<<<< HEAD
import icon from "../../assets/img/React-icon.svg";
import clock from "../../assets/img/clock.svg";
import iconManicure from "../../assets/img/manicure.svg";
import iconCss1 from "../../assets/img/css.svg";
import iconCss2 from "../../assets/img/css.svg";
import iconI from "../../assets/img/search.svg";
import { FiSearch } from 'react-icons/fi';
import { Card } from "../../components/Common/Card";
import { InputS } from "../../components/Search/index";
import "../Curso/style/curso.css";
// import { SearchWrapper } from "../../components/Search/style/SearchWrapper";

// const { Meta } = Card;
export function Curso() {
  // constructor(props) {
  //     super(props)
  // }

  // state = {
  //     postings: [],
  // }

  // componentDidMount() {
  //   this.loadPostings() 
  // }

  // loadPostings = async () => {
  //     const response = await api.get(`/posts?userId=${this.props.match.params.userId}`)
  //     this.setState({postings: response.data})
  // }



  return (
    <div>
      <div className="areaT">
        <div className=" flex-center-bt">
          <div className="titleA">
            <h2>Mercado de missões</h2>

            {/* Botão de busca */}
            <InputS
              // className="search"
              // placeholder="pesquisar"
              icon={<FiSearch />}
            />
           
              
        

            {/* <input
              id="search"
              className="search"
              // placeholder='ID de usuário'
              // value={userId}
              // onChange={(e) => this.setState({userId: e.target.value})}
              >
            </input>  */}


          </div>
        </div>
      </div>

      {/* seção dos cursos */}
      <section className="areaKey">
        <div className="content">
          <div className="tArea">
            <h3>Missões de Tecnologia</h3>
          </div>
          <div className="card ">
            <Card
              icon={iconCss2}
              time="06h"
              textC="React.js: Criando o projeto e
                                 instalando os pacotes"
            />

            <Card
              icon={iconCss2}
              time="08h"
              textC="React.js: Criando os arquivos
                                 e gerando os métodos"
            />

            <Card
              icon={iconCss2}
              time="12h"
              textC="React.js: Componentizando
                                as entidades da tela"
            />

            <Card
              icon={iconCss2}
              time="99h"
              textC="React.js: Paulo Experiente - Curso profissional"
            />


          </div>

          <div className="card2">
            <Card
              icon={iconCss1}
              time="04h"
              textC="Css: Estilizando textos e backgrounds"
            />
            <Card
              icon={iconCss1}
              time="12h"
              textC="Css: alinhando conteúdo de forma responsiva"
            />
          </div>
        </div>
      </section>

      {/* seção dos cursos  2*/}
      <section className="areaKey ">
        <div className="content">
          <div className="tArea">
            <h3>Missões Diversas</h3>
          </div>
          <div className="card2">
            <Card
              icon={iconManicure}
              time="06h"
              textC="Manicure: Estudando sobre
                            boas práticas de higiene"
            />

            <Card
              icon={iconManicure}
              time="18h"
              textC="Manicure: Conceitos avança
                        dos de manipulaçao de
                        elementos químicos"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
