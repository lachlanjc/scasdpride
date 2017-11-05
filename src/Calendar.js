import React from 'react'
import cxs from 'cxs/component'
import Flex from './Flex'
import Box from './Box'

const Background = cxs(Flex)(props => ({
  flexDirection: 'column',
  flexShrink: '0',
  textAlign: 'center',
  width: 6 * 16,
  height: 6 * 16,
  borderColor: props.theme('colors.red'),
  borderStyle: 'solid',
  borderWidth: 4,
  borderTopWidth: 2,
  borderRadius: 12
}))

const Month = cxs(Box)(props => ({
  backgroundColor: props.theme('colors.red'),
  color: props.theme('colors.white'),
  fontSize: 16
}))

const Day = cxs(Box)(props => ({
  fontSize: 48,
  lineHeight: '1.25'
}))

const Calendar = ({ month, day }) => (
  <Background>
    <Month>{month}</Month>
    <Day>{day}</Day>
  </Background>
)

export default Calendar
