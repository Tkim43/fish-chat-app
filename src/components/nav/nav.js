import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import './nav.css';
import SideNav from './side_nav';

class Nav extends Component{
    state = {
        links: [
            {
                to: '/',
                text: 'Home',
            },
            {
                to: '/chat',
                text: 'Chat'
            },
            {
                to: '/set-name',
                text: 'Set Name'
            }
        ]
    }
    componentDidMount(){

        // M is materialize
        this.sideNav = M.Sidenav.init(this.sideNav);
    }
    handleLinkClick = () =>{
        if(this.sideNav.isOpen){
            this.sideNav.close();
        }
    }
    setSideNavRef = (element) =>{
        this.sideNav = element;
    }
    render(){
        const linkElements = this.state.links.map(link =>{
            return(
                <li onClick ={this.handleLinkClick}key={link.to}>
                    <Link to={link.to}>{link.text}</Link>
                </li>
            )
        })
        return(
            <Fragment>
                <nav className="main-nav grey darken-2">
                    <div className="nav-wrapper">
                        <Link className="brand-logo" to="/" >Fish Chat</Link>
                        <a href="#" data-target="side-nav" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                        <ul className="right hide-on-med-and-down">
                            {linkElements}
                        </ul>      
                    </div>
                </nav>
                <SideNav setRef={this.setSideNavRef} links = {linkElements}/>
            </Fragment>
        )
        
    }
}

export default Nav;