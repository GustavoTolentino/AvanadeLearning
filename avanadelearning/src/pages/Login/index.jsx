import React, { useState } from 'react';
import './styles/style.css';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '../../components/Button';
import { api } from '../../services/api';
import axios from 'axios';

export function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault();

    const { data, status } = await api.post('/login', {
      email: email,
      senha: password,
    });

    if (status === 200) {
      localStorage.setItem('userToken', data.token);
      history.push('/products');
    }
  };

  return (
    
    <div>
      <link rel="stylesheet" type="text/css" media="screen" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
      <div className="sca">
        <div className="bca">
          <div>
            {/* <img src=""/> */}
            <h2>Avanade Learning</h2>
          </div>
          <div>
          <h1 className="texttes">Faça seu login <br/>na plataforma</h1>
          </div>
        </div>
        <div className="rfa">
          <section className="sfa">
            <form onSubmit={(e) => handleSignIn(e)} className="fia">
              <h3>Entre em sua conta</h3>
              <label><input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              /></label>
              <label><input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              /></label>

              <div className="fid">
                <label></label>
                <input type="password"
                placeholder="Senha"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
              </div>
              
              <a className="fmpl">Esqueci minha senha</a>
              <Button type="submit">Entrar</Button>
              <h4 className="nhal">Não tem conta?<a href="#" className="llo">Registre-se</a></h4>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}