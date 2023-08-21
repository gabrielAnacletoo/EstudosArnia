import styled from "styled-components"
import { colors } from "../../theme/constants"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Line = styled.hr`
  width: 130px;
  border: ${`5px solid ${colors.primary}`};
  border-radius: 8px;
`