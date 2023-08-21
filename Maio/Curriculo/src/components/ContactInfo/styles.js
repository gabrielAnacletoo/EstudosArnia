import styled from "styled-components"
import { colors } from "../../theme/constants"

export const Container = styled.div`
  display: flex;
  gap: 7px;
  align-items: center;
`

export const IconWrapper = styled.div`
  width: 25px;
  height: 25px;
  background-color: ${colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
`