import moment from "moment"
import { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"
import CalendarDate from "../../components/CalendarDate/CalendarDate"
import { colors } from "../../helper/colors"
import { setDate } from "../../redux/date/dateSlice"

const Container = styled.div`
  height: 50px;
  display: flex;
  flex-wrap: no-wrap;
  overflow-y: visible;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  background-color: white;
  border-bottom: 1px solid ${colors.very_light_grey};
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`

const WeekContainer  = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 1;
  min-width: 100vw;
  scroll-snap-align: center;
`

const week = [0, 1]
const date =  [1, 2, 3, 4, 5, 6, 7]
const days = ['SEN', 'SEL', 'RAB', 'KAM', 'JUM', 'SAB', 'MIN']

const Calendar = () => {
  const [activeDate, setActiveDate] = useState(moment().day())
  const dispatch = useDispatch()
  return (
    <Container>
      {week.map(day => 
        <WeekContainer key={day} >
          {date.map( item => 
            <CalendarDate
              // date={ item + (10 * day) }
              date={moment().add(item + (10 * day) - moment().day(), 'days').date()}
              day={days[item - 1]} 
              active={activeDate === item + (10 * day)}
              disabled={item === 7 || item === 6}
              key={item}
              onClick={() => {
                // console.log(moment().add(item + (10 * day) - moment().day(), 'days'));
                // console.log(moment());
                dispatch(setDate(moment().add(item + (10 * day) - moment().day(), 'days').toDate()))
                setActiveDate(item + (10 * day))
              }}
            />
          )}
        </WeekContainer>
       )}
    </Container>
  )
}

export default Calendar
