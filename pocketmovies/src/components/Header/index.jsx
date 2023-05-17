import { ButtonText } from "../ButtonText";
import { HeaderBox, Profile } from "./styles";

import { Link } from 'react-router-dom'

import { Input } from '../Input'

export function Header ({ title, ...rest }) {
    return (

        <HeaderBox>

            <h1>{title}</h1>

            <Input type="text" placeholder="Search for title" />

            <Profile>

                <div>
                    <span>Victor Alvarenga</span>
                    <Link to="/profile">Profile</Link>
                </div>

                <img src="https://github.com/victoralva08.png" alt="User profile picture" />

            </Profile>

        </HeaderBox>

    )
}