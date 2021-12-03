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
          <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
            {userLoggedIn ? (
              <>
                {/* <Link to="/">Inicio</Link> */}
                <Link to="/">Home</Link>
                <Link to="/curso">Cursos</Link>
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
                  <span>Bem-vindo, {userInfo.family_name}!</span>
                  <Link to="/profile">
                    <Avatar photo={userInfo.imagem} />
                  </Link>
                </div>
              </>
            ) : (
              <>
                <Link to="/">Home</Link>
                <Link to="/curso">Cursos</Link>

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
