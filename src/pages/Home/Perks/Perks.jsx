import React from 'react'
import { Container } from './style'

// eslint-disable-next-line react/prop-types
export default function Perks({ title, link }) {
  return (
    <Container
      onClick={() => {
        window.location.href = link
      }}
    >
      <p>{title}</p>
    </Container>
  )
}
