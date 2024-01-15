import React from "react"
/*import Katie from "./assets/katie.png"*/
import Star from "./assets/Star.png"


export default function Card(props){
    
    return(
       <div className="card">

        
<img src={`../src/assets/${props.img}`} className="katie-img"  />

        

<div className="rating">
    <img src={Star} alt="star" className="star" />
    <p>{props.rating}</p>
    <p className="gray">({props.reveiwCount})</p>
    <p className="gray">.{props.country}</p>
</div>

<div className="learn">
    <p>{props.title}</p>
    <p><span className="bold-text">From ${props.price}</span> / person</p>

</div>

       </div>
    )
}

