import React from 'react'
import cxs from 'cxs/component'

const EmailButton = cxs('a')(props => ({
  display: 'inline-block',
  color: props.theme('colors.white'),
  backgroundColor: props.theme('colors.orange'),
  borderRadius: 4,
  boxShadow: '0 0 8px rgba(0, 0, 0, .25)',
  lineHeight: '1.5',
  textDecoration: 'none',
  paddingTop: props.theme.space[1],
  paddingBottom: props.theme.space[1],
  paddingLeft: props.theme.space[3],
  paddingRight: props.theme.space[3]
}))

export default EmailButton
