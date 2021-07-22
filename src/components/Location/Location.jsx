import { MdExpandMore } from "react-icons/md"
import styled from "styled-components"
import { colors } from "../../helper/colors"
import { ResetButton } from "../../helper/resetStyling"

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
  return (
    <Container>
      <Label>
        alamat pengantaran
      </Label>
      <ValueButton >
        Tokopedia Tower <MdExpandMore size={20} color={colors.red} />
      </ValueButton>
    </Container>
  )
}

export default Location
