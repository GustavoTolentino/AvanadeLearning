import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import {Link, useHistory} from 'react-router-dom';
// import { FiClock } from 'react-icons/fi';


import icon from '../../assets/img/React-icon.svg';
import iconManicure from '../../assets/img/manicure.png';
import clock from '../../assets/img/clock.svg';
import iconCss from '../../assets/img/css.png';


import { Card } from '../../components/card';
import '../Curso/style/curso.css';

    
// const { Meta } = Card;
export function Curso(){
    return(
        <div className="AreaT">
            <div className="content flex-center-bt">
                <div className="titleA">
                    <h3>Mercado de Missões</h3>

                    {/* Botão de busca */}
                    <input id='search' className='search' 
                        // placeholder='ID de usuário' 
                        // value={userId} 
                        // onChange={(e) => this.setState({userId: e.target.value})}
                        >
                    </input>
                </div>
            </div>

            {/* Seção cards cursos */}
            <div className="areaKey">
                <div className="content ">
                    <div className="tArea">
                        <h3>Missões de tecnologia</h3>
                    </div>
                    
                    <div className="keyC">

                        <div className="cards flex-center-bt">
                            <img src={icon} alt="" />
                            <p>React-js: Criando o projeto e instalando os pacotes</p>
                            {/* icone de horas */}
                        </div>
{/* 
                        <div className="cards flex-center-bt">
                            <img src={iconCss} alt="" />
                            <p>React-js: Criando o projeto e instalando os pacotes</p> */}
                            {/* icone de horas */}
                        {/* </div> */}

                        {/* <div className="cards flex-center-bt">
                            <img src={icon} alt="" />
                            <p>React-js: Criando o projeto e instalando os pacotes</p> */}
                            {/* icone de horas */}
                        {/* </div> */}

                      <Card icon={iconCss}  time="04h" textC="React.js: Criando os arquivos
                        e gerando os métodos"/>
                    </div>
                    
                </div>
            </div>

            <div className="areaKey">
                <div className="content ">
                    <div className="tArea">
                        <h3>Missões diversas</h3>
                    </div>
                    
                    <div className="keyC">

                        {/* <div className="cards flex-center-bt">
                            <img src={icon} alt="" />
                            <p>React-js: Criando o projeto e instalando os pacotes</p>
                            icone de horas
                        </div>

                        <div className="cards flex-center-bt">
                            <img src={icon} alt="" />
                            <p>React-js: Criando o projeto e instalando os pacotes</p>
                            icone de horas
                        </div>

                        <div className="cards flex-center-bt">
                            <img src={icon} alt="" />
                            <p>React-js: Criando o projeto e instalando os pacotes</p>
                            icone de horas
                        </div> */}

                        
                    </div>
                    
                </div>
            </div>


        </div>
    )
}