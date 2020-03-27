import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsApp] = useState('');
  const [city, setCity] = useState('');
  const [uf, setUf] = useState('');

  const history = useHistory();

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      name,
      email,
      whatsapp,
      city,
      uf
    }
    try {
      const res = await api.post('ongs', data);
      alert(`Seu ID de acesso ${res.data.id}`);
      history.push('/');
    } catch (e) {
      alert('Erro no Cadastro, Tente Novamente');
    }

  }

  return (
    <div className="register-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastro</h1>
          <p>Faça seu Cadastro, entre na plataforma e ajuda pessoas a encontrarem os casos da sua ONG</p>
          <Link to="/" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
            Já tenho Cadastro.
          </Link>
        </section>
        <form onSubmit={handleRegister}>
          <input type="text" placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)} />
          <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
          <input type="text" placeholder="WhatsApp" value={whatsapp} onChange={e => setWhatsApp(e.target.value)} />
          <div className="input-group">
            <input type="text" placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} />
            <input type="text" placeholder="UF" value={uf} onChange={e => setUf(e.target.value)} style={{ width: 80 }} />
          </div>
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}