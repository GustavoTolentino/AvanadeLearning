import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { api } from '../../services/api';


// import { Card } from '../../components/Card';

import {Link, useHistory} from 'react-router-dom';

import img1 from '../../assets/img/desco.svg';
import img2 from '../../assets/img/img1.svg';
import img3 from '../../assets/img/img3.svg';
import img4 from '../../assets/img/img4.svg';
import img5 from '../../assets/img/img2.svg';
import banner from '../../assets/img/banner.png';

import '../../assets/img/img 2.svg';
import '../../assets/css/home.css';


export function Home(){
    return(
        <div>
            <div className="sectionKey">
                    {/* <img src={banner} alt="" /> */}
                    <div className="t">
                        <img src={img1} alt="" />
                    </div>
                    <div className="content flex-center-bt">
                        <div className="textBanner">
                            <h2>O melhor site & app <br/> para aprender na internet! </h2>
                            <hr></hr>
                            <Button border>QUERO COMEÇAR!</Button>
                        </div>
                        <div className="picture">
                            <img src={img2} alt="banner da primeira seção" />
                        </div>
                    </div>

                  

                    {/* <div>
                        <h1>Icone do curso</h1>
                        <h1>Icone do relogio</h1>
                        <p>06h</p>
                        <p>React.js: Criando o projeto e
                            instalando os pacotes</p>
                    </div> */}

                    <div className="sectionKeySecond">
                        <div className=" content flex-center-bt">
                                <div className="bannerText ">
                                    <img src={img3} alt="" />
                                    <div className="textB">
                                        <h2>Começe a aprender!</h2>
                                        <p>
                                            Cadastre-se e comece a fazer vários <br/>
                                            cursos que elevaram a sua carreira <br/> e capacitaram você para o mundo <br/>de trabalho.
                                        </p>
                                    </div>

                                </div>
                        </div>
                                
                    </div>
                    
                    <div className="sectionKeySecond">
                        <div className="content flex-center-bt">
                                <div className="bannerText">
                                    <div className="textB">
                                        <h2>Troque informações</h2>
                                        <p>
                                            Em cada curso você poderá conversar <br/>  com outras 
                                            pessoas e trocar dicas  e <br/> informações sobre o assunto.
                                        </p>
                                    </div>
                                    <img src={img4} alt="" />

                                </div>
                        </div>
                                
                    </div>

                    <div className="sectionOver">
                        <div className="flex-center-bt">
                            <div className="bText">
                                <img src={img5} alt="" />
                                <div className="tb">
                                    <h2>Compita com outros estudantes</h2>
                                    <p>
                                        Faça cursos, ganhe conquistas para obter <br/> pontos e se destaque dos outros <br/> estudantes.
                                    </p>
                                    <Button border>Começar a competir!</Button>
                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Rodapé */}

                    <div className="adress">
                        <p>Todos os direitos reservados © Avanade Learning 2021</p>

                    </div>
            </div>
        </div>
    )

}
   
           