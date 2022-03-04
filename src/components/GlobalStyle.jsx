import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        /* overflow-x: hidden; */

        &::-webkit-scrollbar {
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb {
            background-color: darkgrey;
            border-radius: 5px;
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

    img {
        display: block;
    }

    input {
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }

    @media (max-width: 700px) {
        h2 {
            font-size: 2rem;
        }

        h3 {
            font-size: 1.1rem;
        }

        p {
            font-size: 1rem;
        }
    }
    
`

export default GlobalStyle;