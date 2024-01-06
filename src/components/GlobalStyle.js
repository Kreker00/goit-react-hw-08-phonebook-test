import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    background: url('https://oir.mobi/uploads/posts/2021-03/1616546229_23-p-chernii-fon-na-rabochii-stol-24.jpg') no-repeat center center fixed; 
    background-size: cover;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    object-fit: cover;
  }
`;
