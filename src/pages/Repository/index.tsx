import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import { Header, RepositoryInfo, Issues } from './styles';

import logoImg from '../../assets/logo.svg';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  useEffect(() => {
    api.get(`repos/${params.repository}`).then(response => {
      console.log(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/27367456?v=4"
            alt="Maico Kley"
          />
          <div>
            <strong>maicokley/GoStack</strong>
            <p>Blablablablbaba</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>10</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>3</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>0</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link to="sabonete">
          <div>
            <strong>Lalaalalla</strong>
            <p>Wolololol</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
