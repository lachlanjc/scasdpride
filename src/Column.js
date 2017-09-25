import cxs from 'cxs/component'
import Box from './Box'
import media from './media'

const Column = cxs(Box)(props => ({
  width: '100%',
  padding: props.theme.space[3],
  textAlign: 'left',
  [media[0]]: {
    width: 100 / 2 + '%'
  },
  [media[1]]: {
    width: 100 / 3 + '%'
  }
}))

export default Column
