import './App.css'
import { useState } from 'react'

import {Route, Routes} from 'react-router-dom'
import Home from './pages/home/home'
import Landing from './pages/landing/landing'
import Detail from './pages/detail/detail'
import Create from './pages/create/form'

function App() {





  return (
    <div>
      <Routes>
      <Route exact path='/drivers' Component={Home}/>
      <Route exact path='/' Component={Landing}/>
      <Route path='/drivers/:id' Component={Detail}/>
      <Route path='/create' Component={Create}/>
      </Routes>
    </div>
  )
}
export default App
