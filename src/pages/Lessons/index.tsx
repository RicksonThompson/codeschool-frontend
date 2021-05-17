import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { FaYoutube, FaEdit, FaTrash } from 'react-icons/fa';

import api from '../../services/api';

import NavBar from '../../components/NavBar'

import { Container, LessonVideo, Thumbnail, LessonList, AddLesson, Error, RowIcons } from './styles';

interface Lesson {
  id: number;
  title: string;
  description: string;
  module_id: number;
  videoId: string;
}

interface LocationState {
  module_id: number,
}

const Lessons: React.FC = () => {
  const { state } = useLocation<LocationState>();

  const [inputTitle, setInputTitle] = useState('');
  const [inputDescription, setInputDescription] = useState('');
  const [inputVideoId, setInputVideoId] = useState('');
  const [inputError, setInputError] = useState('');
  const [lessons, setLessons] = useState<Lesson[]>(() => {

    const storageLessons = localStorage.getItem(
      '@CodeSchool: lessons',
    );

    if (storageLessons) {
      return JSON.parse(storageLessons);

    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem(
      '@CodeSchool: lessons',
      JSON.stringify(lessons),
    );
  }, [lessons]);

  async function handleAddLesson(
    e: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    e.preventDefault();

    if (!inputTitle || !inputDescription) {
      setInputError('Preencha todos os campos.');
      return;
    }

    try {
      const token = localStorage.getItem('@CodeSchool:token');

      const response = await api.post<Lesson>('/lessons', {
        title: inputTitle,
        description: inputDescription,
        videoId: inputVideoId,
        module_id: state.module_id,
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const lesson = response.data;

      setLessons([...lessons, lesson]);
      setInputTitle('');
      setInputDescription('');
      setInputVideoId('');
      setInputError('');

      alert(`Aula criada com sucesso: ${lesson.title}`);

    } catch (err) {
      setInputError('Erro ao criar uma nova aula.');
    }
  }

  async function handleDeleteLesson(
    e: FormEvent<HTMLFormElement>,
    ): Promise<void> {

      e.preventDefault();

    try {
      const token = localStorage.getItem('@CodeSchool:token');

      const response = await api.post<Lesson>('/lessons', {
        title: inputTitle,
        description: inputDescription,
        videoId: inputVideoId,
        module_id: state.module_id,
      },
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const lesson = response.data;

      setLessons([...lessons, lesson]);
      setInputTitle('');
      setInputDescription('');
      setInputVideoId('');
      setInputError('');

      alert(`Aula criada com sucesso: ${lesson.title}`);

    } catch (err) {
      setInputError('Erro ao criar uma nova aula.');
    }
  }

  return <>
    <NavBar />
    <Container>

      <AddLesson hasError={!!inputError} onSubmit={handleAddLesson}>
        <h2>Aulas</h2>
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
         <input
          value={inputVideoId}
          onChange={e => setInputVideoId(e.target.value)}
          placeholder="Link do vídeo do YouTube"
        />
        <button type="submit">Criar</button>

        {inputError && <Error>{inputError}</Error>}
      </AddLesson>

      <p>Suas aulas</p>
      <LessonList>
        {lessons.map(lesson => (

          <LessonVideo key={lesson.id}>
          <Link
            to={{
              pathname: `/player/${lesson.title}`,
              state: {
                videoId: lesson.videoId,
                title: lesson.title,
                description: lesson.description,
              }
            }}
          >
            <Thumbnail>
              <FaYoutube size='40' color='#04d361'/>
            </Thumbnail>
          </Link>
          <RowIcons>
            <button
            type='submit'
            id={lesson.id}
            >
             <FaEdit size='15' color='#ffff'/>
            </button>
            <button type='submit'>
             <FaTrash size='15' color='#ffff'/>
            </button>
          </RowIcons>
          <h2>{lesson.title}</h2>
          </LessonVideo>
        ))}

      </LessonList>

    </Container>
  </>

};

export default Lessons;
