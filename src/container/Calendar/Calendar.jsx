import moment from "moment"
import { useEffect, useState } from "react"
import styled from "styled-components"
import CalendarDate from "../../components/CalendarDate/CalendarDate"

const Container = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  overflow-y: hidden;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;

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


  useEffect(() => {
    console.log( moment().add(1 - moment().day(), 'days').date()  );
  }, [])

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
                console.log('clicked');
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
