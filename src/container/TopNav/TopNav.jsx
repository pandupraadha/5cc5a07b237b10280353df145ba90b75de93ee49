import styled from "styled-components"
import BackButton from "../../components/BackButton/BackButton"
import Location from "../../components/Location/Location"

const Container = styled.div`
  display: flex;
`

const TopNav = () => {
  return (
    <Container>
      <BackButton />
      <Location />
    </Container>
  )
}

export default TopNav
