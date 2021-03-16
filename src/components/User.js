import styled from 'styled-components'

const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  flex-direction: column;
  background: ${({ theme }) => theme.colors.lightGray};
  border-radius: 8px;
  margin: 8px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  filter: drop-shadow(0px 0px 4px ${({ theme }) => theme.colors.primary});
  perspective: 1000px;

  img {
    border-radius: 50%;
    width: 150px;
  }
`

export default User
