import { useState } from "react"
import { MdClose } from "react-icons/md"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import LocationInput from "../../components/LocationInput/LocationInput"
import LocationItem from "../../components/LocationItem/LocationItem"
import { colors } from "../../helper/colors"
import { ResetButton } from "../../helper/resetStyling"
import { closeModal, setAddress } from "../../redux/location/locationSlice"
import data from './MOCK_DATA.json' // generated in https://www.mockaroo.com/

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background-color: rgba(0,0,0,0.4);
`

const Card = styled.div`
  border-radius: 8px 8px 0 0;
  background-color: white;
  width: 100%;
  height: calc(100vh - 110px);
  position: absolute;
  bottom: 0;
  padding: 16px;
  display: flex;
  flex-direction: column;
  color: ${colors.dark_grey};
`

const CardBody = styled.div`
  display: inline-block;
  width: 100%;
  max-height: 100%;
  overflow-y: scroll;
  flex: 1 0 1%;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

const CloseButton = styled(ResetButton)`
  color: ${colors.dark_grey};
  padding: 0 .75rem;
` 

const Title = styled.span`
  font-size: 20px;
  margin-top: 32px;
  font-weight: 600;
`

const CardFooter = styled.div`
  display: flex;
  justify-content: center;
`

const Google = styled.img`
  height: 16px;
`

const Modal = (props) => {
  const {show} = props
  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  function handleCloseModal(){
    dispatch(closeModal())
  }

  function handleSelectAddress(address) {
    dispatch(setAddress(address.name))
  }

  if (show) return (
    <Container onClick={handleCloseModal} >
      <Card>
        <CardHeader>
          <Title>
            Cek makanan yang tersedia di lokasi kamu!
          </Title>
          <CloseButton onClick={handleCloseModal} >
            <MdClose size={24} />
          </CloseButton>
        </CardHeader>
        <CardHeader>
          <LocationInput />
        </CardHeader>
        <CardBody>
          {data.map((item, index) => 
            <LocationItem data={item} key={index} onClick={() => handleSelectAddress(item)} />
          )}
        </CardBody>
        <CardFooter>
        <Google src="/img/powered_by_google.png" alt="" />
        </CardFooter>
      </Card>
    </Container>
  )
  else return null
}

export default Modal
