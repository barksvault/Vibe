import React, { useState } from "react";
import styled from "styled-components";
import Fullscreen from "../components/Fullscreen";
import Video from "../Images/video.mp4";

const Input = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 10px;
  background: rgba(216, 216, 216, 0.282206);
  border: solid #46395c 0.5px;
  border-radius: 8px;
  color: white;
`;
const Label = styled.label`
  font-size: 20px;
  font-weight: bold;
  padding-top: 10px;
  color: white;
`;

const Button = styled.button`
  border: solid 2px #663992;
  background: white;
  margin-top: 20px;
  color: #663992;
  border: none;
  font-size: 20px;
  border-radius: 8px;
`;
const FormRow = styled.div`
  margin-bottom: 15px;
  background: transparent;
`;

const Form = styled.form`
  padding: 20px;
`;
const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  object-fit: cover;
  z-index: -1;
  height: 100vh;
  width: 100%;
  filter: saturate(1);
  align-items: center;
  justify-content: center;
`;
function Login({ history, activeUser, onLogin, ...props }) {
  const [formValues, setFormValues] = useState({
    user_name: "",
    password: ""
  });
  console.log(formValues);
  function handleChange(event) {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    try {
      if (
        activeUser.user_name === formValues.user_name &&
        activeUser.password === formValues.password
      ) {
        history.push("/dashboard");
      } else {
        alert("wrong password");
      }
    } catch (e) {
      console.log(e);
    }
    onLogin(formValues);
  }

  return (
    <Fullscreen>
      <VideoBackground loop autoPlay muted>
        <source src={Video} type="video/mp4" />
      </VideoBackground>

      <Form onSubmit={handleSubmit}>
        <Label htmlFor="user_name">Name</Label>
        <Input
          onChange={handleChange}
          name="user_name"
          value={formValues.user_name}
        />
        <FormRow />
        <Label htmlFor="password">Password</Label>
        <Input
          onChange={handleChange}
          name="password"
          type="password"
          value={formValues.password}
        />
        <Button data-cy="button-name">Log in</Button>
      </Form>
    </Fullscreen>
  );
}

export default Login;
