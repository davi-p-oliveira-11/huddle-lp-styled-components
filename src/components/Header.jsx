import { StyledHeader, Nav, Logo, Image } from "./styles/Header.styled"
import { Container } from "./styles/Container.styled"
import { Flex } from "./styles/Flex.styled"
import { Button } from "./styles/Button.styled"
import  LogoImg  from "../images/logo.svg"
import  Mockup from "../images/illustration-mockups.svg"

const Header = () => {
  return (
    <StyledHeader> 
      <Container>
       <Nav>
         <Logo src={LogoImg} alt='Logo'/>
         <Button>Try it Free</Button>
       </Nav>

       <Flex>
        <div>
          <h1>
            Build The Community Your Fans Will Love
          </h1>

          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique obcaecati nihil esse nam dignissimos facilis assumenda adipisci quas ea est dolore repellendus aliquid eligendi reprehenderit, labore aperiam, amet molestiae neque officia id voluptates? Amet id totam reiciendis aliquid molestias?</p>

          <Button bg='#ff0099' color='#fff'>
            Get Started For Free
          </Button>
        </div>

        <Image src={Mockup} />
       </Flex>
      </Container>
    </StyledHeader>
  )
}

export default Header