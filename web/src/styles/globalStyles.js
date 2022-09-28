import { createGlobalStyle } from 'styled-components';
 
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;      
    list-style: none;
    box-sizing:border-box;
    text-decoration: none;  
    outline: none;
  }

  button{
    cursor: pointer;
  }

  html{
    font-size: 100%;
  }
`;
 
