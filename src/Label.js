import React from 'react'
import cxs from 'cxs/component'
import reset from './reset'

const Label = cxs('label')(reset, props => ({
  lineHeight: '1.5',
  textAlign: 'left',
  marginBottom: props.theme.space[3]
}))

export default Label
