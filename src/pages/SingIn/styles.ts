import styled, {css} from 'styled-components';

import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  display: flex;
  align-items: row;
  justify-content: center;
  margin-top: 20vh;
  margin-bottom: 20vh;
  margin-left: auto;
  margin-right: auto;
`;

export const ContainerInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-right: 100px;

  img {
    width: 240px;
    height: 41px;
  }

  h1 {
      margin-bottom: 24px;
    }
`;

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
  background: #f1f2ff;
  border-radius: 10px;
  padding: 64px;
`;

export const Title = styled.h1`
  font-size: 48px;
  color: #ffff;
  max-width: 450px;
  line-height: 56px;
  margin-top: 50px;
  font-weight: bold;
`;

export const LinkRegister = styled.div`
  display: flex;
  flex-direction: row;
  color: #3a3a3a;
  margin-top: 8px;
  align-self: center;

  a{
    color: #d02449;
    display: block;
    text-decoration: none;
    margin-left: 2px;

    &:hover {
    color: ${shade(0.2, '#d02449')};
  }
  }
`;

export const LinkForgot = styled.div`
  color: #d02449;
  display: block;
  margin: 8px 0px 24px;
  text-decoration: none;
  transition: color 0.2s;
  align-self: flex-start;

  &:hover {
    color: ${shade(0.2, '#d02449')};
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 1100px;
  display: flex;
  flex-direction: column;

  input {
  background: #d9d9d9;
  border-radius: 10px;
  padding: 16px;
  width: 300px;

  border: 2px solid #d9d9d9;
  color: #3a3a3a;

  display: flex;
  align-items: center;

  & + input {
    margin-top: 5px;
  }

    ${props =>
      props.hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }
  button {
    width: 100%;
    height: 60px;
    margin-top: 5px;
    background: #04d361;
    color: #fff;
    font-weight: bold;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    transition: background-color 0.2s;
    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;
