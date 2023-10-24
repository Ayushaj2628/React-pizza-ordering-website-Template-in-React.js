import React from 'react'
import PizzaLeft from '../assets/pizzaLeft.jpg'
import '../styles/Contact.css'

function Contact() {
  return (
    <div className='contact'>
      <div className="leftSide" style={{ backgroundImage: `url(${PizzaLeft})` }}></div>
      <div className="rightSide">
        <h1>Contact US</h1>

        <form id='Contact-form' method='POST'>
            <label htmlFor="name">Full Name</label>
            <input name='name' type="text" placeholder='Enter Full name...' />
            <label htmlFor="email">Email</label>
            <input name='email' type="email" placeholder='Enter your Email' />
            <label htmlFor="message">Message</label>
            <textarea name="message" id="" cols="30" rows="10" required></textarea>
            <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact

