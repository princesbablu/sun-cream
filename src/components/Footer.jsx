import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Social from './Social'
import footerImg from '../assets/img/footer-carton.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="footer">
      <Container>
      <div className="footer-wrap d-flex flex-column align-items-center justify-content-center">
        <img src={footerImg} alt="" />
        <div className="footer-social pt-4 mt-2">
            <Social />
        </div>
        <div className="footer-content text-center pt-4 mt-2">
          <p className='footer-text'>Disclaimer: The "suncream." token is for entertainment and memes only, with no intrinsic value or financial backing. It is not affiliated with Caprisun juice company. No Caprisuns were harmed in the making of this website.</p>
        </div>
        <div className="footer-copyright text-center">
          <p className='footer-text pt-4 mt-2'>© {currentYear} by suncream. All rights reserved!</p>
        </div>
      </div>
      </Container>
    </div>
  )
}
