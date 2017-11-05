require('babel-register')
const fs = require('fs')
const path = require('path')
const { renderToStaticMarkup } = require('react-dom/server')
const h = require('react').createElement
const cxs = require('cxs')
const data = require('./data')
const colors = require('./src/colors')
const App = require('./src/App').default

const cx = cxs({
  backgroundImage: 'linear-gradient(105deg, #D3555C, #D3555C 16%, #F48D3A 16%, #F48D3A 32%, #FDC753 32%, #FDC753 48%, #70BC53 48%, #70BC53 64%, #249CD5 64%, #249CD5 80%, #9D61A4 80%, #9D61A4 100%)',
  color: colors.black,
  fontFamily: '"Fakt Soft", Avenir, Roboto, "Segoe UI", "Helvetica Neue", sans-serif',
  lineHeight: '1.5',
  paddingTop: 32,
  paddingBottom: 32
})

const body = renderToStaticMarkup(h(App))
const css = cxs.css()

const template = ({ body, id, css }) => `<!DOCTYPE html>
<title>${data.name}</title>
<meta charset='utf-8'>
<meta name='twitter:card' content='summary_large_image'>
<meta name='twitter:image' content='${data.card}'>
<meta name='og:image' content='${data.card}'>
<meta name='og:title' content='${data.name}'>
<meta name='twitter:title' content='${data.name}'>
<meta name='og:description' content='${data.description}'>
<meta name='twitter:description' content='${data.description}'>
<meta name='description' content='${data.description}'>
<meta name='viewport' content='width=device-width, initial-scale=1'>
<meta name='theme-color' content='${colors.blue}'>
<style>*{box-sizing:border-box}body{margin:0}${css}</style>
<link rel='stylesheet' href='fonts.css'>
<body class='${cx}'>
<div id='${id}'>
${body}
</div>
</body>
`

const html = template({ body, css, id: 'app' })

const filename = path.join(__dirname, './index.html')
fs.writeFileSync(filename, html)
