import cxs from 'cxs/component'
import colors from './colors'
import Text from './Text'

const StatementText = cxs(Text)(props => ({
  backgroundColor: colors.snow,
  padding: props.theme.space[3],
  borderRadius: 8,
  fontStyle: 'italic',
  lineHeight: '1.5',
  textAlign: 'left',
  marginLeft: -props.theme.space[3],
  marginRight: -props.theme.space[3]
}))

export default StatementText
