import styled from 'styled-components'

const Loader = () => (
  <LoaderWrapper>
    <LoaderCircle />
  </LoaderWrapper>
)

const LoaderWrapper = styled.span`
  position: fixed;
  height: 100vh;
  top: 0;
  left: 0;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoaderCircle = styled.span(
  ({ theme: { colors } }) => `
display: inline-block;
height: 50px;
width: 50px;
border-radius: 50px;
border: 10px solid ${colors.lightGray};
animation: rotate 0.75s infinite linear;
border-top-color: ${colors.gray};

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
`
)

export default Loader
