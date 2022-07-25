import React from 'react'
import { Container } from './style'
import { useNavigate } from 'react-router-dom'

export default function Perks({title, link}) {
  
  return (
    <Container onClick={() => window.location.href = link}>
      <p>{title}</p>
    </Container>
  );
}
