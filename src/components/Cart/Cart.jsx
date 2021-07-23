import styled from "styled-components"
import { colors } from "../../helper/colors"

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  padding: 16px;
`

const Card = styled.div`
  width: 100%;
  background-color: ${colors.dark_red};
  border-radius: 4px;
`

const Cart = () => {
  return (
    <Container>
      <Card>
        lala
      </Card>
    </Container>
  )
}

export default Cart
