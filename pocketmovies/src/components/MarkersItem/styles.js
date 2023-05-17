import styled from 'styled-components'

export const Container = styled.div`

    display: flex;
    align-items: center;
    

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.BACKGROUND_700}` : "none"};

    border-radius: 10px;
    padding-right: 16px;

    > input {
        box-sizing: border-box;
        background: transparent; 
        
        max-width: 150px;
        
        font-size: 16px;
        border: none;
        border-radius: 10px;
        
        color: ${({ theme }) => theme.COLORS.WHITE};

        padding: 16px;
    }

    > button {

        background: transparent;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

        border: none;
        transition: 0.2s;
        &:hover{
            transform: scale(1.2);
        }
    
        > svg {
            width: 22px;
            height: 24px;
        }
    
    }

`