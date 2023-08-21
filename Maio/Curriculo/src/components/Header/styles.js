import styled from "styled-components"
import { colors } from "../../theme/constants"

export const Container = styled.div`
  height: 170px;
  padding-left: 30px;
  display: flex;
  align-items: center;
  background-color: ${colors.primary};
  color: white;
`

export const TextAndImageDivider = styled.div`
  display: flex;
  gap: 16px;
`

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
`