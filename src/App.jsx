import React from 'react'
import Signin from './Components/Signin/Signin'
import { Route, Routes } from 'react-router-dom'
import RepoDoc from './Pages/RepoDoc'



const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Signin/>}/>
        <Route path='/repo-doc' element={<RepoDoc/>}/>
      </Routes>
    </>
  )
}

export default App
