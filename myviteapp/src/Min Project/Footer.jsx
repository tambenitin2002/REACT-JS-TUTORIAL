import React from 'react'
import Rfooter from './Rfooter'
import Mfooter from './Mfooter'
import Lfooter from './Lfooter'

const Footer = () => {
  return (
    <footer>
    <div id="footer">
      <div id="left">
       <Lfooter/>
      </div>
      <div id="mid">
      <Mfooter/>
      </div>
      <div id="right">
      <Rfooter/>
      </div>
    </div>
    </footer>
  )
}

export default Footer
