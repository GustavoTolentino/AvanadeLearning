import React, { useState } from 'react';
import './styles/style.css';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { FiMail } from 'react-icons/fi';
import { useHistory } from 'react-router';
import { api } from '../../services/api';

export function Cadastro() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const createAccount = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('userToken');

    console.log(email, name, password, confirmPassword);

    if (password == confirmPassword)
    {
        const { data, status } = await api.post(
          'Usuario',
          {
            idUsuario: userInfo.jti,
            Email: email,
            Nome: name,
            Senha: password,
          },
          {
            headers: {
              Authorization: 'Bearer ' + token,
            },
          }
        );

        history.push('/login');
      };
    }

  return (
    <div>
        <div className="contentArea">
            <div>
                <section>
                    <form>
                        <h1>Crie sua conta</h1>
                        <div>
                            <Input type="email" placeholder="Seu E-mail" value={email} onChange={(e) => setEmail(e.target.value)} icon={<FiMail/>}/>
                            <Input type="text" placeholder="Seu Nome" value={name} onChange={(e) => setName(e.target.value)} icon={<FiMail/> }/>
                            <Input type="password" placeholder="Sua Senha" value={password} onChange={(e) => setPassword(e.target.value)} icon={<FiMail/>}/>
                            <Input type="password" placeholder="Confirme sua senha" value={confirmPassword} onChange={(e.target.value)} icon={<FiMail/>}/>
                            <p>Ao se registrar, você aceita nossos <a>termos de uso</a> e a nossa <a>política de privacidade</a>.</p>

                            <Button>Cadastrar</Button>
                        </div>
                    </form>
                </section>
                <section>
                  <h1>Avanade Learning</h1>
                  <h2>Mais de 50 mil Avanade students já estão conectados.</h2>
                  <h3>Junte-se a milhares de guerreiros e guerreiras e venha fazer parte da melhor plataforma de cursos livres</h3>
                  <a>Voltar para Login</a>
                </section>
            </div>
        </div>
    </div>
  );
}