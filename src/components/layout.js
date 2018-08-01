import React from 'react'
import {Flex, Provider} from 'rebass'
import {injectGlobal} from 'styled-components'

injectGlobal`
  html, body { margin: 0 }
`

export default ({children}) => <Provider>
  <Wrapper bg='black' color='white' alignItems='center' justifyContent='center'>{children}</Wrapper>
</Provider>

const Wrapper = Flex.extend`
  min-height: 100vh;
`