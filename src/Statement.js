import React from 'react'
import Bar from './Bar'
import Heading from './Heading'
import StatementText from './StatementText'
import data from '../data'

const Statement = () => (
  <section>
    <Bar />
    <Heading>Mission statement</Heading>
    <StatementText my={3} children={data.statement} />
  </section>
)

export default Statement
