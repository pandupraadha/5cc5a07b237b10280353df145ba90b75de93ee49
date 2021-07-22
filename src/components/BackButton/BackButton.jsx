import { MdArrowBack } from "react-icons/md"
import styled from "styled-components"
import { colors } from "../../helper/colors"
import { ResetButton } from "../../helper/resetStyling"

const Button = styled(ResetButton)`
  color: ${colors.dark_grey};
`

const BackButton = () => {
  return (
    <Button>
      <MdArrowBack size={32} color={colors.dark_grey} />
    </Button>
  )
}

export default BackButton
