import React from 'react'
import './App.css'
import { NavLink } from 'react-router-dom'

import RouterView from './router/RouterView'

import Header from './pages/layout/Header'

/**
 * app 组件
 *
 * @returns {React.FC} App 组件
 */
function App() {
  return (
    <div className="App">
      <Header />

      <section className="router-links">
        <NavLink className="router-link" to="/home">
          Home
        </NavLink>
        <NavLink className="router-link" to="/about">
          About
        </NavLink>
        <NavLink className="router-link" to="/form">
          Form
        </NavLink>
        <NavLink className="router-link" to="/useMemo">
          useMemo
        </NavLink>
      </section>

      {<RouterView />}
    </div>
  )
}

export default App
