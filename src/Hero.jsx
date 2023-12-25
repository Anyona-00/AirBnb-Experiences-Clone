import React from "react"
import Experience from "./assets/AirBnb Experiences.png"

export default function Hero(){
    return(
       <div className="hero">
        <img src={Experience} alt="Experience" className="experience" />
        <div className="hero-text">
        <h1>Online Experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
</p>
</div>
       </div>
    )
}

