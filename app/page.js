
import React from 'react'
import Banner from './components/Banner'
import SearchForm from './components/SearchForm'
import DataGrid from './components/DataGrid'

export default function Home() {
  return (
    <div className='bg-black text-white lg:px-[100px] ' >

      {/* banner  */}
      <Banner />

      {/* search form */}
      <SearchForm />

      {/* data grid */}
      <DataGrid />
    </div>
  )
}
