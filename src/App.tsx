import React, { useState, useCallback, useContext } from 'react';
import { ThemeProvider, ThemeContext, ThemeProps } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import light from './styles/themes/light';
import Routes from './routes';
import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';
import Header from './components/Header';

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [theme.title]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Header toggleTheme={toggleTheme} />
        <Routes />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
