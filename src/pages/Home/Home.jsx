import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import { useMediaQuery } from "react-responsive"
import styled from "styled-components"
import Cart from "../../components/Cart/Cart"
import Type from "../../components/Type/Type"
import Calendar from "../../container/Calendar/Calendar"
import Content from "../../container/Content/Content"
import Modal from "../../container/Modal/Modal"
import TopNav from "../../container/TopNav/TopNav"

const Container = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
`

const Top = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 10;
`

const DesktopWarning = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Home = () => {
  const isDesktop = useMediaQuery({ minWidth: 480 })
  const showLocation = useSelector(state => state.location.showModal)
  const [show, setShow] = useState(true)
  useEffect(() => {
    let prevScrollpos = window.pageYOffset;
    window.onscroll = () => {
    let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setShow(true)
        // document.getElementById("navbar").style.top = "0";
      } else {
        setShow(false)
        // document.getElementById("navbar").style.top = "-50px";
      }
      prevScrollpos = currentScrollPos;
    }
  }, [])

  if (isDesktop) return (
    <DesktopWarning>
      Mode desktop masih dalam tahap pengerjaan, mohon buka website ini di smartphone anda. 
    </DesktopWarning>
  )
  else return (
    <Container>
      <Top>
        <TopNav />
        <Calendar />
        <Type show={show}/>
      </Top>

      <Content />
      <Modal show={showLocation} />
      <Cart />
    </Container>
  )
}

export default Home
