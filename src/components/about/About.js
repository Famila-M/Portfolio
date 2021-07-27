import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"; 

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                    <span  className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> My name is FAMILA M and I want to be a developer as I am interested in developing new things which excite me a lot.
                        Strong in designing Webpages. Proficient in Oops, C++, Front-end Development. Passionate about implementing and launching 
                        new projects, Learning new Technologies, Looking to start the career as an entry-level Full-Stack Development with a reputed firm driven by technology. :)  </p>
                         <p className={classes.br}>I love exploring new technologies and being a practitioner, I like to stay on top of latest trends.</p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;