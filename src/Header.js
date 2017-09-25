import React from 'react'
import Title from './Title'
import Description from './Description'
import Box from './Box'
import Text from './Text'
import Flex from './Flex'
import Calendar from './Calendar'
import EmailButton from './EmailButton'
import Bar from './Bar'
import data from '../data'
import cxs from 'cxs/component'
import media from './media'

const Left = cxs(Box)({ textAlign: 'left' })
const Logo = cxs('img')({
  maxWidth: 144 * 0.75,
  [media[0]]: {
    maxWidth: 144
  }
})

const Header = () => (
  <header>
    <Logo src="img/Circle.png" />
    <Title>{data.name}</Title>
    <Description>{data.description} All are welcome!</Description>
    <Flex justify="center" align="center" mt={4}>
      <Calendar month="October" day={11} />
      <Left ml={[3, 4]}>
        <Text f={3} bold style={{ lineHeight: '1.25' }}>
          Next meeting
        </Text>
        <Text mb={2}>68N, 3:30–4:30pm</Text>
        <EmailButton href="mailto:smb11@scasd.org" children="Questions?" />
      </Left>
    </Flex>
    <Bar center />
  </header>
)

export default Header
