import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import FAQ from '@/components/webinformation/FAQ'
import React from 'react'

export default function page() {
  return (
    <div className='overflow-hidden'>
      <Header/>
      <FAQ/>
      <Footer/>
    </div>
  )
}
