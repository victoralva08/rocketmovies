import styled from "styled-components";

import { Link } from 'react-router-dom'

import bgImage from '../../assets/bgImage.png'

export const SignUpBox = styled.div`

    height: 100vh;
    display: flex;

`

export const Form = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 0 156px;

    > h1 {
        font-size: 54px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    }

    > p {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        margin-bottom: 48px;
    }

    > h2 {
        margin: 48px 0 48px 0; 
        text-align: center;
    }


    > div:nth-child(5) {
        margin-bottom: 40px;
    }

`

export const Background = styled.div`

    flex: 1;
    background: url(${bgImage}) no-repeat center center;
    filter: brightness(0.6);
`

export const Return = styled(Link)`
        color: ${({ theme }) => theme.COLORS.WHITE};
        text-align: center;

        width: fit-content;
        margin: 48px auto;
`