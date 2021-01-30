import React from 'react'

import NavBar from './header'
import Footer from './footer' 

import '../styles/index.scss'
import layoutStyles from './layout.module.scss'

const Layout = (props) => {
    return (
        <div className={ layoutStyles.container }>

            <div className={ layoutStyles.content }>
                <NavBar/>

                {props.children}
            </div>
            

            <Footer/>
        </div>
    )
}

export default Layout