import React, { useState, useEffect } from "react";
import "./styles/style.css";
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "../../components/Common/Button";
import { api } from "../../services/api";
import { Title } from "../../components/Common/Title";
import { Description } from "../../components/Common/Description";
import { TableSeen } from "../../components/Common/TableSeen";
import ReactDOM from "react-dom";

export function Aula() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lessonLink, setLessonLink] = useState("");
  const [lessonTitle, setLessonTitle] = useState("");
  const [videoID, setVideoID] = useState("");
  const [description, setVideoDescription] = useState("");
  const [lessonInfo, setLessonInfo] = useState({});

  useEffect(() => {
    LoadPage();
  }, []);

  const LoadPage = async () => {
    try {
      await GetLessonInfo(3);
    } catch (error) {
      await loadDataError();
    }
  };

  const GetLessonInfo = async (id) => {
    try {
      const { data, status } = await api.get(`/aulas/${id}`);
      if (status === 200) {
        setLessonInfo(data);
        setLessonLink("https://www.youtube.com/embed/" + data.video + "?rel=0");
      }
    } catch (error) {
      loadDataError();
    }
  };

  const loadDataError = () => {
    toast.error("Infelizmente houve um erro na Exclusão", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  

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
            <TableSeen>Teste</TableSeen>
          </div>
          <div className="videoInfoArea">
            <Title>React.js testando sei la o que</Title>
            <h2>Descrição</h2>
            <div>
              <hr></hr>
              <hr></hr>
            </div>
            <Description>{lessonInfo.descricao}</Description>
          </div>
        </div>
      </div>
    </div>
  );
}
