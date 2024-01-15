import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
//import Hero from './Hero'
import Card from './Card'
import './index.css'
import data from './data'

const info = data.map((card) => {
  return <Card img = {card.img} rating = {card.rating} reveiwCount = {card.reviewCount} location = {card.location} title = {card.title} price ={card.price}/>
})

 // <Hero />
function Page (){
    return (
      <div>
        <Navbar />
      {info}
      

        
      </div>
    );
  }
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <Page />
)
