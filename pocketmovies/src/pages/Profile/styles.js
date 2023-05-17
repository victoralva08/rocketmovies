import styled from "styled-components";

import { Link } from 'react-router-dom'

export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;

    > header {
        width: 100%;
        height: 144px;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};  
    }
    

    > div {
        width: 340px;
        margin-top: 64px;
    }



`

export const Avatar = styled.div`

    position: relative;
  

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > img {

        width: 186px;
        height: 186px;
        border-radius: 50%;

        margin-top: -160px; 
               
    }

    > label {

        border-radius: 50%;
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};

        display: flex;
        align-items: center;
        justify-content: center;

        position: absolute;
        bottom: 8px;
        right: 80px;

        width: 48px;
        height: 48px;

        cursor: pointer;


        > input {
            display: none;
    
        }

        > svg {

            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        }
    }



`

export const Form = styled.form`
    margin-top: 60px;
    div:nth-child(even) {
        margin-bottom: 24px;
    }

    width: 350px;

`

export const Home = styled(Link)`
    width: fit-content;
   
   color: ${({ theme }) => theme.COLORS.BACKGROUND_PINK};
   font-size: 16px;

   margin-bottom: 24px;

   display: flex;
   gap: 8px;
   align-items: center;

   position: absolute;
   left: 250px;
   top: 50px;
`