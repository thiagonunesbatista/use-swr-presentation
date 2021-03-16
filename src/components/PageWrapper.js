import styled from 'styled-components'

const PageWrapper = ({ children }) => (
  <StyledPageWrapper>{children}</StyledPageWrapper>
)

const StyledPageWrapper = styled.div`
  padding: 32px 16px;
`

export default PageWrapper
