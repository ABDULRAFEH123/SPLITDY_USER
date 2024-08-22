import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import TermsofUse from '@/components/webinformation/TermsofUse'
import React from 'react'

export default function page() {
  return (
    <div className='overflow-hidden'>
        <Header/>
      <TermsofUse/>
      <Footer/>
    </div>
  )
}
