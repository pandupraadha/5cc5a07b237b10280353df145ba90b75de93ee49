import styled from "styled-components"
import Calendar from "../../container/Calendar/Calendar"
import TopNav from "../../container/TopNav/TopNav"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`

const Home = () => {
  return (
    <Container>
      <TopNav />

      <Calendar />

      {/* content */}
    </Container>
  )
}

export default Home
