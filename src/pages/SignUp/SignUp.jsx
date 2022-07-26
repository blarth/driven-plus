import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'
import {
  Container,
  Form,
  Input,
  Button,
  StyledLink,
} from '../../components/Form'

function SignUp() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    cpf: '',
    password: '',
  })
  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value })
  }
  async function handleSubmit(e) {
    e.preventDefault()
    const user = { ...formData }
    try {
      await api.signUp(user)
      navigate('/')
    } catch (error) {
      console.log(error)
      alert(error.response.data.message)
    }
  }

  return (
    <Container>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="text"
          placeholder="Nome"
          onChange={(e) => handleChange(e)}
          name="name"
          value={formData.name}
          required
        />
        <Input
          type="number"
          placeholder="CPF"
          onChange={(e) => handleChange(e)}
          name="cpf"
          value={formData.cpf}
          required
        />
        <Input
          type="email"
          placeholder="E-mail"
          onChange={(e) => handleChange(e)}
          name="email"
          value={formData.email}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          onChange={(e) => handleChange(e)}
          name="password"
          value={formData.password}
          required
        />
        <Button type="submit">CADASTRAR</Button>
        <StyledLink to="/">Já possuí uma conta? Entre</StyledLink>
      </Form>
    </Container>
  )
}

export default SignUp
