import React from 'react'
import Hearder from '../Header/Hearder'
import Footer from '../Footer/Footer'
import Routers from '../../router/Router'
// import { Router } from 'react-router-dom'

const Layout = () => {
  return (
    <>
        <Hearder />
        <div>
            <Routers />    
        </div>
        <Footer />

    </>
  )
}

export default Layout