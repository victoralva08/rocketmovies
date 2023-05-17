import { Container, Avatar, Form, Home } from './styles'

import { Link } from 'react-router-dom'

import { ButtonText } from '../../components/ButtonText'
import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { FiUser, FiMail, FiLock, FiCamera, FiArrowLeft } from 'react-icons/fi'

export function Profile () {
    return (
        <Container>

            <header>
                <Home to="/"> <FiArrowLeft/> Return</Home>
            </header>

            <Avatar>
                    <img src="https://github.com/victoralva08.png" 
                    alt="User's picture" />

                    <label htmlFor="avatar">
                        
                        <FiCamera/>
                        <input 
                        type="file"
                        id="avatar" />

                    </label>
            </Avatar>

            <Form>
                <Input icon={FiUser} type="text" placeholder="Name" /> 
                <Input icon={FiMail} type="text" placeholder="Email" /> 
                <Input icon={FiLock} type="password" placeholder="Password" /> 
                <Input icon={FiLock} type="password" placeholder="New Password" /> 

                <Button title="Save" />
            </Form>

        </Container>
    )
}