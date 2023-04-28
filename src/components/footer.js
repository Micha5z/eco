import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Github from '../images/github.inline.svg'
import { useDarkMode } from '../contexts/Application'

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blackWhite};
  color: ${({ theme }) => theme.colors.whiteBlack};
  position: relative;
  padding: 2rem;

  @media (max-width: 960px) {
    padding: 1rem;
  }
`

const StyledFooterLinkSection = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  justify-content: space-between;
  width: 100%;
  // color: ${({ theme }) => theme.colors.whiteBlack};
  // color: black;

`

const StyledFooterSection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0;
  
`

const StyledFooterLink = styled(Link)`
  color: ${({ theme }) => theme.colors.whiteBlack};
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
            className='europeSign'
            src='https://upload.wikimedia.org/wikipedia/commons/f/f8/Stars_of_the_European_Union_%28bw%29.svg'
            style={{
              width: 30,
              fill: darkMode ? 'white' : 'black',
            }}
          />
          <div style={{ float: 'right', paddingTop: 3 }}>
          Projekt UE
            </div>
          
          </StyledFooterLink>
        </StyledFooterSection>

        {/* <a style={{ marginLeft: 16 }} href="https://github.com/web2app-app" rel="noopener noreferrer" target="_blank">
          https://upload.wikimedia.org/wikipedia/commons/f/f8/Stars_of_the_European_Union_%28bw%29.svg
        </a> */}
      </StyledFooterLinkSection>
    </StyledFooter>
  )
}

export default Footer
