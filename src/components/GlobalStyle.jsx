import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: bord    er-box;
    }

    html {
        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
        }
    }

    body {
        font-family: 'Montserrant', sans-serif;
        width: 100%;
    }

    h2 {
        font-size: 2.5rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
    }

    h3 {
        font-size: 1.3rem;
        color: #333;
        padding: 1.5rem 0 1rem 0;
    }

    p {
        font-size: 1.1rem;
        line-height: 2;
        color: #696969;
    }

    a {
        text-decoration: none;
        color: #333;
    }
`

export default GlobalStyle;