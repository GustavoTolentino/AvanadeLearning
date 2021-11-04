import React, { useState } from 'react';
import './styles/style.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Button } from '../../components/Button';
import { useHistory } from 'react-router';

export function CreateAd() {
  const history = useHistory();
  const [title, setTitle] = useState('');

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

    // history.push('/login');
  };

  return (
    <div>
        <div className="">
            <div>
                <section>
                    <form>
                        <h2>Crie sua conta</h2>
                        <div>
                            
                        </div>
                    </form>
                </section>
            </div>
        </div>
    </div>
  );
}