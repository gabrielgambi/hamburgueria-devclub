import React from 'react'

import {
  Container,
  Background,
  ContainerItens,
  Label,
  Input,
  Button,
  SignInLink 
} from './styles'

function Login() {
  return (
    <Container>
      <Background />
      <ContainerItens>
        <img />
        <h1>Login</h1>

        <Label>Email</Label>
        <Input />

        <Label>Senha</Label>
        <Input />

        <Button>SignIn</Button>
        <SignInLink>
          Não possui conta ? <a>SignUp</a>
        </SignInLink>
      </ContainerItens>
    </Container>

  )
}

export default Login
