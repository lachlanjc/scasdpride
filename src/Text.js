import cxs from 'cxs/component'
import { space, width, fontSize, color } from 'styled-system'

const bold = props => (props.bold ? { fontWeight: 'bold' } : null)

const Text = cxs('p')(
  props => ({
    marginTop: props.my || props.mt || 0,
    marginBottom: props.my || props.mb || 0,
    lineHeight: '1.6'
  }),
  space,
  width,
  fontSize,
  color,
  bold
)

export default Text
