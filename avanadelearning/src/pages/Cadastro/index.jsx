import React, { useState } from "react";
import "./styles/style.css";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { FiMail } from "react-icons/fi";
import { MdOutlineLock } from 'react-icons/md';
import { AiOutlineUser } from 'react-icons/ai'
import { useHistory } from "react-router";
import { api } from "../../services/api";
import Logo from "../../AvanadeLogo.svg";

export function Cadastro() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const createAccount = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("userToken");

    console.log(email, name, password, confirmPassword);

    if (password == confirmPassword) {
      try {
        const { data, status } = await api.post(
          "Usuario",
          {
            // idUsuario: userInfo.jti,
            Email: email,
            Nome: name,
            Senha: password,
          },
          {
            headers: {
              Authorization: "Bearer " + token,
            },
          }
        );

        if(status === 200)
          history.push("/login");

      } catch (error) {
        throw new Error(error.message)        
      }
    }
    else {
      setErrorMessage("Dados Inválidos");
      console.log(errorMessage);
    }
  };

  return (
    <div>
      <div className="contentArea">
        <div className="sectionAreaAround">
          <section className="sectionFormArea">
            <form onSubmit={(e) => createAccount(e)} className="formFromSignIn">
              <h1>Crie sua conta</h1>
              <div >
                <Input
                  type="email"
                  placeholder="Seu E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  icon={<FiMail />}
                />
                <Input
                  type="text"
                  placeholder="Seu Nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  icon={<AiOutlineUser />}
                />
                <Input
                  type="password"
                  placeholder="Sua Senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  icon={<MdOutlineLock />}
                />
                <Input
                  type="password"
                  placeholder="Confirme sua senha"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  icon={<MdOutlineLock />}
                />
                <p>
                  Ao se registrar, você aceita nossos <a className="gambi">termos de uso</a> e a
                  nossa <a className="gambi">política de privacidade</a>.
                </p>

                <Button type="submit">Cadastrar</Button>
              </div>
            </form>
          </section>
          <section className="sectionWithContent">
            <div className="logoArea">
            <img src={Logo}/>
            <h1>Avanade Learning</h1>              
            </div>
            <h2>Mais de 50 mil Avanade students já estão conectados.</h2>
            <h3>
              Junte-se a milhares de guerreiros e guerreiras e venha fazer parte
              da melhor plataforma de cursos livres
            </h3>
            <a>Voltar para Login</a>
          </section>
        </div>
      </div>
    </div>
  );
}
