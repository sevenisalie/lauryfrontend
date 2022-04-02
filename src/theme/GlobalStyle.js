import { createGlobalStyle } from "styled-components";



export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');

    html, body {
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
        margin: 0 0 0 0;
        padding: 0 0 0 0;
        font-family: 'Ubuntu', sans-serif;
        color: #242424;
        width: 100vw;
        height: 100vh;
        max-width: 100vw;
        background: rgb(250,250,250);
        background: linear-gradient(232deg, rgba(250,250,250,1) 24%, rgba(235,235,235,1) 91%);    }
    a {
        color: #242424;
    }
    :root {
        --shadow-elevation-medium:
        0.5px 0.7px 1.2px hsl(var(--shadow-color) / 0.12),
        2.2px 3.3px 5.5px -0.3px hsl(var(--shadow-color) / 0.24),
        4.7px 7px 11.6px -0.5px hsl(var(--shadow-color) / 0.37),
        10px 15.1px 25px -0.8px hsl(var(--shadow-color) / 0.49);
    }
`

export default GlobalStyle;