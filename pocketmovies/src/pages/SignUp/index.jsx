import { SignUpBox, Form, Background, Return } from './styles'
import { Link } from "react-router-dom"

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'


import {FiUser, FiLock, FiMail, FiArrowLeft} from 'react-icons/fi' 
import { Header } from '../../components/Header'

export function Signup () {
    return (
        <SignUpBox>

            <Background />

            <Form>

                <h1>PocketMovies</h1>

                <h2>Create account</h2>

                <Input icon={FiUser} type="text" placeholder="Name" /> 
                <Input icon={FiMail} type="text" placeholder="Email" /> 
                <Input icon={FiLock} type="password" placeholder="Password" /> 

                <Button title="Create account" />

                <Return to="/">
                    Return
                </Return>              
  

            </Form> 


        </SignUpBox>
    )
}