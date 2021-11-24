import React from "react";
import { CardWrapper } from "./style/CardWrapper";
// import clock from "../../assets/img/clock.svg";
// import clockIcon from 'FiClock';
/*https://medium.com/techatquero/rtfm-cards-5b20952e8bfa*/
//https://www.luiztools.com.br/post/tutorial-listagem-com-busca-em-reactjs/

export function Card({ iconH,icon, time, textC }) {
  return (
    <CardWrapper>
      {/*        
        {/* Icone do curso e as horas que dura */}
      <div className="icon">
        <img src={icon} />
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
