import React, { useState } from "react";
import "./styles/style.css";
import { useHistory } from "react-router-dom";
import { Button } from "../../components/Common/Button";
import { api } from "../../services/api";
import { Input } from "../../components/Common/Input";
import { FiMail } from "react-icons/fi";
import { MdOutlineLock } from "react-icons/md";
import Logo from "../../assets/img/logoPedro.svg";

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

  const redirectRegister = async (e) => {
    history.push("/cadastro");
  };

  return (
    <div>
      <link
        rel="stylesheet"
        type="text/css"
        media="screen"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="sca">
        <div className="bca">
          <div className="logoLoginArea">
            <img src={Logo} style={{ width: "128px" }} />
            <h2>Avanade Learning</h2>
          </div>
          <div>
            <h1 className="texttes">
              Faça seu login <br />
              na plataforma
            </h1>
          </div>
        </div>
        <div className="rfa">
          <section className="sfa">
            <form onSubmit={(e) => handleSignIn(e)} className="fia">
              <h3>Entre em sua conta</h3>

              <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                icon={<FiMail />}
              />

              <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                icon={<MdOutlineLock />}
              />

              <a className="fmpl">Esqueci minha senha</a>
              <Button type="submit">Entrar</Button>
              <h4 className="nhal">
                Não tem conta?{" "}
                <a onClick={redirectRegister} className="llo">
                  Registre-se
                </a>
              </h4>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
