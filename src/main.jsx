import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
import Hero from './Hero'
import './index.css'


function Page (){
    return (
      <div>
        <Navbar />
        <Hero />
      </div>
    );
  }
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <Page />
)
