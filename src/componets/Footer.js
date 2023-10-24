import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import'../styles/Footer.css'

function Footer() {
  return (
    <div className='footer'>
         <div className='socialMedia'>
            <InstagramIcon/>
            <WhatsAppIcon/>
            <FacebookIcon/>
            <GoogleIcon/>
            </div>
         <p>&copy; 2023 ayushjain.com</p>
    </div>
  )
}

export default Footer
