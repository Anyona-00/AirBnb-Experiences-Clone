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
      
      

        <Card
        img = "katie.png"
        rating = {5.0}
        reveiwCount = {6}
        Country = "USA"
        title = "Life Lessons with katie zaferes"
        price = "136"
        />
      </div>
    );
  }
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <Page />
)
