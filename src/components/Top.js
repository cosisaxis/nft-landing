import React from 'react'

const Top = ({ title }) => {
  return (
    <div className="mb-12 flex xs:block justify-center items-center flex-col">
      <h2 className="font-bold tracking-wide text-xl text-whites">{title}</h2>
      <hr className="border-0 h-1 mt-2 w-24 bg-whites" />
    </div>
  )
}

export default Top