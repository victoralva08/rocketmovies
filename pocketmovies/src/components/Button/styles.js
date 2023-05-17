import styled from "styled-components";

export const ButtonBox = styled.button`

    width: 100%;
    height: 56px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 20px;

    &:disabled{
        filter: brightness(0.6);

    }

    &:hover{
        box-shadow: inset 0 0 8px black;
    }

    border: none;
    border-radius: 10px;

`