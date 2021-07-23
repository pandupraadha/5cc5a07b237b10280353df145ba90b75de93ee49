import styled from "styled-components"
import { MdLocationOn } from "react-icons/md"
import { colors } from "../../helper/colors"

const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 8px;
  border: 1px solid ${colors.very_light_grey};
  border-radius: 4px;
  margin: 16px 0;
`

const Input = styled.input`
  flex: 1;
  border: none;
  margin-left: 8px;
  caret-color: ${colors.red};
  color: ${colors.dark_grey};
  &:focus {
    outline: none;
  }
`


const LocationInput = (props) => {
  const {value, onChange} = props
  return (
    <Container>
      <MdLocationOn size={24} color={colors.red} />
      <Input type="text" value={value} onChange={onChange} />
    </Container>
  )
}

export default LocationInput
