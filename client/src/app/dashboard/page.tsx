// import React from 'react'

// type Props = {}

"use client"

import CardPopularProducts from "./CardPopularProducts"

const Dashboard = (/* props: Props */) => {
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows">
      {/* <div className="row-span-3 xl:row-span-6 bg-gray-500" /> */}
      <CardPopularProducts />
      <div className="row-span-3 xl:row-span-6 bg-gray-500" />
      <div className="row-span-2 xl:row-span-3 col-span-1 md:col-span-2 xl:col-span-1 bg-gray-500" />
      <div className="row-span-3 bg-gray-500" />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
      <div className="md:row-span-1 xl:row-span-2 bg-gray-500" />
    </div>
  )
}

export default Dashboard