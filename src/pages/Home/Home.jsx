import React from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Avatar,
  Footer,
  Header,
  Logo,
  Title,
  Container,
  Wrapper,
} from './style'
import { Container as ContainerButton } from './Perks/style'
import useUser from '../../hooks/useUser'
import avatar from '../../assets/user.svg'
import Perks from './Perks'
import api from '../../services/api'

export default function Home() {
  const { user, signUser } = useUser()
  const navigate = useNavigate()
  async function handleCancel() {
    try {
      api.deleteSubscription()
      signUser({ ...user, membership: null })
      navigate('/subscriptions')
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <Container>
      <Wrapper>
        <Header>
          <Logo src={user.membership.image}></Logo>
          <Avatar src={avatar}></Avatar>
        </Header>
        <Title>Olá, {user.name}</Title>
        {user.membership.perks.map((el) => (
          <Perks title={el.title} link={el.link} />
        ))}
        <Footer>
          <ContainerButton onClick={() => navigate('/subscriptions')}>
            <p>Mudar plano</p>
          </ContainerButton>
          <ContainerButton
            onClick={() => handleCancel}
            style={{ background: '#FF4747' }}
          >
            <p>Cancelar plano</p>
          </ContainerButton>
        </Footer>
      </Wrapper>
    </Container>
  )
}
