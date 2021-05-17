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
  border-radius: 5px;
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

export const CourseList = styled.div`
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

export const Course = styled.div`
  span {
    font-size: 18px;
  }
`;

export const ContainerAddModules = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 350px;
  height: 290px;
  max-width: 480px;
  background: #f1f2ff;
  border-radius: 10px;
  padding: 50px;
  margin-bottom: 20px;

  h2 {
    color: #3a3a3a;
    font-weight: bold;
  }
`;

export const Form = styled.form<FormProps>`
  margin-top: 10px;
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

// export const AddModule = styled.form<FormProps>`
//   margin-top: 50px;
//   color: #fff;
//   background-color: #3a3a3a;
//   height: 250px;
//   width: 250px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;

//   input {
//     border-radius: 5px;
//     height: 30px;
//   }

//   button {
//     border-radius: 30px;
//     height: 25px;
//   }
// `;

export const AddModule = styled.form<FormProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 330px;
  height: 290px;
  max-width: 480px;
  background: #f1f2ff;
  border-radius: 10px;
  padding: 40px;
  margin-bottom: 20px;
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
