import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => (
  <StyledNavbar>
    <ul>
      <li>
        <StyledLink to='/'>useSWR</StyledLink>
        <StyledLink to='/list-users-use-effect'>useEffect</StyledLink>
      </li>
    </ul>
  </StyledNavbar>
)

const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 8px 16px;
  font-weight: 700;
  font-size: 18px;
  background-color: ${({ theme }) => theme.colors.primary};

  &:hover {
    filter: brightness(0.8);
  }
`

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.lightGray};
  height: 50px;

  & > ul,
  & > ul > li {
    height: 100%;
  }
`

export default Navbar
