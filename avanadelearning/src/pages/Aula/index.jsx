import React, { useState, useEffect } from "react";
// import "./styles/style.css";
import { useHistory } from "react-router-dom";
import { ReactVideo } from "reactjs-media";
import YouTube from "react-youtube";
import { Button } from "../../components/Common/Button";
import { api } from "../../services/api";
import { FiMail } from "react-icons/fi";
import { MdOutlineLock } from "react-icons/md";

export function Aula() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lessonLink, setLessonLink] = useState("");

  useEffect(() => {
    getLessonLink();
  }, []);

  function getLessonLink() {
    console.log("chamado");
    setLessonLink("https://youtu.be/C5-3JUkA3Uo" + "?rel=0");
    console.log(lessonLink);
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

  function _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
  return (
    <div>
      <div className="contentArea">
        <YouTube videoId="ehJTwlmTfzU" opts={opts} onReady={_onReady} />
      </div>
      <ReactVideo
        src="https://youtu.be/ehJTwlmTfzU"
        poster="/poster.png"
        primaryColor="red"
        autoPlay
      />
      <iframe src={lessonLink} frameBorder="0" />
      {/* <iframe src="https://youtu.be/ehJTwlmTfzU"></iframe> */}
      {/* <iframe src="http://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com" /> */}
    </div>
  );
}
