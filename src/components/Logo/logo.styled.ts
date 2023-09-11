import styled from 'styled-components'

interface LogoTypeStyled {
  color: '1' | '2'
  width: number
}

export const LogoStyled = styled.div<LogoTypeStyled>`
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.width + 'px'};

  & .icon {
    height: 100%;
    width: 100%;
    color: ${(props) =>
      props.color === '1'
        ? `${props.theme.colors.orange}`
        : `${props.theme.colors.white}`};
  }

  @media (max-height: 670px) {
    width: ${(props) => props.width - 20 + 'px'};
    height: ${(props) => props.width - 20 + 'px'};
  }
  @media (max-width: 370px) {
    width: ${(props) => props.width - 20 + 'px'};
    height: ${(props) => props.width - 20 + 'px'};
  }
`
