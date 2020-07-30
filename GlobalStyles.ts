import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body,
  main {
  overflow-y: visible !important;
	overflow-x: hidden;
	height: 100%;
	${(props: any) => props.theme.textOptions};
  }

  body {
	margin: 0;
	padding: 0;
	background-color: ${(props: any) => props.theme.backgroundColor};
	font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
		"Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
		sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
  }

  code {
	font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
		monospace;
  } 
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  input,
  button {
    ${(props) => props.theme.textOptions};
    margin-top: 0;
  }
  h1 {
    ${(props) => props.theme.h1}
  }
  h2 {
    ${(props) => props.theme.h2}
  }
  h3 {
    ${(props) => props.theme.h3}
  }
  a {
    text-decoration: none;
  }
  p{
    ${(props) => props.theme.p}
  }

`;

export default GlobalStyle;
