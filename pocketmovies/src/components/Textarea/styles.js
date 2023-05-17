import styled from "styled-components";

export const TextBox = styled.textarea`

    width: 100%;
    height: 274px;
    resize: none;

    display: flex;
    align-items: center;
    font-size: 16px;

    padding: 17px;
    border: none;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 40px 0;

    overflow-y: auto;

    &:hover{
        filter: brightness(1.1);
    }

    &::placeholder{
        color: ${({ theme }) => theme.COLORS.BACKGROUND_700}; 
    }
    
`