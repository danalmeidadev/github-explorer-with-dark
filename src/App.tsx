import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import ThemeContext from './context/themeContext';
import light from './styles/themes/light';
import Routes from './routes';
import GlobalStyle from './styles/global';
import dark from './styles/themes/dark';
import Header from './components/Header';

const App: React.FC = () => {
  const [theme, setTheme] = useState(light);

  const handleSwitchTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <BrowserRouter>
      <ThemeContext.Provider
        value={{
          switchTheme: handleSwitchTheme,
        }}
      >
        <ThemeProvider theme={theme}>
          <Routes />
          <GlobalStyle />
        </ThemeProvider>
      </ThemeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
