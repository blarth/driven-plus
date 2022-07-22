import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
import api from '../../services/api';
import logo from "../../assets/Driven_white.png";
import {
  
  Container,
  Form,
  Input,
  Button,
  StyledLink,
} from "../../components/Form";
import useUser from '../../hooks/useUser';
import Image from './styles';


function Login() {
  const navigate = useNavigate();
  const { signUser, user } = useUser();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  function handleChange({ target }) {
    setFormData({ ...formData, [target.name]: target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const user = { ...formData };
    try {
      const {data} = await api.signIn(user)
      signUser(data);
      localStorage.setItem("user", JSON.stringify(data));
      const isSubscripted = data.membership 
      if(isSubscripted !== null){
        navigate('/home')
      }
      navigate("/memberships");
    console.log(data)
    } catch (error) {
      console.log(error);
      alert("erro, muda la dps")
    }
  }

  useEffect(() => {
    console.log(user);
    if (user.membership === null) navigate("/subscriptions");
    if (user.membership !== null) navigate("/home");
  }, []);
  return (
    <Container>
      <Image src={logo}></Image>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Input
          type="email"
          placeholder="E-mail"
          onChange={(e) => handleChange(e)}
          name="email"
          value={formData.email}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          onChange={(e) => handleChange(e)}
          name="password"
          value={formData.password}
          required
        />

        <Button type="submit">ENTRAR</Button>
        <StyledLink to="/sign-up">
          Não possui uma conta? Cadastre-se!
        </StyledLink>
      </Form>
    </Container>
  );
}

export default Login;