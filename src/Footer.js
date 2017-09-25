import React from 'react'
import Box from './Box'
import Bar from './Bar'
import Text from './Text'
import Link from './Link'
import data from '../data'
import colors from './colors'
import cxs from 'cxs/component'

const SourceLink = cxs(Link)({ color: colors.grey, fontSize: 14 })

const Footer = () => (
  <footer>
    <Bar />
    <Text mb={1}>
      Made by <Link href="https://lachlanjc.me" children="@lachlanjc" />, 2017.
    </Text>
    <SourceLink href={data.repo} children="&lt;Source /&gt;" />
  </footer>
)

export default Footer
