import styled, {css} from 'styled-components';

import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Container = styled.div`
  width: 80vw;
  margin: 0 auto;
  animation: loadAnimation;
  animation-duration: 500ms;

  > p {
    margin-top: 40px;
    margin-bottom: 25px;
  }

  p {
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    font-size: 32px;
    font-weight: bold;
  }

  h2{
    padding-bottom: 10px;
    color: #f1f2ff;
  }

  @media (max-width: 900px) {
    p {
      text-align: center;
    }
  }

  @media (max-width: 700px) {
    width: 90vw;
  }
`;

export const Thumbnail = styled.div`
  height: 180px;
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;
  background-color: #fff;

  img {
    width: 320px;
    height: 180px;
    border-radius: 5px;
    font-family: 'Anton', Helvetica, sans-serif;
    font-size: 32px;
    text-transform: uppercase;
  }

  > p {
    color: #fff;
  }
`;

export const LessonList = styled.div`
  display: grid;
  gap: 30px 0;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 1720px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1350px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

export const LessonVideo = styled.div`
  span {
    font-size: 18px;
  }
`;

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
`;

export const AddLesson = styled.form<FormProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 330px;
  height: 250px;
  max-width: 480px;
  background: #f1f2ff;
  border-radius: 5px;
  padding: 20px;
  margin-top: 20px;

  h2 {
    color: #3a3a3a;
    font-weight: bold;
  }
  input {
  background: #d9d9d9;
  border-radius: 10px;
  padding: 16px;
  width: 300px;
  height: 30px;

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
    width: 300px;
    height: 40px;
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

export const RowIcons = styled.div`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 7px;
  width: 320px;


  button {
    margin-right: 9px;
    background-color: Transparent;
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    overflow: hidden;
    outline:none;
  }
`;
