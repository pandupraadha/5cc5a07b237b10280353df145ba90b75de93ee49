import { useState } from "react"
import styled from "styled-components"
import { colors } from "../../helper/colors"

const Container = styled.div`
  color: ${colors.dark_grey};
  padding: 8px 16px;
  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);
  display: flex;
  position: absolute;
  width: 100%;
  z-index: -1;
  background-color: white;
  transition: top 0.3s;
`

const Button = styled.button`
  width: 100%;
  padding: 8px;
  font-weight: 600;
  border: 1px solid ${colors.dark_grey};
  color: ${props => props.active ? 'white' : colors.dark_grey };
  background-color: ${props => props.active ? colors.dark_grey : 'white' };
  &:first-child {
    border-radius: 4px 0 0 4px;
  }
  &:last-child {
    border-radius: 0 4px 4px 0;
  }
`

const Type = (props) => {
  const {show} = props
  const [active, setActive] = useState('lunch')
  return (
    <Container style={{ top: show ? '100%' : 'calc(100% - 55px)' }}>
      <Button onClick={() => setActive('lunch')} active={active === 'lunch'}>
        Lunch
      </Button>
      <Button onClick={() => setActive('dinner')} active={active === 'dinner'}>
        Dinner
      </Button>
    </Container>
  )
}

export default Type
