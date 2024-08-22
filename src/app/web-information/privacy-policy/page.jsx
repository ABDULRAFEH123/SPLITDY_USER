import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import PrivacyPolicy from '@/components/webinformation/PrivacyPolicy'
import React from 'react'

export default function page() {
  return (
    <div className='overflow-hidden'>
        <Header/>

      <PrivacyPolicy/>
      <Footer/>
    </div>
  )
}
