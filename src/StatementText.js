import cxs from 'cxs/component'
import colors from './colors'
import Text from './Text'

const StatementText = cxs(Text)(props => ({
  backgroundColor: '#fffae5',
  border: '1px solid #ecc542',
  padding: props.theme.space[3],
  borderRadius: 6,
  textAlign: 'left',
  marginLeft: -props.theme.space[3],
  marginRight: -props.theme.space[3]
}))

export default StatementText
