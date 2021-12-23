import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  html, body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Ubuntu, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  font-size: 16px;
  height: 100%;
  overflow-x: hidden;
  background: #000;
}

$i: 0;

@for $i from 1 through 5 {
  #accordion-button-#{$i} {
    box-shadow: none;
  }
}

body::-webkit-scrollbar {
  width: 8px;
}

body::-webkit-scrollbar-track {
  background: black;
}

body::-webkit-scrollbar-thumb {
  background: #454545;
  border-radius: 3px;
}

body::-webkit-scrollbar-thumb:hover {
  background: grey;
}

#link{
  color: #6b46c1;
  font-weight: bold;
  transition:all 0.15s ease-out 0s;
   :hover > &{
      color: #8257e5;
    }
  }
`;
