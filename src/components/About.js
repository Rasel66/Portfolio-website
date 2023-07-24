import React from 'react'
import Button from 'react-bootstrap/Button';

const About = () => {
  const info = {
    fontSize: '18px',
    textAlign: 'justify',
    width: '500px'
  };
  const img_style = {
    borderRadius: '5px',
    maxWidth: '100%',
  }
  return (
    <div>
      <div className="container middle mt-5">
        <div className="row">
          <div className="col-lg-6">
            <div className="home-left mt-5">
              <h2>Meet to <span style={{ color: "#0B5ED7" }}>Md. Rasel Hossain</span></h2>
              <p style={info}>"Hello, my name is <b><i>Md. Rasel Hossain</i></b>. I am a computer engineer with a passion for technology and problem-solving. I specialize in designing and developing software solutions to tackle complex challenges. With a strong foundation in computer science and engineering principles, I have acquired expertise in various programming languages, frameworks, and tools."</p>
              <div className="btnn">
                <Button variant="primary" style={{ marginRight: '10px' }} href='http://localhost:3000/contact'>Hire Me</Button>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="home-right">
              <img style={img_style} src="undraw.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About