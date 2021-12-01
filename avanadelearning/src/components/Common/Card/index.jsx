import React from "react";
import { CardWrapper } from "./style/CardWrapper";

// import teste from '../../../assets/img/csharp.png'
// var teste = '../../../assets/img/csharp.png'

// import clock from "../../assets/img/clock.svg";
// import clockIcon from 'FiClock';
/*https://medium.com/techatquero/rtfm-cards-5b20952e8bfa*/
//https://www.luiztools.com.br/post/tutorial-listagem-com-busca-em-reactjs/

export function Card({ iconH,icon,time, textC }) {
  return (
    <CardWrapper>
      {/*        
        {/* Icone do curso e as horas que dura */}
      <div className="iconC">
       {/* <img src={`../../../../assets/img/` + icon} /> */}
      <button><img src={`https://localhost:5001/Resources/Images/` + icon} alt="my image" onClick={icon} /> </button> 
      {/* <img src={`https://localhost:5001/Resources/Images/` + icon} /> */}

       {/* Convertendo a imagem em base64 */}
       {/* <img src={`data:imagem;base64,${icon}`} /> */}

       {/* Chamando a imagem com uma variavel */}
       {/* <img src={icon} /> */}
        <div className="iText flex-center-bt">
           {iconH}
          <p>{time}</p>
        </div>
      </div>
      {/* Descrição do curso */}
      <div className="tIcon">
        <p>{textC}</p>
      </div>
    </CardWrapper>
  );
}
