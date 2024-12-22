import React from 'react'
import NavBar from './components/NavBar'

const App = () => {
  return (
    <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      <NavBar />
      <div className="overflow-auto h-screen">
        {/* Your other components go here */}
      </div>
    </div>
  )
}

export default App