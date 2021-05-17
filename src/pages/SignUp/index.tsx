import React, { useState, FormEvent } from 'react';
import { useHistory, Link } from 'react-router-dom';

import api from '../../services/api';

import logoImg from '../../assets/codeschool-logo.png';

import { Container, ContainerLogin, ContainerInfo, Title, Form, Error } from './styles';

const SignUp: React.FC = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputError, setInputError] = useState('');

  const history = useHistory();

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ): Promise<void> {

    e.preventDefault();

    if (!inputName) {
      setInputError('Preencha todos os campos.');
      return;
    } else if (!inputEmail) {
        setInputError('Preencha todos os campos.');
        return;
    }
    else if (!inputPassword) {
      setInputError('Preencha todos os campos.');
      return;
    }

    try {

      await api.post('users', {
        name: inputName,
        email: inputEmail,
        password: inputPassword,
      });

      setInputName('');
      setInputEmail('');
      setInputPassword('');
      setInputError('');

      alert('Cadastro realizado com sucesso!');

      history.push('/signin');

    } catch (err) {
      if (err) {
        setInputError('Houve um erro no cadastro!');
      }
    }

  };

  return (
    <Container>
      <ContainerInfo>
        <img src={logoImg} alt="CodeSchool" />
        <Title>Desenvolva suas<br /> habilidades como dev</Title>
      </ContainerInfo>

      <ContainerLogin>
        <Form hasError={!!inputError} onSubmit={handleSubmit}>
          <input
            name="name"
            type="Name"
            value={inputName}
            onChange={e => setInputName(e.target.value)}
            placeholder="Name"
          />

          <input
            name="email"
            type="E-mail"
            value={inputEmail}
            onChange={e => setInputEmail(e.target.value)}
            placeholder="E-mail"
          />

          <input
            name="password"
            type="password"
            value={inputPassword}
            onChange={e => setInputPassword(e.target.value)}
            placeholder="Senha"
          />
          <button type="submit">Cadastrar</button>

          <Link to="signin">Voltar para login</Link>
        </Form>

        {inputError && <Error>{inputError}</Error>}

      </ContainerLogin>

    </Container>
  );
};

export default SignUp;
