import { useSelector } from "react-redux"
import styled from "styled-components"
import { colors } from "../../helper/colors"
import currency from 'currency.js'
import { MdChevronRight, MdShoppingCart } from "react-icons/md";
import { ResetParagraph } from "../../helper/resetStyling";

const Container = styled.div`
  position: fixed;
  bottom: ${props => props.show ? '0' : '-80px'};
  width: 100%;
  padding: 0 12px 16px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), #ffffff);
`

const Card = styled.div`
  width: 100%;
  background-color: ${colors.dark_red};
  border-radius: 4px;
  padding: 16px;
  color: white;
  display: flex;
  justify-content: space-between;
`

const Icons = styled.div`
  display: inline-flex;
  align-items: center;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
`

const DetailBold = styled(ResetParagraph)`
  font-weight: 700;
`

const DetailSmall = styled(ResetParagraph)`
  font-size: 12px;
`

const Cart = () => {
  const cartItem = useSelector(state => state.cart.item)

  function calculatePrice() {
    let price = 0;
    cartItem.forEach(item => {
      price += item.price
    })
    return price
  }

  return (
    <Container show={cartItem.length > 0} >
      <Card>
        <Details>
          <DetailBold>
            <span>{cartItem.length} Item{cartItem.length > 1 && 's'}</span> | <span>{currency(calculatePrice(), {symbol: `IDR `, decimal: ',', separator: '.', precision: 0 }).format()} </span>
          </DetailBold>
          <DetailSmall>
            Termasuk ongkos kirim
          </DetailSmall>
        </Details>
        <Icons>
          <MdShoppingCart size={24} />
          <MdChevronRight size={24} />
        </Icons>
      </Card>
    </Container>
  )
}

export default Cart
