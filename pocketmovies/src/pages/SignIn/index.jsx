import { SignInBox, Form, Background, NewAccount } from './styles'
import { Link } from "react-router-dom"

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'


import {FiMail, FiLock} from 'react-icons/fi' 

export function Signin () {
    return (
        <SignInBox>
            <Form>

                <h1>PocketMovies</h1>
                <p>This application saves and manages your to-watch list.</p>

                <h2>Log in</h2>

                <Input icon={FiMail} type="text" placeholder="Email" /> 
                <Input icon={FiLock} type="password" placeholder="Password" /> 

                <Button title="Log in" />

                <NewAccount to="/register">
                    Do not have an account?
                </NewAccount>

            </Form> 

            <Background />

        </SignInBox>
    )
}