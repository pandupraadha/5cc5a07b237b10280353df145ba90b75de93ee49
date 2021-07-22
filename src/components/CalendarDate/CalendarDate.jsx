import styled from "styled-components"
import { colors } from "../../helper/colors"
import { ResetButton } from "../../helper/resetStyling"


const Button = styled(ResetButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: 40px;
  height: 40px;
  color: ${props => props.active ? 'white' : props.disabled ? colors.light_grey : colors.dark_grey};
  background-color: ${props => props.active ? colors.dark_grey : 'transparent'};
  border-radius: 50%;
`

const Date = styled.span`
  color: inherit;
  font-weight: 600;
`
const Day = styled.span`
  font-size: 8px;
  font-weight: 500;
  color: inherit
`


const CalendarDate = (props) => {
  const {date, day, active, disabled, onClick} = props
  return (
    <Button active={active} disabled={disabled} onClick={onClick} >
      <Day>
        {day}
      </Day>
      <Date>
        {date}
      </Date>
    </Button>
  )
}

export default CalendarDate
