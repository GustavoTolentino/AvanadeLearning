import React, { useState, useEffect } from "react";
import "./styles/style.css";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/Common/Button";
import { api } from "../../services/api";
import { Title } from "../../components/Common/Title";

export function Aula() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lessonLink, setLessonLink] = useState("");
  const [lessonTitle, setLessonTitle] = useState("");
  const [videoID, setVideoID] = useState("");
  useEffect(() => {
    getLessonLink();
  }, "");

  async function getLessonLink() {
    console.log("chamado");

    // let link = "https://youtu.be/C5-3JUkA3Uo" + "?rel=0";
    await setLessonLink(
      "https://www.youtube.com/embed/" + { videoID } + "?rel=0"
    );
  }
  const handleSignIn = async (e) => {
    e.preventDefault();

    // console.log("entrou no método");
    // const { data, status } = await api.post("/Login", {
    //   Email: email,
    //   Senha: password,
    // });

    // if (status === 200) {
    //   localStorage.setItem("userToken", data.token);
    //   console.log("resutlado da API foi 200");

    //   console.log(data);
    //   history.push("/curso");
    // }
  };
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  console.log(lessonLink);

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  return (
    <div className="videoPageContent">
      <div className="contentArea">
        <div className="videoColumn">
          <div className="lessonArea">
            <iframe
              src={lessonLink}
              allow="fullscreen;"
              frameBorder="0"
              width="640"
              height="360"
            />

            {/* AREA DE CURSO ASSISTIDO, FALTANDO COMPONENTE */}
          </div>
          <div>
            <Title>{lessonTitle}</Title>
          </div>
        </div>
      </div>
    </div>
  );
}
