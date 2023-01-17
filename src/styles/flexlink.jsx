import styled from 'styled-components'

const Flexlink = styled.a`
  display: flex;
  align-items: ${props => props.flexDirection === 'column' ? props.horizontalAlign || 'center' : props.verticalAlign || 'center'};
  justify-content: ${props => props.flexDirection === 'column' ? props.verticalAlign || 'center' : props.horizontalAlign || 'center'};
  flex-direction: ${props => props.flexDirection || 'row'};
  text-decoration: none;
`

export default Flexlink
