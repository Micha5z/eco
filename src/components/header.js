import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { useMediaQuery } from '@react-hook/media-query'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Menu from './menu'
import Logo from '../images/Logo.png'
import LogoMobile from '../images/LogoMobile.png'
import MenuIcon from '../images/menu.inline.svg'
import CloseIcon from '../images/x.inline.svg'
import { Sun, Moon, Facebook, Instagram } from 'react-feather'
import { useDarkMode } from '../contexts/Application'
import useDocumentScrollThrottled from '../utils/useDocumentScrollThrottled'


import EuroSignBlack from '../images/Europe.svg'
import EuroSignWhite from '../images/Europewhite.svg'


const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 1rem 1.25rem;
  width: 100%;
  z-index: 30;
  position: sticky;
  top: -1px;
  background: ${({ theme, open, showBG }) => (showBG && !open ? theme.backgroundColor : 'none')};
  border-bottom: 1px solid ${({ theme, open, showBG }) => (showBG && !open ? theme.concreteGray : 'none')};
  transition: background-color 0.25s ease;

  @media (max-width: 960px) {
    padding: 1rem 1.25rem;
    // height: ${({ open }) => (open ? '100vh' : '100%')};
  }
`

const StyledNav = styled.nav`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  transition: right 0.25s ease;
  @media (max-width: 960px) {
    position: fixed;
    top: 0px;
    right: ${({ open }) => (open ? '0px' : '-100%')};
    align-items: flex-start;
    flex-wrap: wrap;
    -webkit-overflow-scrolling: touch;
    background-color: ${({ theme }) => theme.colors.grey1};
    width: 100%;
    height: 100%;
    z-index: 999;
    padding: 4rem;
    overflow: auto;
    box-shadow: ${({ theme }) => theme.shadows.huge};
  }
  > * + * {
    margin-left: 24px;
  }
  @media (max-width: 960px) {
    > * + * {
      margin-left: 0;
    }
  }
`

const StyledNavTitleWrapper = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  
`


const StyledButton2 = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  path {
    fill: ${({ theme, open, showBG }) => (showBG && !open ? theme.textColor : 'white')};
  }
  color: ${({ theme, open, showBG }) => (showBG && !open ? theme.textColor : 'white')};
  
  :focus {
    outline: none;
  }
  display: none;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
  }

  @media (max-width: 960px) {
    display: flex;
    path {
      fill: ${({ theme }) => (theme.textColor)};
    }
    color: ${({ theme }) => (theme.textColor)};  
  }
  margin-right:10px;
`

const StyledButton = styled.button`
  border: none;
  background-color: rgba(0, 0, 0, 0);
  path {
    fill: ${({ theme }) => (theme.textColor)};
  }
  color: ${({ theme }) => (theme.textColor)};
  
  :focus {
    outline: none;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }

  @media (max-width: 960px) {
    path {
      fill: ${({ theme }) => (theme.textColor)};
    }
    color: ${({ theme }) => (theme.textColor)};  
  }
`


const StyledHomeLink = styled(Link)`
  max-height: 48px;
  display: flex;
  align-items: center;
  color: re
`

const MenuToggle = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.grey9};
  display: none;
  z-index: 9999;
  width: 24px;
  height: 24px;
  padding: 0px;
  :focus {
    outline: none;
  }
  @media (max-width: 960px) {
    display: initial;
    position: ${({ open }) => (open ? 'fixed' : 'relative')};
    right: ${({ open }) => (open ? '1.5rem' : 'initial')};
    top: ${({ open }) => (open ? '1.5rem' : 'initial')};
  }
`
const StyledFooterLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.whiteBlack};
  :hover {
    color: ${({ theme }) => theme.colors.whiteBlack};
    cursor: pointer;
    opacity: 0.7;
  }
  @media (max-width: 940px) {
    align-items: normal;
    justify-content: none;
    }
`

const StyledCloseIcon = styled(CloseIcon)`
  path {
    stroke: ${({ theme }) => theme.textColor};
  }
`

const StyledMenuIcon = styled(MenuIcon)`
  path {
    stroke: ${({ theme }) => theme.textColor};
  }
`

const Header = () => {
  const matches = useMediaQuery('only screen and (max-width: 1024px)')
  const node = useRef()
  const button = useRef()
  const [isMenuOpen, updateIsMenuOpen] = useState(false)
  const [darkMode, toggleDarkMode] = useDarkMode()
  const EuroSign = darkMode ? EuroSignWhite : EuroSignBlack

  const [headerBG, setHeaderBG] = useState(false)
  const isMobile = useMediaQuery( 'maxWidth: 700px');

  useDocumentScrollThrottled(callbackData => {
    const { currentScrollTop } = callbackData
    setHeaderBG(currentScrollTop > 2)
  })

  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          menulinks {
            name
            sublinks {
              name
              link
            }
          }
          title
        }
      }
    }
  `)

  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
      document.body.style.maxHeight = '-webkit-fill-available'
    }
    return () => (document.body.style.overflow = originalStyle)
  }, [isMenuOpen])

  useEffect(() => {
    const handleClickOutside = e => {
      if (node.current.contains(e.target) || button.current.contains(e.target)) {
        return
      }
      updateIsMenuOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isMenuOpen, updateIsMenuOpen, matches])

  return (
    <StyledHeader open={isMenuOpen} showBG={headerBG}>
      <StyledNavTitleWrapper>
        <StyledHomeLink to="/"
          style={{
            textDecoration: `none`
          }}>
          <img
            alt='logo'
            className='myLogo'
            src={isMobile ? LogoMobile : Logo}
          />
        </StyledHomeLink>
      </StyledNavTitleWrapper>

      <StyledButton2 target="_blank"
          href="https://facebook.pl">
          {<Facebook size={20}/>}
        </StyledButton2>

        <StyledButton2 target="_blank" open={isMenuOpen} showBG={headerBG}
          href="https://instagram.pl">
          {<Instagram size={20}/>}
        </StyledButton2>

      <MenuToggle ref={button} open={isMenuOpen} onClick={() => updateIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <StyledCloseIcon /> : <StyledMenuIcon />}
      </MenuToggle>
      
      <StyledNav ref={node} open={isMenuOpen}>
        {data.site.siteMetadata.menulinks.map(item => {
          return <Menu key={item.name} data={item} />
        })}
      <StyledFooterLink to="https://sniadanioteka.pl/sites/default/files/fundusze_unijne_.pdf">            
                    <img
            alt='euro'
            src={EuroSign}
            className='europeSignTop'
          />
          <div style={{}}>
          Projekt UE
            </div>
          </StyledFooterLink>

          <StyledButton target="_blank" open={isMenuOpen} showBG={headerBG}
          href="https://facebook.pl">
          {<Facebook size={20}/>}
        </StyledButton>
        <StyledButton target="_blank" open={isMenuOpen} showBG={headerBG}
          href="https://instagram.pl">
          {<Instagram size={20}/>}
        </StyledButton>

        

        <StyledButton type="button" open={isMenuOpen} showBG={headerBG} onClick={toggleDarkMode}>
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </StyledButton>
      </StyledNav>
    </StyledHeader>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string
}

Header.defaultProps = {
  siteTitle: ``
}

export default Header
