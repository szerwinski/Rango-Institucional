import styled from 'styled-components'

// enum HorizontalAlign {
//   center,
//   start,
//   end
// }

// enum VerticalAlign {
//   center,
//   start,
//   end
// }

const Flexbox = styled.div`
  display: flex;
  align-items: ${props => props.flexDirection === 'column' ? props.horizontalAlign || 'center' : props.verticalAlign || 'center'};
  justify-content: ${props => props.flexDirection === 'column' ? props.verticalAlign || 'center' : props.horizontalAlign || 'center'};
  flex-direction: ${props => props.flexDirection || 'row'};
`

export default Flexbox
