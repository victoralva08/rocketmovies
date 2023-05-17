import styled from "styled-components";

export const TagBox = styled.div`

width: fit-content;

background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

font-size: 12px;
line-height: 14px;

padding: 5px 16px;
margin-right: 8px;
border-radius: 10px;

color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

&:hover{
    transform: scale(1.1);
    cursor: pointer;
}

`