import React, { Component } from 'react';
import './Sidebar.css';
import { HashLink as Link } from 'react-router-hash-link';
import logo from '../images/My-logo4.ico'

class Sidebar extends Component {
    render() {
       
        return (
            <div className="sidebar">
                <img src={logo} alt="" />
                <h1><Link smooth to="/#start" className="h1_links">Famila M</Link></h1>
                <p style={{color:'black',fontWeight:'bold'}} className="gmail"> familafami99@outlook.com </p>
                <ul className="sidebar-nav">
                    <li className="sidebar-nav-items"><Link smooth to="/#about" className="links">About</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#education" className="links" >Education</Link></li>
                    <li className="sidebar-nav-items"><Link smooth to="/#interest" className="links">Interest</Link></li>
                </ul>
    
                <div className="flip-card-back">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-icons"> <a href="https://github.com/Famila-M" target="blank" rel="noreferrer" class="fa fas fa-github fa-lg"> </a></li>
                        <li className="sidebar-nav-icons"> <a href="https://linkedin.com/in/famila-m" target="blank" rel="noreferrer" class="fa fas fa-linkedin-square fa-lg"> </a></li>
                        <li className="sidebar-nav-icons"> <a href="https://www.naukri.com/mnjuser/profile?id=&altresid" target="blank" rel="noreferrer" class="fa fas fa-share fa-lg"> </a></li>
                        <li className="sidebar-nav-icons"> <a href="https://www.instagram.com/_bluekiddoo_/" target="blank" rel="noreferrer" class="fa fas fa-instagram fa-lg"> </a></li>
                        <li className="sidebar-nav-icons"> <a href="familafami99@outlook.com" target="blank" rel="noreferrer" class="fa fas fa-envelope fa-lg"> </a></li>
                    </ul>
                </div>
              
            </div>
        )
    }
}

export default Sidebar
