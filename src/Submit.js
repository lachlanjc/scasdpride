import React from 'react'
import Bar from './Bar'
import Heading from './Heading'
import Columns from './Columns'
import Column from './Column'
import Label from './Label'
import Input from './Input'
import SubmitButton from './SubmitButton'

const Submit = () => (
  <section id="submit">
    <Heading>Sign up for updates</Heading>
    <form action="https://formspree.io/smb11@scasd.org" method="POST">
      <Label>
        Name
        <Input type="text" name="name" placeholder="Your Name" />
      </Label>
      <Label>
        Email
        <Input type="email" name="email" placeholder="you@scasd.org" />
      </Label>
      <SubmitButton type="submit" />
    </form>
  </section>
)

export default Submit
