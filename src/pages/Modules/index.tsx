import React, { useState, useEffect, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import { FaYoutube } from 'react-icons/fa';

import api from '../../services/api';

import NavBar from '../../components/NavBar'

import { Container, Course, Thumbnail, CourseList, AddModule, Error } from './styles';

interface Module {
  id: number;
  title: string;
  description: string;
  user_id: number;
}

interface User {
  id: number;
}

const Modules: React.FC = () => {
  const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputError, setInputError] = useState('');
  const [modules, setModules] = useState<Module[]>(() => {

    const storageModules = localStorage.getItem(
      '@CodeSchool: modules',
    );

    if (storageModules) {
      return JSON.parse(storageModules);

    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@CodeSchool: modules',
      JSON.stringify(modules),
    );
  }, [modules]);

  async function handleAddModule(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();

    if (!inputTitle || !inputDescription) {
      setInputError('Preencha todos os campos.');
      return;
    }

    try {
      const token = localStorage.getItem('@CodeSchool:token');
      const user = localStorage.getItem('@CodeSchool:user')!;

      const userStorage: User = JSON.parse(user);


      const response = await api.post<Module>('/modules', {
        title: inputTitle,
        description: inputDescription,
        user_id: userStorage.id,
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const module = response.data;

      setModules([...modules, module]);
      setInputTitle('');
      setInputDescription('');
      setInputError('');

      alert(`Módulo criado com sucesso: ${module.title}`);

    } catch (err) {
      setInputError('Erro ao criar um novo módulo.');
    }
  }

  return <>
    <NavBar />
    <Container>

      <AddModule hasError={!!inputError} onSubmit={handleAddModule}>
        <h2>Modules</h2>
        <input
          value={inputTitle}
          onChange={e => setInputTitle(e.target.value)}
          placeholder="Título"
        />
        <input
          value={inputDescription}
          onChange={e => setInputDescription(e.target.value)}
          placeholder="Descrição"
        />
        <button type="submit">Criar</button>

        {inputError && <Error>{inputError}</Error>}
      </AddModule>

      <p>Seus módulos</p>
      <CourseList>
        {modules.map(module => (

          <Course key={module.id}>
          <Link
            to={{
              pathname: `/lessons/${module.title}`,
              state: {
                module_id: module.id,
              }
            }}
          >
            <Thumbnail>
              <FaYoutube size='40' color='#04d361'/>
            </Thumbnail>
          </Link>
          <h2>{module.title}</h2>
          </Course>
        ))}

      </CourseList>

    </Container>
  </>

};

export default Modules;
