import Analytics from '@/components/Analytics';
import Benefit from '@/components/Benefit';
import Header from '@/components/Header';
import Iconify from '@/components/Iconify';
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing';
import React from 'react'

const Logoipsum = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Iconify />
      <Benefit />
      <Analytics />
      <Pricing />
    </div>
  )
}

export default Logoipsum;