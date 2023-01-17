import styled from 'styled-components'

const SizedDivisor = styled.div`
  width: ${props => props.width || '0'}px;
  height: ${props => props.height || '0'}px;
  background-color: ${props => props.color || 'transparent'};
`

export default SizedDivisor
