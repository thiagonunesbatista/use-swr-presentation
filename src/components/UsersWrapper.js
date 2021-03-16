import styled from 'styled-components'

const UsersWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  padding: 16px 8px;
  margin: 0 auto;
  max-width: 850px;
  filter: drop-shadow(0px 0px 4px rgba(0, 0, 0, 0.25));
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

export default UsersWrapper
