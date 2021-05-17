import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import logoImg from '../../assets/codeschool-logo.png';

import { Container, ContainerLogin, ContainerInfo, Title, LinkRegister, Form, Error } from './styles';

const SignIn: React.FC = () => {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputError, setInputError] = useState('');

  const { signIn } = useAuth();

  const history = useHistory();

  async function handleSubmit(
    e: FormEvent<HTMLFormElement>
  ): Promise<void> {

    e.preventDefault();

    if (!inputEmail) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

      try {
        await signIn({
          email: inputEmail,
          password: inputPassword,
        });

        setInputEmail('');
        setInputPassword('');
        setInputError('');

        history.push('/modules');

      } catch (err) {
        if (err) {
          setInputError('Dados inválidos. Cheque as suas credenciais!');
        }
      }

  };

    return (
      <Container>
        <ContainerInfo>
          <img src={logoImg} alt="CodeSchool" />
          <Title>Faça seu login<br /> na plataforma</Title>
        </ContainerInfo>

      <ContainerLogin>
        <Form hasError={!!inputError} onSubmit={handleSubmit}>
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
        <button type="submit">Acessar</button>

        <LinkRegister>
          Não tem conta?
         <a href="signup">Registre-se</a>
        </LinkRegister>
      </Form>

      {inputError && <Error>{inputError}</Error>}

      </ContainerLogin>

    </Container>
    );
  };

  export default SignIn;
