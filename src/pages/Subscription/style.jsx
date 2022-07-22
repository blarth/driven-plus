import styled from "styled-components";

export const ContainerInfo = styled.div`
  width: 80%;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 34px;
  
  span {
    height: 17px;
    width: auto;
    color: #ffffff;
    font-family: Roboto;
    font-size: 16px;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: left;
  }
  p {
    font-family: Roboto;
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    
    text-align: left;
    color: #ffffff;
  }
  
`;

export const Arrow = styled.img`
  position: absolute;
  top: 10px;
  left: 10px;
`
export const Title = styled.p`
  font-family: Roboto;
  font-size: 32px;
  font-weight: 700;
  line-height: 38px;
 
  text-align: left;
  color: #ffffff;
`;


export const Benefits = styled.p`
  font-family: Roboto;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  
  text-align: left;
  color: #ffffff;
`; 


export const WrapperInline = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
  gap: 5px;
  img {
    margin-right: 7px;
  }
  Input {
    width: 140px;
  }
`;