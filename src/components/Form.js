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
  gap: 10px;
  width: 80%;

  margin-bottom: 20px;
  font-family: "Roboto", "sans-serif";
`;

const Input = styled.input`
  all: unset;
  width: 100%;
  min-height: 52px;
  padding: 0px 0 0px 15px;
  margin-bottom: 12px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 6px;

  color: #7e7e7e;
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
  font-size: 14px;
  font-weight: 700;

  border-radius: 6px;

  cursor: pointer;
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
