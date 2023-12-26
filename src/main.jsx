import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
//import Hero from './Hero'
import Card from './Card'
import './index.css'

 // <Hero />
function Page (){
    return (
      <div>
        <Navbar />
      
      

        <Card />
      </div>
    );
  }
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <Page />
)
