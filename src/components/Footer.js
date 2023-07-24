import React from 'react'
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='footer'>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="f-left">
              <h5>Md. Rasel Hossain</h5>
              <p>&copy;{year} All Right Reserved</p>
              <p className='d-flex'>
                <a href="https://www.facebook.com/profile.php?id=100014848712591&mibextid=ZbWKwL"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                <a href="https://www.linkedin.com/in/md-rasel-hossain-1867841a4/"><i class="fa fa-linkedin-square" aria-hidden="true"></i></a>
                <a href="https://github.com/Rasel66"><i class="fa fa-github" aria-hidden="true"></i></a> 
              </p>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="f-middle">
              <h5>Get in Touch</h5>
              <p>For any question feel free ask to me. I will help you as kind as possible.</p>
              <p>raselhossain5437@gmail.com</p>
              <span>+880 1721359977</span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="f-left">
              <h5><a href="http://localhost:3000/about">About</a></h5>
              <p>Resume</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
