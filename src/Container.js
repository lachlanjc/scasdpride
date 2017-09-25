import React from 'react'
import Box from './Box'
import cxs from 'cxs/component'

const Container = cxs(Box)(props => ({
  maxWidth: 16 * 32,
  padding: props.theme.space[4],
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center'
}))

export default Container
