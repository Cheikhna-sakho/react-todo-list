import React from 'react'
import Header from './Header'

const Page = ({ children }) => {
  return (
    <div className="body">
      <div className='container page center'>
        <Header />
        {children}
      </div>
    </div>
  )
}

export default Page