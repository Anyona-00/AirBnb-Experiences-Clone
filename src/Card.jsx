import React from "react"
import Katie from "./assets/katie.png"
import Star from "./assets/Star.png"


export default function Card(){
    return(
       <div className="card">

        
        <img src={Katie} alt="Katie image" className="katie-img"  />
        

<div className="rating">
    <img src={Star} alt="star" className="star" />
    <p>5.0</p>
    <p className="gray">(6)</p>
    <p className="gray">.USA</p>
</div>

<div className="learn">
    <p>Life lessons with Katie Zaferes</p>
    <p><span className="bold-text">From $136</span> / person</p>

</div>

       </div>
    )
}

