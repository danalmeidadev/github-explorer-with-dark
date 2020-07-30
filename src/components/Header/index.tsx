import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import Switch from 'react-switch';
import { HeaderTop } from './styles';
import logoImg from '../../assets/logo.svg';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { title } = useContext(ThemeContext);
  return (
    <HeaderTop>
      <img src={logoImg} alt="Github explorer" />
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        height={12}
        width={45}
        handleDiameter={20}
        // offColor={shade(0.15, colors.primary)}
        // onColor={colors.secundary}
      />
    </HeaderTop>
  );
};

export default Header;
