import React from 'react';

const Footer = () => {
  return (
    <footer className="page-footer footer black" id="contact">
      <div className="container footer-flex">

        <div className="icons">
          <div className="socials">
            <a href="https://twitter.com/folajomi__" target="_blank" rel="noopener noreferrer" className="social-icons"><i className="fab fa-twitter"></i></a>
          </div>
          <div className="socials"> 
            <a href="mailto:folajor.mee@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icons"><i className="fas fa-envelope"></i></a>
          </div>
          <div className="socials">
            <a href="https://github.com/jormee" target="_blank" rel="noopener noreferrer" className="social-icons"><i className="fab fa-github"></i></a>
          </div>
          <div className="socials">
            <a href="https://wa.me/2348142352165" target="_blank" rel="noopener noreferrer" className="social-icons"><i className="fab fa-whatsapp"></i></a>
          </div>
        </div>

        <p className="center">&copy;{new Date().getFullYear()}</p>

      </div>
    </footer>
  )
}

export default Footer; 