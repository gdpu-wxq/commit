import React from 'react'
import { BrowserRouter as Route } from 'react-router-dom'
import Login from './pages/loginPage.js'
import UserInfoPage from './pages/UserInfoPage'
import './App.css'

function App() {
  return (
    <div className='App'>
      <Route exact path='/' component={Login} />
      <Route path='/UserInfoPage' component={UserInfoPage} />
    </div>
  )
}

export default App
