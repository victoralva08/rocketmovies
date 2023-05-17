import styled from "styled-components";

export const HeaderBox = styled.header`

    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 132px;

    border-bottom: 2px solid ${({ theme }) => theme.COLORS.BACKGROUND_800};

    box-shadow: 0px 0px 14px 0px black;

    > h1 {
        width: 360px;
        margin-right: 64px;
        color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK}
    }

`

export const Profile = styled.div`

    display: flex;
    align-items: center;
    margin-left: 64px;
   
    > div {
        width: 129px;

        display: flex;
        flex-direction: column;

        > a {
            text-align: end;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_700}
        }
    
    }

    > img {

        height: 70px;
        border-radius: 50%;
        margin-left: 20px;
    }
`