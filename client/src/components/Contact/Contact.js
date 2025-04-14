import React from 'react'
import "./Contact.scss"
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';

function Contact() {
  return (
    <div className='contact'>
        <div className="quote">
            <h3>Be Ready To Explore With us : <ConnectWithoutContactIcon/> </h3>
        </div>
        <div className="search">
            <div className="searchBar">
                <input type=""  placeholder='Enter Your mail'/>
                <button>Join</button>
            </div>
        </div>
        <div className="icons">
            <InstagramIcon/>
            <FacebookIcon/>
            <MailIcon/>
            <WhatsAppIcon/>

        </div>
    </div>
  )
}

export default Contact