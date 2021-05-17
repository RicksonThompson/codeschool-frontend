import styled from 'styled-components';

interface ContainerProps {
  tab: number;
  isOpen: boolean;
}

export const Background = styled.div`
  position: relative;
  background-color: #ec335a;
  color: #fff;
  height: 60px;
  align-items: center;

  a {
    padding-top: 10px;
    color: #fff;
    font: 20px Roboto, sans-serif;
    text-decoration: none;
    list-style-type: none;
  }

  img {
    width: 240px;
    height: 41px;
  }
`;

export const MenuBar = styled.span`
  width: 30px;
  height: 3px;
  border-radius: 1px;
  background-color: #fff;
  display: block;
  transition: all 150ms;
`;

export const MenuIcon = styled.a<ContainerProps>`
  cursor: pointer;
  display: none;

  @media (max-width: 700px) {
    display: block;
  }
`;

export const Container = styled.div<ContainerProps>`
  margin: 0 auto;
  width: 80vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  li:nth-child(${(props): number => props.tab}) a {
  }

  p {
    font-family: Roboto, sans-serif;
    font-size: 30px;
  }

  li {
    margin-left: 25px;
    transition: color 150ms ease;
    list-style: none;
  }

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
  }

  @media (max-width: 700px) {
    width: 90vw;

    ul {
      z-index: 10;
      position: fixed;
      top: 42px;
      left: ${(props): string => (props.isOpen ? '50%' : '100%')};
      display: ${(props): string => (props.isOpen ? 'block' : 'none')};
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      background-color: #272727;
      width: 80vw;
      height: 100vh;
      transition: left 0.4s ease;
      list-style: none;
    }

    svg {
      order: 1;
      margin-left: 20px;
      margin-top: 10px;
      display: inline-block;
    }

    li {
      display: block;
      width: 100%;
      border-bottom: 1px solid #737373;
      padding: 10px 0 10px 25px;
      margin-left: 0;
    }
  }
`;
