import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 80%;

  margin-bottom: 20px;
  font-family: "Roboto", "sans-serif";
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  padding: 12px 0 12px 6px;
  margin-bottom: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;

  color: #9f9f9f;
  font-size: 16px;
  font-weight: 700;

  background-color: white;

  cursor: text;
`;
const Button = styled.button`
  all: unset;

  width: 100%;
  height: 50px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ff4791;

  color: white;
  font-size: 27px;
  font-weight: 700;

  border-radius: 6px;

  cursor: pointer;

  :hover {
    font-size: 26px;
  }
`;
const StyledLink = styled(Link)`
  all: unset;
  box-sizing: border-box;
  cursor: pointer;

  color: #fff;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  margin-top: 25px;

  font-weight: 400;

  font-family: "Lato", sans-serif;

  text-decoration: underline;
`;

export { Container, Form, Input, Button, StyledLink };
