import React, { useState } from 'react';
import './styles/style.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { useHistory } from 'react-router';

export function CreateAd() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const createAccount = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('userToken');

    console.log(title, price, imgLink, description);

    const { data, status } = await api.post(
      'Anuncio',
      {
        idUsuario: userInfo.jti,
        nome: title,
      },
      {
        headers: {
          Authorization: 'Bearer ' + token,
        },
      }
    );

    history.push('/login');
  };

  return (
    <div>
        <div className="contentArea">
            <div>
                <section>
                    <form>
                        <h1>Crie sua conta</h1>
                        <div>
                        <Input type="email" placeholder="Senha" value={password} onChange={(e) => setPassword(e.target.value)} icon={<MdOutlineLock/>} />

                            <Input type="email" placeholder="Seu E-mail" value={email} onChange={(e) => setEmail(e.target.value)} icon={}/>
                            <Input type="text" placeholder="Seu Nome"/>
                            <Input type="password" placeholder="Sua Senha" value={password} onChange={(e) => setPassword(e.target.value)} icon={}/>
                            <Input type="password" placeholder="Confirme sua senha" value={confirmPassword} onChange={(e.target.value)} icon={}/>
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