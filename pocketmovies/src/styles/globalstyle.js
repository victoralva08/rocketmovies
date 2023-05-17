import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    // setting the style for the pages overall

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;

        font-family: "Roboto Slab", serif;
        outline: none;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.WHITE}
    }

    button {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        &:hover {
            filter: brightness(0.6);
        }
    }

    button:hover{
        filter: brightness(0.9)
    }











`