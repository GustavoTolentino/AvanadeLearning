import React from "react";
import { Button } from "../../Common/Button";
import { HeaderWrapper } from "./styles/HeaderWrapper";
import { useHistory, Link } from "react-router-dom";
import { Avatar } from "../../Common/Avatar";
import { parseJwt, usuarioAutenticado } from "../../../services/auth";
import logo from "../../../assets/img/Logo.svg";
export function Header() {
  const history = useHistory();
  const userLoggedIn = usuarioAutenticado();
  const userInfo = localStorage.getItem("userToken") !== null && parseJwt();

  function handleSignout() {
    localStorage.removeItem("userToken");
    history.push("/");
  }

  return (
    <HeaderWrapper>
      <div className="contentAreaHeader">
        <div className="firstBlock">
          <div className="divLogo">
            <img src={logo}></img>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "40px",
            }}
          >
            <Link to="/">Home</Link>
            <Link to="/curso">Cursos</Link>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              // justifyContent: "space-between",
              gap: "24px",
              // border: "solid 2px green",
            }}
          >
            {userLoggedIn ? (
              <>
                {/* <Link to="/">Inicio</Link> */}
                <Button ghost onClick={handleSignout}>
                  Sair
                </Button>
                <div
                  className="header-avatar"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "24px",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      wordBreak: "keep-all",
                      width: "240px",
                    }}
                  >
                    Bem-vindo, {userInfo.nome}!
                  </span>
                  <Link to="/perfil">
                    <Avatar
                      photo={`https://localhost:5001/api/resources/images/${userInfo.imagem}`}
                    />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Button onClick={() => history.push("/login")} ghost>
                  Entrar
                </Button>
                {/* <Button>Quero anunciar</Button> */}
              </>
            )}
          </div>
        </div>
      </div>
    </HeaderWrapper>
  );
}
