import React, { useContext, useEffect, useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import ThemeContext from '../../context/themeContext';
import { Container, RepositoryInfo, Issues } from './styles';
import Header from '../../components/Header';
import api from '../../services/api';

interface RepositoryProps {
  repository: string;
}

interface Repository {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: string;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}
const Repository: React.FC = () => {
  const { switchTheme } = useContext(ThemeContext);
  const { params } = useRouteMatch<RepositoryProps>();

  const [repositorie, setRepositorie] = useState<Repository | null>(null);
  const [issue, setIssue] = useState<Issue[]>([]);

  useEffect(() => {
    api.get(`repos/${params.repository}`).then((response) => {
      setRepositorie(response.data);
    });

    api.get(`repos/${params.repository}/issues`).then((response) => {
      setIssue(response.data);
    });
  }, [params.repository]);

  return (
    <>
      <Container>
        <div className="header">
          <Header toggleTheme={switchTheme}>
            <Link to="/">
              <FiChevronLeft /> Voltar
            </Link>
          </Header>
        </div>

        <RepositoryInfo>
          <header>
            <img
              src={repositorie?.owner.avatar_url}
              alt={repositorie?.owner.login}
            />
            <div>
              <strong>{repositorie?.full_name}</strong>
              <p>{repositorie?.description}</p>
            </div>
          </header>
          <ul>
            <li>
              <strong>{repositorie?.stargazers_count}</strong>
              <span>stars</span>
            </li>
            <li>
              <strong>{repositorie?.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repositorie?.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </RepositoryInfo>
        <Issues>
          {issue.map((item) => (
            <Link key={item.id} to={item.html_url}>
              <div>
                <strong>{item.title}</strong>
                <p>{item.user.login}</p>
              </div>
              <FiChevronRight fontSize={20} />
            </Link>
          ))}
        </Issues>
      </Container>
    </>
  );
};

export default Repository;
