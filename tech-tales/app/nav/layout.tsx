import './globals.css'
import NavBar from './nav'

import React from 'react'

function Layout( {children,
}: {
  children: React.ReactNode
}) {
  return (
    <div><NavBar/></div>
  )
}

export default Layout