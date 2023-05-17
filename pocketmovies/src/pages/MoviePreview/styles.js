import styled from "styled-components";

import { Link } from 'react-router-dom'

export const Container = styled.div`

`

export const Content = styled.div`
 
    padding: 40px 130px;
    height: 540px;
    width: 100vw;

    overflow-y: auto;

    ::-webkit-scrollbar {
    width: 5px;
    position: absolute;
    }

    /* Track */
    ::-webkit-scrollbar-track {
    background: transparent; 
    }
    
    /* Handle */
    ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    border-radius: 20px;
    }

    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
    background: #555; 
    }

    > .label {
        margin-top: 26px;
        display: flex;
        gap: 8px;
        align-items: center;
        
        > img {
            border-radius: 50%;
            width: 25px;
            height: 25px;
            border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
        }

        > svg {
            color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
        }
    }

    > .tags {
        margin-top: 26px;
        display: flex;
    }

    > h2 {
        margin-top: 26px;

        font-size: 16px;
        text-align: justify;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
    
`

export const Return = styled(Link)`
    width: fit-content;
   
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    font-size: 16px;

    margin-bottom: 24px;

    display: flex;
    gap: 8px;
    align-items: center;
 
`