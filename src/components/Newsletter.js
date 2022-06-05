import React from 'react'
import Top from './Top'

const socials = "w-10 h-10 border-2 text-sm flex-colo text-whites mx-2 border-whites rounded-full";

const Newsletter = () => {
  return (
    <div className="my-12">
      <Top title="SUBSCRIBE TO US" />
      <div className="mt-12">
        <div className="flex overflow-hidden bg-subMain border rounded border-whites">
          <input
            type="email"
            className="bg-subMain w-4/6 md:w-5/6 px-6 sm:py-5 py-3 text-whites placeholder:text-lightBlack"
            placeholder="E-mail"
          />
          <button className="w-2/6 md:w-1/6 bg-whites text font-bold text-sm rounded">
            SUBSCRIBE
          </button>
        </div>
        <p className="font-medium text-sm text-center italic text-white mt-3">
         SUBSCRIBE FOR NOTIFICATIONS ON THE DROP
        </p>
        <div className="flex-rows mt-6 pb-12">
          <a href="https://twitter.com/cartieraxis">
           <h2 className='text-white'>Made by Axis</h2>
          </a>
          
        </div>
      </div>
    </div>
  )
}

export default Newsletter