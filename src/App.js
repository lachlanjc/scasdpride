import React from 'react'
import ThemeProvider from 'cxs/ThemeProvider'
import theme from './theme'

import Container from './Container'
import Header from './Header'
import Submit from './Submit'
import Statement from './Statement'
import Footer from './Footer'

const App = props => (
  <ThemeProvider theme={theme}>
    <Container>
      <Header />
      <Submit />
      <Statement />
      <Footer />
    </Container>
  </ThemeProvider>
)

export default App
