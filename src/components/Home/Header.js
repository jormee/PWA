import React from 'react';

const Header = () => {

  return(

    <header className="header">
      <div className="container row">

        <div className="col s12 m4 l4 push-l8 push-m8">
          <lottie-player 
            src="https://assets7.lottiefiles.com/packages/lf20_HjK9Ol.json" className="right" background="transparent"  speed="0.5"   loop  autoplay >
          </lottie-player>
        </div>
        <div className="col s12 m8 l8 pull-l4 pull-m4">
          <h1 className="title">Hi There!</h1>
          <p className="white-text text flow-text">I'm Folajomi, It's a pleasure to have you <span role="img" aria-label="smiling face" className="emoji">&#128513;</span></p>
        </div>

      </div>
    </header>
  )
}

export default Header;