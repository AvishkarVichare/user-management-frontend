import React from 'react'
import Home from './Pages/Home'
import  { Toaster } from 'react-hot-toast';

const App = () => {
  return (

    <>
    <Toaster position='top-right'/>
    <Home/>
    </>
    )
}

export default App