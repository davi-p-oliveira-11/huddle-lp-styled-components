import { StyledHeader, Nav, Logo } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import { Button } from "./styles/Button.styled"
import  LogoImg  from "../images/logo.svg"

const Header = () => {
  return (
    <StyledHeader> 
      <Container>
       <Nav>
         <Logo src={LogoImg} alt='Logo'/>
         <Button>Try it Free</Button>
       </Nav>
      </Container>
    </StyledHeader>
  )
}

export default Header