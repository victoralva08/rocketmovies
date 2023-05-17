import styled from "styled-components";

import { Link } from 'react-router-dom'

export const HomeBox = styled.div`

    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;


    > main {
        padding: 45px 142px;

        display: flex;
        gap: 746px;
        justify-content: space-between;

        > h2 {
            width: 120%;
            font-size: 32px;
        }
    }


`

export const NewMovie = styled(Link)`

    width: 100%;
    height: 56px;

    display: flex;
    gap: 10px;
    align-items: center;
    text-align: center;
    justify-content: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-size: 18px;

    &:disabled{
        filter: drop-shadow
    }

    &:hover{
        box-shadow: inset 0 0 4px gray;
        cursor: pointer;
    }

    border: none;
    border-radius: 10px;

    > svg {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    }

`

export const List = styled.div`

    width: 100%;
    padding: 0 128px;
    overflow-y: auto;
    list-style: none;

    ::-webkit-scrollbar {
    width: 5px;
    
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

    > li {

        width: 100%;
        padding: 32px;
        margin-bottom: 24px;
        
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    }

`