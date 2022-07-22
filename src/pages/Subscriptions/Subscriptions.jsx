import React, { useState, useEffect } from 'react'
import { Container } from '../../components/Form'
import useUser from '../../hooks/useUser'
import api from '../../services/api'
import { ContainerSub, Text } from './style'

export default function Subscriptions() {
  const [data, setData] = useState(null)
  const {user} = useUser()

  
  useEffect(() => {
    getData()
  }, [])

  async function getData(){
    const { data } = await api.subscriptions(user.token);
    setData(data)
  }
  
  if(data === null) return <h1>Loading</h1>


  return (
    <>
      <Container>
        <Text>Escolha seu Plano</Text>
        {data.map((el) => {
          return (
            <ContainerSub
              onClick={() => {
                navigate(`/subscription/${el.id}`);
              }}
            >
              <img src={el.image}></img>
              <p>R$ {el.price}</p>
            </ContainerSub>
          );
        })}
      </Container>
    </>
  );
}
