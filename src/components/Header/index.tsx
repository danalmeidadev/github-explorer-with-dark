import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { HeaderTop } from './styles';
import logoImg from '../../assets/logo.svg';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme, children }) => {
  const { title } = useContext(ThemeContext);
  return (
    <>
      <HeaderTop>
        <img src={logoImg} alt="Github explorer" />
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          height={12}
          width={45}
          handleDiameter={20}
        />
        <Link to="link">{children}</Link>
      </HeaderTop>
    </>
  );
};

export default Header;
