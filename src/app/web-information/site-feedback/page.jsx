import Footer from '@/components/common/Footer'
import Header from '@/components/common/Header'
import HeroSectionWebInfo from '@/components/webinformation/HeroSectionWebInfo'
import WebInformationGrid from '@/components/webinformation/WebInformationGrid'
import React from 'react'

export default function page() {
  return (
    <div className='flex flex-col overflow-hidden'>
      <Header/>
      <HeroSectionWebInfo title={"Site Feedback"}/>
      <WebInformationGrid/>
      <Footer/>
    </div>
  )
}
