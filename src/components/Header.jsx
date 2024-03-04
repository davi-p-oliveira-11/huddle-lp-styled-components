import { StyledHeader } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"


const Header = () => {
  return (
    <StyledHeader> 
      <Container>
       <Nav>
         <Logo src='./images/logo.svg' />
         <Button>Try it Free</Button>
       </Nav>
      </Container>
    </StyledHeader>
  )
}

export default Header