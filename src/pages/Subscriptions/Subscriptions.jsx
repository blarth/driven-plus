import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container } from '../../components/Form'
import useUser from '../../hooks/useUser'
import api from '../../services/api'
import { ContainerSub, Text } from './style'

export default function Subscriptions() {
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const { user } = useUser()

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const { dataAPI } = await api.subscriptions(user.token)
    setData(dataAPI)
  }

  if (data === null) return <h1>Loading</h1>

  return (
    <Container>
      <Text>Escolha seu Plano</Text>
      {data.map((el) => (
        <ContainerSub
          onClick={() => {
            navigate(`/subscription/${el.id}`)
          }}
        >
          <img src={el.image} alt="Plan Logo"></img>
          <p>R$ {el.price}</p>
        </ContainerSub>
      ))}
    </Container>
  )
}
