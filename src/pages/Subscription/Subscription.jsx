import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Button, Container, Form, Input } from '../../components/Form'
import arrow from '../../assets/Vector.svg'
import ben from '../../assets/ben.svg'
import api from '../../services/api'
import useUser from '../../hooks/useUser'
import { Arrow, Benefits, ContainerInfo, Title, WrapperInline } from './style'

export default function Subscription() {
  const { id } = useParams()
  const [data, setData] = useState(null)
  const { user, signUser } = useUser()
  const navigate = useNavigate()

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const { dataAPI } = await api.subscription(user.token, id)
    setData(dataAPI)
  }
  const [formData, setFormData] = useState({
    membershipId: '',
    cardName: '',
    cardNumber: '',
    securityNumber: '',
    expirationDate: '',
  })
  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value })
  }
  async function handleSubmit(e) {
    e.preventDefault()
    Swal.fire({
      title: `Tem certeza que deseja assinar o plano ${data.name} (R$ ${data.price})?`,
      showCancelButton: true,
      confirmButtonColor: '#FF4791',
      cancelButtonColor: '#CECECE',
      confirmButtonText: 'SIM',
      cancelButtonText: 'Não',
      width: 'auto',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const sendData = { ...formData, membershipId: id }

        try {
          const {
            data: { membership },
          } = await api.postSubscription(sendData, user.token)
          const newUser = { ...user, membership }
          signUser(newUser)
          navigate('/')
        } catch (error) {
          // eslint-disable-next-line no-alert
          alert(error.response.data.message)
        }
      }
    })
  }
  if (data === null) return <h1>Loading</h1>
  return (
    <Container>
      <Arrow
        src={arrow}
        onClick={() => {
          navigate('/subscriptions')
        }}
      ></Arrow>
      <img src={data.image} alt="Plan Logo"></img>
      <Title>{data.name}</Title>
      <ContainerInfo>
        <WrapperInline>
          <img src={ben} alt="Beneficios"></img>
          <span>Beneficios: </span>
        </WrapperInline>
        {data.perks.map((el, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Benefits key={index}>
            {index}. {el.title}
          </Benefits>
        ))}
        <WrapperInline>
          <img src={ben} alt="Preço"></img>
          <span>Preco: </span>
        </WrapperInline>
        <p>R$ {data.price} cobrados mensalmente</p>
      </ContainerInfo>

      <Form onSubmit={(e) => handleSubmit(e)} style={{ gap: '1px' }}>
        <Input
          type="text"
          placeholder="Nome impresso no cartão"
          onChange={(e) => handleChange(e)}
          name="cardName"
          value={formData.cardName}
          required
        />
        <Input
          type="text"
          placeholder="Digitos do cartão"
          onChange={(e) => handleChange(e)}
          name="cardNumber"
          value={formData.cardNumber}
          required
        />
        <WrapperInline>
          <Input
            type="number"
            placeholder="Código de segurança"
            onChange={(e) => handleChange(e)}
            name="securityNumber"
            value={formData.securityNumber}
            required
          />
          <Input
            type="text"
            placeholder="Validade"
            onChange={(e) => handleChange(e)}
            name="expirationDate"
            value={formData.expirationDate}
            required
          />
        </WrapperInline>

        <Button type="submit">ASSINAR</Button>
      </Form>
    </Container>
  )
}
