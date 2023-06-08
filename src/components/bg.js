import React from 'react'
import styled from 'styled-components'

const StyledBG = styled.div`
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  // background-color: ${({ theme }) => theme.colors.blackWhite};
  // color: ${({ theme }) => theme.colors.whiteBlack};
  -webkit-transform: translate3d(0, 0, 0);
  height: -webkit-fill-available;
  // opacity: 1;
  // opacity: 0.55;
  /* z-index: 9999; */
  user-select: none;
  pointer-events: none;
`

const BG = () => {
  return <StyledBG />
}
export default BG
