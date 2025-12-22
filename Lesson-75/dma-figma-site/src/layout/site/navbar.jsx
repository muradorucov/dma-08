import React, { useState } from 'react'
import Dropdown from '../../components/site/dropdown'

function Navbar() {
  const TamirTabs = [
    {
      name: "Lorem, ipsum dolor"
    },
    {
      name: "Lorem, ipsum dolor"
    },
    {
      name: "Lorem, ipsum dolor"
    },
    {
      name: "Lorem, ipsum dolor"
    },
    {
      name: "Lorem, ipsum dolor"
    },
  ]

  const QurasdirilmaTabs = [
    {
      name: "ipsum dolor"
    },
    {
      name: "ipsum dolor"
    },
    {
      name: "ipsum dolor"
    },
    {
      name: "ipsum dolor"
    },
    {
      name: "ipsum dolor"
    },
  ]

  const LanguageTabs = [
    {
      name: "EN"
    },
    {
      name: "TR"
    },
    {
      name: "RU"
    },
  ]

  return (
    <div className='bg-linear-to-r from-[#016BAF] to-[#034A78]'>
      <div className='container flex justify-between items-center gap-8 text-white'>
        <div className='px-5 py-4'>Home</div>
        
        <Dropdown title={"Temir"} tabs={TamirTabs}/>
        <Dropdown title={"Qurasdirilma"} tabs={QurasdirilmaTabs}/>
        <div className='px-5 py-4'>Sifaris</div>
        <div className='px-5 py-4'>Catdirilma</div>
        <div className='px-5 py-4'>Zemanet</div>
        <div className='px-5 py-4'>About</div>
        <div className='px-5 py-4'>Elaqe</div>
        <Dropdown title={"AZ"} tabs={LanguageTabs}/>
      </div>
    </div>
  )
}

export default Navbar