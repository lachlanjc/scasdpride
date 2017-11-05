import React from 'react'
import Box from './Box'
import cxs from 'cxs/component'

const Container = cxs(Box)(props => ({
  backgroundColor: '#fff',
  borderRadius: 8,
  boxShadow: '0 0 1rem .25rem rgba(0,0,0,.125)',
  maxWidth: 16 * 32,
  padding: props.theme.space[4],
  marginLeft: 'auto',
  marginRight: 'auto',
  textAlign: 'center'
}))

export default Container
