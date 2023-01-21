import styled from "styled-components"
import Flexbox from "../styles/flexbox"
import AnimacaoSuporte from "../assets/gif/animação_suporte.gif"
import AnimacaoConcluído from "../assets/gif/animacao-concluido.gif"
import BaseInput from "../styles/input/base-input"
import BaseTextAreaInput from "../styles/input/base-text-area-input"
import SizedDivisor from "../styles/sized-divisor"
import Header from "../components/header";
import React from "react"
import axios from "axios"

const Background = styled(Flexbox)`
  width: 100vw;
  height: 100vh;
`

const Image = styled.img`
  width: 70%;
`

const Container = styled(Flexbox)`
  flex: 1;
`

const VerticalLine = styled(Flexbox)`
  height: 100%;
  background-color:#F28A33;
  width: 3px;
  border-radius: 4px;
`

const HorizontalLine = styled(Flexbox)`
  width: 300px;
  background-color:#F28A33;
  height: 2px;
  border-radius: 4px;
  margin-top: 0px;
  margin-bottom: 16px;
`

const Title = styled.div`
  color: #F28A33;
  font-size: 40px;
  text-align: center;
`

const Description = styled.div`
  color: #F28A33;
  font-size: 17px;
  font-weight: bold;
  margin: 0px 10%;
  text-align: center;
`

const RadioLabel = styled.div`
  color: #F28A33;
  font-size: 17px;
  font-weight: bold;
  text-align: center;
`

const Button = styled.button`
margin-top: 20px;
padding: 4px 0px;
width: 200px;
background-color: #52E899;
color: black;
border: none;
border-radius: 20px;
font-weight: bold;
font-size: 18px;
`

const Input = styled(BaseInput)`
`

const FormWrapper = styled(Flexbox)`
  width: 80%;
`

const RadioButton = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
  border: none;
  accent-color: #52E899;
  
  &:checked {
    border: none;
  }
`

export default function SuportScreen() {
  const [isCellphone] = React.useState(window.innerWidth <= 800)
  const [contactForm, setContactForm] = React.useState(null)
  const [restaurantName, setRestaurantName] = React.useState(null)
  const [name, setName] = React.useState(null)
  const [contact, setContact] = React.useState(null)
  const [problemDescription, setProblemDescription] = React.useState(null)
  const [showSucessPage, setShowSucessPage] = React.useState(false)

  async function sendSupportEmail(name, restaurantName, contact, problemDescription) {
    const body = { restaurantName, name, problemDescription }
    if(contactForm === "mail") {
      body.email = contact
    } else {
      body.phoneNumber = contact
    }
    console.log(body)
    const response = await  axios.post(
      "http://localhost:1337/v2/sendSuportFormMail",
      body
    )
    console.log(response)
    return response.status === 200
  }

  function validateForm() {
    const form = [name, restaurantName, contactForm, contact, problemDescription]
    const formLabels = ["Nome", 'Restaurante', 'Tipo de contato', "Contato", "Seu problema"]
    if(form.includes(null) || form.includes(undefined)) {
      var warningMessage = "Preencha as informações abaixo:\n"
      form.map((value, index) => {
        if(value == null || value == undefined) { 
          warningMessage += ("- " + formLabels[index] + "\n")
        }
      })
      alert( warningMessage)
      return false
    }
    return true
  }

  return <Background>
    <Header/>
    <Flexbox flexDirection='column' style={{ height: '100%', width: '100%' }}>
      {
        showSucessPage ? <Flexbox flexDirection='column'>
          <Image src={AnimacaoConcluído}/>
          <Description>Obrigado! Nossos especialistas entrarão em contato o quanto antes :)</Description>
        </Flexbox> :   <Flexbox style={{ backgroundColor: '#E8E8E8', padding: '40px 0px', width: '100%' }}>
        {
        isCellphone  ? <div/> :
          <Container>
            <Image src={AnimacaoSuporte}/>
          </Container>
        }
        {
        isCellphone  ? <div/> :
          <VerticalLine/>
        }
        <Container>
          <FormWrapper flexDirection='column' style={{ height: '100%' }}>
            {
              isCellphone  ? <SizedDivisor style={{ height: '15vh' }}/>: <div/>
            }
            <Title>Rango Suporte</Title>
            <HorizontalLine/>
            <Description>Preencha o formulário abaixo para nos enviar uma mensagem de suporte Responderemos assim que possível.</Description>
            {
              isCellphone  ? 
                <Flexbox flexDirection='column'>
                  <SizedDivisor height='40'/>
                  <Image src={AnimacaoSuporte}/>
                </Flexbox> : <div/>
            }
            <SizedDivisor height='40'/>
            <Flexbox style={{width: 'calc(100% - 20px)', margin: '0px 50px'}}>
              <Input placeholder='Nome' type='string'  onChange={(value) => {
                    setName(value.target.value)
                  }}/>
              <SizedDivisor width='40'/>
              <Input placeholder='Restaurante' type='string'  onChange={(value) => {
                    setRestaurantName(value.target.value)
                  }}/>
            </Flexbox>
            <SizedDivisor height='20'/>
            <Flexbox style={{width: 'calc(100% - 20px)' }}>
              <Flexbox>
                <RadioButton type="radio" name="contact" value="phone" onChange={ (value) => {
                    if(value.target.checked) {
                      setContactForm('phone')
                    }
                  }
                }/>
                <SizedDivisor width='8'/>
                <RadioLabel>Telefone</RadioLabel>
              </Flexbox>
              <SizedDivisor width='10'/>
              <Flexbox>
                <RadioButton type="radio" name="contact" value="mail" onChange={ (value) => {
                    if(value.target.checked) {
                      setContactForm('mail')
                    }
                  }
                }/>
                <SizedDivisor width='8'/>
                <RadioLabel>Email</RadioLabel>
              </Flexbox>
              {
              isCellphone  ? <div/> :
              <Flexbox flexDirection='row' style={{flex: '1' }}>
                <SizedDivisor width='20'/>
                <Input placeholder='Contato' type='string' style={{ flex: '1' }}   onChange={(value) => {
                    setContact(value.target.value)
                  }}/>
                </Flexbox>
            }
            </Flexbox>
            {
              isCellphone  ? 
              <Flexbox flexDirection='column' style={{width: '100%' }}>
                  <SizedDivisor height='20'/>
                  <Input placeholder='Contato' type='string'   onChange={(value) => {
                    setContact(value.target.value)
                  }}/>
                </Flexbox> : <div/>
            }
            <SizedDivisor height='20'/>
            <BaseTextAreaInput rows={5} placeholder='Relate seu problema neste campo'   onChange={(value) => {
                    setProblemDescription(value.target.value)
                  }}/>
            <SizedDivisor height='40'/>
            <Button onClick={async () => {
              if(validateForm() && await sendSupportEmail(name, restaurantName, contact, problemDescription)) {
                setShowSucessPage(true)
              }
            }}>Enviar</Button>
          </FormWrapper>
        </Container>
      </Flexbox>
      }
    </Flexbox>
  </Background>;
}
