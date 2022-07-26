import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`

export const Header = styled.header`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  height: 85px;
`

export const Avatar = styled.img`
  position: fixed;
  right: 22px;
  top: 22px;
  width: 28px;
  height: 28px;
`
export const Logo = styled.img`
  width: 70px;
  height: 70px;
`

export const Title = styled.p`
  color: #ffffff;
  height: 28px;
  font-family: Roboto;
  font-size: 24px;
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 53px;
  text-align: center;
`

export const Footer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-around;
  position: fixed;
  bottom: 12px;
`
export const Wrapper = styled.div`
  width: 80%;
  margin-bottom: 12px;
  height: auto;
  padding-top: 30px;
`
