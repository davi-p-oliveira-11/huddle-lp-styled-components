import { FaTwitter, FaFacebook, FaLinkedin} from 'react-icons/fa'
import { StyledSocialIcons } from './styles/SocialIcons.styled'

const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href="https://x.com">
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href="https://x.com">
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href="https://x.com">
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  )
}

export default SocialIcons