import { createGlobalStyle } from 'styled-components';
import background from '../assets/background.svg';

export default createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body{
  background-color: ${(props) => props.theme.colors.background};
  background-image:  url(${background});
  background-repeat: no-repeat;
  background-position: right top;
  color: ${(props) => props.theme.colors.text}
}
body, input, button {
  font-family: "Roboto";
}

button{
  cursor: pointer;
}

a {
  text-decoration: none;
}



`;
