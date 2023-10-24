import React from 'react'
import '../styles/About.css'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'

function About() {
  return (
    <div className='about'>
        <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePizzas})` }}>
          
        </div>
        <div className="aboutBottom">
            <h1>ABOUT US</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores, perspiciatis nisi quam atque natus nulla nemo commodi cumque quisquam modi, dolore, fugiat illum eveniet ipsa odio dolor itaque. Dicta consectetur, aspernatur porro accusantium nam in! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, eaque. Nam ea dolorum aliquam quia nemo sint, animi voluptate voluptas!</p>
        </div>
      
    </div>
  )
}

export default About