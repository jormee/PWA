import React, { useContext } from 'react';

import { ThemeContext } from '../../contexts/ThemeContext'

const About = () => {

  const { theme } = useContext(ThemeContext);

  return(
    <div id="about" className='body' style={{backgroundColor: theme.bg, color: theme.color}}>
      <div className="container" >
        <h2 className="title" style={{color: theme.title}}>About</h2>
        <div className="row story">
          <div className="summary col s12 m8 l8">
            <p>Hi there, I'm <strong>Folajomi Shotunde</strong></p>
            <p>A front-end web developer from Lagos, Nigeria.</p>
            <p>Over the past few years, I have picked up and honed my skills in a few web technologies - HTML, CSS, React, NodeJS, APIs, ExpressJS, Bootstrap, git. I use Heroku and Netlify as deployment tools and manage my applications on <a href="https://github.com/jormee">github.</a></p>
            <p>As a Project Management graduate, I am always on the lookout for design patterns and UIs that will captivate and at the same time be accessible to all clients.</p>
            <p>Whenever I am not developing web applications, I am either developing technical content for my <a href="https://jormee.hashnode.dev">blog</a> or reading an article</p>
            <p>I also trade cryptocurrencies as a hobby!</p>
          </div>
          <div className="col m4 l4 hide-on-small-only">
            <lottie-player 
              src="https://assets10.lottiefiles.com/packages/lf20_1LhsaB.json"  background="rgba(2, 2, 2, 0)"  speed="0.5"  style={{width: "300px", height: "300px"}}  loop  autoplay >
            </lottie-player>
          </div>
        </div>

        <div id="stack">
          <h3 className="title" style={{color: theme.title}}>My stack</h3>
          <div className="row">
            <div className="center col s6 m4 l3">
              <i className="fab fa-react stack"></i>
              <p>React</p>
            </div>
            <div className="center col s6 m4 l3">
              <i className="fab fa-node stack"></i>
              <p>Node</p>
            </div>
            <div className="center col s6 m4 l3">
              <i className="fab fa-css3-alt stack"></i>
              <p>CSS3</p>
            </div>
            <div className="center col s6 m4 l3">
              <span className="iconify stack" data-icon="logos:javascript" data-inline="false"></span>
              <p>JavaScript</p>
            </div>
            <div className="center col s6 m4 l3">
              <span className="iconify stack graphql" data-icon="simple-icons:graphql" data-inline="false"></span>
              <p>GraphQL</p>
            </div>
            <div className="center col s6 m4 l3">
              <span className="iconify stack" data-icon="logos:apollostack" data-inline="false"></span>
              <p>Apollo</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  )

}

export default About;