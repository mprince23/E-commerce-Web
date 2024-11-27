import React from 'react'
import Header from './Components/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div>

      <ToastContainer />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />

    </div>
  )
}

export default App