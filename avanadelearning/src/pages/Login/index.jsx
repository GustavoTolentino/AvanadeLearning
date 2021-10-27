import React, { useState } from 'react';
// import './styles.css';
import { Link, useHistory } from 'react-router-dom';
// import LoginImg from '../../img/LoginImg.png';
// import { Button } from '../../components/Button';
import { api } from '../../services/api';
// import axios from 'axios';

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
        <form>
            <h4>Email teste</h4>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>

            <h4>Senha teste</h4>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
        </form>
    </div>
  );
}