import cxs from 'cxs/component'
import Box from './Box'
import media from './media'

const Bar = cxs(Box)(props => ({
  width: 128,
  height: 4,
  backgroundImage: 'linear-gradient(to right, #D3555C, #D3555C 16%, #F48D3A 16%, #F48D3A 32%, #FDC753 32%, #FDC753 50%, #70BC53 50%, #70BC53 66%, #249CD5 66%, #249CD5 82%, #9D61A4 82%, #9D61A4 100%)',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: props.theme.space[4],
  marginBottom: props.theme.space[4]
}))

export default Bar
