import styled from "styled-components";

import { Link } from 'react-router-dom'

export const Container = styled.div`

    > div { 
        
        padding: 40px 106px; 
        display: flex;
        flex-direction: column;

        text-align: left;

        > .Inputs {
            display: flex;
            gap: 40px;
        }

        > h1 {
            margin-bottom: 40px;
        }

        > h2 {
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
            margin-bottom: 20px;
        }

        > footer {
            display: flex;
            gap: 40px;
            
            &:nth-child(1) {
                color: black;
            }
        }

    }



`

export const Markers = styled.div`

    display: flex;
    gap: 24px;

    margin-bottom: 40px;

    width: 100%;
    padding: 16px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BLACK};
    border-radius: 10px;

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