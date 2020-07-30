import React, { useState, FormEvent, useContext, useCallback } from 'react';
import { FiChevronRight, FiPlus } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { shade } from 'polished';
import Header from '../../components/Header';
import { Container, Content, Title, Form, Repositories, Error } from './styles';
import api from '../../services/api';
import light from '../../styles/themes/light';
import dark from '../../styles/themes/dark';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Home: React.FC = () => {
  const [newRepository, setNewRepository] = useState('');
  const [inputError, setInputerror] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [theme, setTheme] = useState(light);
  const { title, colors } = useContext(ThemeContext);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (!newRepository) {
      setInputerror('Digite o autor/nome do repositorio');
      return;
    }
    try {
      const response = await api.get<Repository>(`repos/${newRepository}`);
      const newRepo = response.data;
      setRepositories([...repositories, newRepo]);
      setNewRepository('');
      setInputerror('');
    } catch (err) {
      setInputerror(
        'O repositorio informado não foi encontrado, tente novamente',
      );
    }
  }

  return (
    <>
      <Container>
        <Content>
          <Title>Repositorios GitHub</Title>
          <Form hasError={!!inputError} onSubmit={handleAddRepository}>
            <input
              value={newRepository}
              onChange={(event) => setNewRepository(event.target.value)}
              type="text"
              placeholder="Diite o nome do repositorio"
            />
            <button type="submit">
              <FiPlus />
            </button>
          </Form>
          {inputError && <Error>{inputError}</Error>}
          <Repositories>
            {repositories.map((repository) => (
              <a key={repository.full_name} href="/re">
                <img
                  src={repository.owner.avatar_url}
                  alt={repository.owner.login}
                />
                <div>
                  <strong>{repository.owner.login}</strong>
                  <p>{repository.description}</p>
                </div>
                <FiChevronRight fontSize={20} />
              </a>
            ))}
          </Repositories>
        </Content>
      </Container>
    </>
  );
};

export default Home;
