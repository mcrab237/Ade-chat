import React from 'react'
import "./Home.css"
import image from "./img.png"
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
function Home() {
  return (
    <div className='container'>
        <div className='main'>
            <h1 className='title'>Student Budgeting App.</h1>
            <h3 className="description">Manage your finances and start budgeting efficiently with budget me app.</h3>
            <div className='buttons'>
                <button className="color1">ACCESS APP DEMO</button>
                <button className="color2">HOW IT WORKS</button>
            </div>
        </div>
        <Section2/>

        <Section1 imageUrl={image} imageAlt="iam ato" description="This is the best description"/>
    </div>
  )
}

export default Home