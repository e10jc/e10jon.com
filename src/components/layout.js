import React from 'react'
import {Flex, Provider} from 'rebass'
import {injectGlobal} from 'styled-components'

injectGlobal`
  html, body { margin: 0 }
`

const Layout = ({children, data}) => {
  const Wrapper = Flex.extend`
    background-image: url(${data.fluid.src});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;
  `

  return <Provider>
    <Wrapper color='white' alignItems='center' justifyContent='center'>{children}</Wrapper>
  </Provider>
}

export default Layout