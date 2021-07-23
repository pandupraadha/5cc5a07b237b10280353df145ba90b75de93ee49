import styled from "styled-components"
import { MdLocationOn } from "react-icons/md"
import { colors } from "../../helper/colors"
import { useState } from "react"

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
  const {onChange} = props
  const [input, setInput] = useState('')

  function handleChange(e){
    const val = e.target.value
    if (val.length > 2 || val.length === 0) onChange(val)
    setInput(val)
  }
  return (
    <Container>
      <MdLocationOn size={24} color={colors.red} />
      <Input type="text" value={input} onChange={handleChange} />
    </Container>
  )
}

export default LocationInput
