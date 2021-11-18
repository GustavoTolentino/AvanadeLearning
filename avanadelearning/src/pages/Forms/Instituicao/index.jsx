import React, { useState } from "react";
import "./styles/style.css";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/Button";
import { api } from "../../services/api";
import { Input } from "../../components/Input";
import { FiMail } from "react-icons/fi";
import { MdOutlineLock } from "react-icons/md";
import Logo from "../Login/logoPedro.svg";

export function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();

    console.log("entrou no método");
    const { data, status } = await api.post("/Login", {
      Email: email,
      Senha: password,
    });

    if (status === 200) {
      localStorage.setItem("userToken", data.token);
      console.log("resutlado da API foi 200");

      console.log(data);
      history.push("/curso");
    }
  };

  const redirectBack = async (e) => {
    history.push("/cadastro");
  };

  return (
    <div>
      
    </div>
  );
}
