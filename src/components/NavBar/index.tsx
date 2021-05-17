import React, { useState, useCallback } from 'react';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/codeschool-logo.png';

import { Background, Container, MenuIcon, MenuBar } from './styles';

const NavBar: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [tab, setTab] = useState<number>(0);

  const history = useHistory();

  const handleOpen = useCallback(
    (close = false): void => {
      if (close) {
        setOpen(false);
        setTab(0);
      } else {
        setOpen(!open);
      }
    },
    [open],
  );

  const handleNewTab = useCallback((n: number): void => {
    setOpen(false);
    setTab(n);
  }, []);

 function handleLogout() {
    localStorage.removeItem('@CodeSchool:token');
    localStorage.removeItem('@CodeSchool:user');

    return history.push('/')
    };

  return (
    <Background>
      <Container tab={tab} isOpen={open}>
        <Link to="/" onClick={(): void => handleOpen(true)}>
          <img src={logoImg} alt="CodeSchool" />
        </Link>
        <MenuIcon onClick={(): void => handleOpen()} isOpen={open} tab={tab}>
          <MenuBar />
          <MenuBar />
          <MenuBar />
        </MenuIcon>
        <ul>
          <li>
            <Link to="/modules" onClick={(): void => handleNewTab(2)}>
              Módulos
            </Link>
          </li>
          <li>
            <Link to="/lessons" onClick={(): void => handleNewTab(3)}>
              Aulas
            </Link>
          </li>
          <li>
          <a href="/signin" onClick={handleLogout}>Sair</a>
          </li>
        </ul>
      </Container>
    </Background>
  );
};

export default NavBar;
