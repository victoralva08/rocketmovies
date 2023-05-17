import styled from 'styled-components'

export const InputBox = styled.div`

    width: 100%;
    height: 56px;

    display: flex;
    align-items: center;

    border: none;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    
    margin-bottom: 8px;

    &:hover{
            filter: brightness(1.1);
        }
    
    > input {

        background: transparent;
        border: none;
        padding: 17px;
        width: 100%;
        
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.WHITE};
    
        &::placeholder{
            color: ${({ theme }) => theme.COLORS.BACKGROUND_700}; 
        }

       

    }

    > svg {
        color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        height: 56px;
        margin: 2px 0 0 15px;
    }
`