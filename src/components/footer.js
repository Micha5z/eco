import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Github from '../images/github.inline.svg'
import EuroSignBlack from '../images/Europe.svg'
import EuroSignWhite from '../images/Europewhite.svg'
import SniadaniotekaSignBlack from '../images/sniadaniotekablack.svg'
import SniadaniotekaSignWhite from '../images/sniadaniotekawhite.svg'


import { useDarkMode } from '../contexts/Application'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blackWhite};
  color: ${({ theme }) => theme.colors.whiteBlack};
  position: relative;
  padding: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.whiteBlack};

  @media (max-width: 960px) {
    padding: 1.1rem;
    text-align: center;
    
  }
  @media (max-width: 340px){
    font-size: 12px;
  }
`

const StyledFooterLinkSection = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  justify-content: space-between;
  width: 100%;
  padding-left: 0rem;
}

`

const StyledFooterSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
`

const StyledFooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.whiteBlack};
  :hover {
    color: ${({ theme }) => theme.colors.whiteBlack};
    cursor: pointer;
    opacity: 0.7;
  }
`

const StyledGithub = styled(Github)`
  path {
    fill: ${({ theme }) => theme.textColor};
  }
  width: 32px;
  height: 32px;
`

const Footer = () => {
  const [darkMode, toggleDarkMode] = useDarkMode()
  const EuroSign = darkMode ? EuroSignWhite : EuroSignBlack
  const SniadaniotekaSign = darkMode ? SniadaniotekaSignWhite : SniadaniotekaSignBlack
  return (
    <StyledFooter>
      <StyledFooterLinkSection>
        <StyledFooterSection>
          <p style={{ margin: 0, marginRight: 16 }}>© {new Date().getFullYear()} Eko Zakątek</p>
          <StyledFooterLink to="/privacy">
            <p style={{ margin: 0, marginRight: 16 }} >Polityka prywatności</p>
          </StyledFooterLink>
          <StyledFooterLink to="https://sniadanioteka.pl/sites/default/files/fundusze_unijne_.pdf">
                    
                    <img
            alt='euro'
            src={EuroSign}
            className='europeSign'
            style={{
              width: 30,
              height:30,
              fill: darkMode ? 'white' : 'black',
            }}
          />
          <div style={{ float: 'right', paddingTop: 3 }}>
          Projekt UE
            </div>
          
          </StyledFooterLink>
          
        </StyledFooterSection>
        <StyledFooterLink to="https://sniadanioteka.pl" style={{float:'right'}}>
          <img
            alt='sniadaniotekaLogo'
            src={SniadaniotekaSign}
            className='europeSign'
            style={{
              marginLeft: 10,
              width: 55,
              height: 55,
              fill: darkMode ? 'white' : 'black',
            }}
          />  
          </StyledFooterLink>
      </StyledFooterLinkSection>
    </StyledFooter>
  )
}

export default Footer
