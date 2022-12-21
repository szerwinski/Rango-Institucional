import styled from "styled-components"
import Flexbox from "../styles/flexbox"
import AnimacaoSuporte from "../assets/gif/animação_suporte.gif"
import BaseInput from "../styles/input/base-input"
import SizedDivisor from "../styles/sized-divisor"
import BaseTextAreaInput from "../styles/input/base-text-area-input"
import Header from "../components/header";

const Background = styled(Flexbox)`
  width: 100vw;
  height: 100vh;
  background-color: #E8E8E8;
`

const Image = styled.img`
  width: 80%;
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

export default function SuportScreen() {
  return <Background>
    <Header/>
    
    <Flexbox flexDirection='column' style={{ height: '100%' }}>
    <Flexbox>
      <Container>
        <Image src={AnimacaoSuporte}/>
      </Container>
      <VerticalLine/>
      <Container>
        <FormWrapper flexDirection='column'>
          <Title>Rango Suporte</Title>
          <HorizontalLine/>
          <Description>Preencha o formulário abaixo para nos enviar uma mensagem de suporte Responderemos assim que possível.</Description>
          <SizedDivisor height='40'/>
          <Flexbox style={{width: 'calc(100% - 20px)', margin: '0px 50px'}}>
            <Input placeholder='Nome' type='string'/>
            <SizedDivisor width='40'/>
            <Input placeholder='Restaurante' type='string' />
          </Flexbox>
          <SizedDivisor height='20'/>
          <Input placeholder='Contato' type='string' />
          <SizedDivisor height='20'/>
          <BaseTextAreaInput rows={5} placeholder='Relate seu problema neste campo'/>
          <SizedDivisor height='40'/>
          <Button>Enviar</Button>
        </FormWrapper>
      </Container>
    </Flexbox>
    </Flexbox>
  </Background>;
}
