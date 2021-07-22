import moment from "moment"
import styled from "styled-components"
import ContentCard from "../../components/ContentCard/ContentCard"
import { colors } from "../../helper/colors"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding: 185px 16px 16px;
`

const Date = styled.span`
  font-weight: 600;
  font-size: 18px;
  color: ${colors.dark_grey};
  margin: 24px 0 0;
`

const DATA = [
  {
    title: "Roasted Chicken with Scrambled Egg",
    image: "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=653&q=80",
    provider: "Kulina - Uptown Lunch",
    price: 35000,
    rating: 3.5
  },
  {
    title: "Roasted Chicken with Scrambled Egg",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    provider: "Kulina - Uptown Lunch",
    price: 35000,
    rating: 4.5
  },
  {
    title: "Roasted Chicken with Scrambled Egg",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    provider: "Kulina - Uptown Lunch",
    price: 35000,
    rating: 4.5
  },
  {
    title: "Roasted Chicken with Scrambled Egg",
    image: "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    provider: "Kulina - Uptown Lunch",
    price: 35000,
    rating: 4.5
  },
  {
    title: "Roasted Chicken with Scrambled Egg",
    image: "https://images.unsplash.com/photo-1504113888839-1c8eb50233d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1015&q=80",
    provider: "Kulina - Uptown Lunch",
    price: 35000,
    rating: 4.5
  },
]

const Content = () => {

  return (
    <Container>
      <Date>
      {moment().format('ddd, D MMMM YYYY')}
      </Date>
      {DATA.map( (item, index) => (
        <ContentCard key={index} data={item} />
      ) )}
    </Container>
  )
}

export default Content
