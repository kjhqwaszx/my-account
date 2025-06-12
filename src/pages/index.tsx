import newStyled from '@emotion/styled'
import { css } from '@emotion/react'

export default function Home() {
  return (
    <Container>
      <div css={bold}>hello</div>
    </Container>
  )
}

const Container = newStyled.div`
  background-color: pink;
`
const bold = css`
  font-weight: bold;
`
