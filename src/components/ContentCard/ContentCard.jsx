import styled from "styled-components"
import { colors } from "../../helper/colors"
import { MdStar, MdStarHalf, MdStarBorder } from "react-icons/md";
import currency from 'currency.js'
import { ResetButton } from "../../helper/resetStyling";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../../redux/cart/cartSlice";
import _ from "lodash";


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 90% 0 0;
  box-shadow: 0 8px 10px 0 rgba(10, 31, 68, 0.1);
  margin: 24px 0 0;
  border-radius: 8px;
  position: relative;
  overflow: hidden;
`

const ImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 90%;
`

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`

const DetailContainer = styled.div`
  padding: 16px;
`

const Rating = styled.div`
  color: ${colors.grey};
  font-weight: 600;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 8px;
`

const RatingValue = styled.span`
  display: block;
  margin-right: 4px;
`

const Title = styled.span`
  display: block;
  color: ${colors.dark_grey};
  font-weight: 600;
  margin-bottom: 8px;
`

const Provider = styled.span`
  display: block;
  color: ${colors.grey};
  font-weight: 600;
  font-size: 12px;
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`

const Price = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: ${colors.dark_grey};
`

const AddCart = styled(ResetButton)`
  padding: 0.5rem 1.25rem;
  background-color: ${colors.red};
  color: white;
  border-radius: 4px;
  font-weight: 600;
  &:disabled {
  background-color: ${colors.light_grey};
  }
`

const ContentCard = (props) => {
  const {data} = props
  const cartItems = useSelector(state => state.cart.item)
  const dispatch = useDispatch()

  function renderRating(){
    const iconProps = {
      size: 18,
      color: colors.red
    }
    let star = []
    let rating = data.rating
    
    for (let index = 0; index < 5; index++) {
      if (rating > 1) star.push( <MdStar {...iconProps} key={index} /> )
      else if (rating > 0) star.push( <MdStarHalf {...iconProps} key={index} /> )
      else star.push( <MdStarBorder {...iconProps} key={index} /> )
      rating--
    }


    return (
      <Rating>
        <RatingValue>
          {data.rating}
        </RatingValue>
        {star}
      </Rating>
    )
  }

  function handleAddCart() {
    if (cartItems.includes(data)) return
    dispatch(addItem(data))
  }

  return (
    <Container>
      <ImageContainer>
      <Image src={data.image} />
      </ImageContainer>
      <DetailContainer>
        {renderRating()}
        <Title>
          {data.title}
        </Title>
        <Provider>
          {data.provider}
        </Provider>
        <Footer>
          <Price>
            {currency(data.price, {symbol: `IDR `, decimal: ',', separator: '.', precision: 0 }).format()}
          </Price>
          <AddCart onClick={handleAddCart} disabled={cartItems.includes(data)}>
            ADD +
          </AddCart>
        </Footer>
      </DetailContainer>
    </Container>
  )
}

export default ContentCard
