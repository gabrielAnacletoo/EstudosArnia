
import styled from "styled-components"
import { colors } from "../../theme/constants"

export const Container = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

export const FilledCircle = styled.div`
  background-color: ${colors.primary};
  width: 11px;
  height: 11px;
  border-radius: 5px;
`

export const Circle = styled.div`
  border: 1px solid ${colors.primary};
  width: 10px;
  height: 10px;
  border-radius: 5px;
`