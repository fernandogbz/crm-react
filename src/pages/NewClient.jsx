import React from 'react'

function NewClient() {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">New Client</h1>
      <p className="mt-3">Complete this form to register a new client</p>

      <div className='flex justify-end'>
        <button
        className='bg-blue-800 text-white px-3 py-1 font bold uppercase'
        >
          Back
        </button>
      </div>
    </>
  )
}

export default NewClient