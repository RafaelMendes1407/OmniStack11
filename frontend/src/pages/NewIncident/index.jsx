import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import './styles.css';
import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function NewIncident() {

  const[title, setTitle] = useState('');
  const[description, setDescription] = useState('');
  const[value, setValue] = useState('');

  const ongId = localStorage.getItem('ongId');
  const history = useHistory();

  async function handleNewincident(e) {
    e.preventDefault();
    const data = {
      title, description, value,
    };
    try {
      await api.post('incidents', data, {
        headers: {
          Authorization: ongId
        }
      });
      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso, Tente novamente. ')
    }
  }

  return (
    <div className="newincident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be The Hero" />
          <h1>Cadastrar novo Caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um herói e resolver isso.</p>
          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#E02041" />
                Voltar para o Home
              </Link>
        </section>
        <form onSubmit={handleNewincident}>
          <input type="text"
            value={title}
            onChange={e=>setTitle(e.target.value)}
            placeholder="Titulo do Caso" 
          />
          <textarea
            value={description}
            onChange={e=>setDescription(e.target.value)}
            placeholder="Descrição" 
          />
          <input type="text"
            value={value}
            onChange={e=>setValue(e.target.value)}
            placeholder="valor em Reais" 
          />
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}