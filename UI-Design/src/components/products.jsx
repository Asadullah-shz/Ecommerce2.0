import React from 'react'
import Head from './products/head.jsx'
import Salebanner from './products/salebanner.jsx'
import Items from './products/items.jsx'


const products = () => {
  return (
    <div>
        <Head />    
        <Salebanner />   
        <Items />
    </div>
  )
}

export default products