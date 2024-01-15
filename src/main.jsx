import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './Navbar'
//import Hero from './Hero'
import Card from './Card'
import './index.css'
import data from './data'

const infoCards = data.map((item) => {
  return <Card /*card componenet*/
  key = {item.id}
  img = {item.img} 
  rating = {item.stats.rating} 
  reveiwCount = {item.stats.reviewCount} 
  location = {item.location} 
  title = {item.title} 
  price ={item.price}
  openSpots = {item.openSpots}
  />
})

 // <Hero />
function Page (){
    return (
      <div>
        <Navbar />

        <div className="layout">
      {infoCards}
      </div>
      

        
      </div>
    );
  }
  

ReactDOM.createRoot(document.getElementById('root')).render(
  <Page />
)
