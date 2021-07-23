import { MdExpandMore } from "react-icons/md"
import styled from "styled-components"
import { colors } from "../../helper/colors"
import { ResetButton } from "../../helper/resetStyling"
import { useSelector, useDispatch } from 'react-redux'
import { openModal } from "../../redux/location/locationSlice"


const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  padding-left: 8px;
  width: 100%;
`

const Label = styled.span`
  font-size: 8px;
  color: ${colors.grey};
  text-transform: uppercase;
  margin: 0 .25rem;
`

const ValueButton = styled(ResetButton)`
  padding: .25rem;
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-weight: 600;
  color: ${colors.dark_grey};
  &:hover:focus:active {
    background-color: ${colors.very_light_grey};
  }
`

const Location = () => {
  const locationState = useSelector(state => state.location)
  const dispatch = useDispatch()

  function handleClick(){
    console.log('alla');
    dispatch(openModal())
  }

  return (
    <Container>
      <Label>
        alamat pengantaran
      </Label>
      <ValueButton onClick={handleClick} >
        {locationState.address} <MdExpandMore size={20} color={colors.red} />
      </ValueButton>
    </Container>
  )
}

export default Location
