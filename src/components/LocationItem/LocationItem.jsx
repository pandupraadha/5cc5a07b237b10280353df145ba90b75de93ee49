import styled from "styled-components"
import { MdLocationOn } from "react-icons/md"
import { colors } from "../../helper/colors"

const Container = styled.div`
  display: flex;
  align-items: center;
  // padding: 8px;
`
const IconContaienr = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.very_light_grey};
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 0 12px 0 6px;
`

const DetailContainer = styled.div`
  flex: 1;
  max-width: calc(100% - 56px);
  border-bottom: 1px solid ${colors.very_light_grey};
  padding: 12px 0;
`

const LocationName = styled.span`
  font-weight: 600;
  display: block;
  margin-bottom: 4px;
`

const LocationAddress = styled.span`
  font-size: 12px;
  display: block;
  line-heght: 1;
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`


const LocationItem = (props) => {
  const {data, onClick} = props
  return (
    <Container onClick={onClick} >
      <IconContaienr>
        <MdLocationOn size={24} color={colors.grey} />
      </IconContaienr>
      <DetailContainer>
        <LocationName>
          {data.name}
        </LocationName>
        <LocationAddress>
          {data.address}
        </LocationAddress>
      </DetailContainer>
    </Container>
  )
}

export default LocationItem
