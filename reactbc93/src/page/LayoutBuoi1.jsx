import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Content from '../components/LayoutBuoi1/Content'
import Navigate from '../components/LayoutBuoi1/Navigate'
import Banner from '../components/Banner'

const LayoutBuoi1 = () => {
  return (
    <div>
        {/* Header */}
        <Header/>
        {/* main */}
        <div className='d-flex'>
            {/* navigate */}
            <Navigate/>
          
            
            {/* card: 3 item */}
            <Content/>
        </div>
        {/* Footer */}
        <Footer/>
    </div>
  )
}

export default LayoutBuoi1