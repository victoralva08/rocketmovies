import styled from "styled-components";

export const MovieBox = styled.li`

    width: 100%;

    border: 1px solid black;
    border-radius: 10px;


    > h1 {
        font-size: 24px;
        line-height: 32px;
    }

    > p {
        margin-top: 15px;
        font-family: "Roboto", sans-serif;
        color: ${({ theme }) => theme.COLORS.WHITE};
    }


    > footer {
        display: flex;
        margin-top: 20px;
    }

`
