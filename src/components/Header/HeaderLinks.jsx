import React, {Component} from 'react';
import { NavItem, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';


class HeaderLinks extends Component{

logoutUser() {
  window.localStorage.clear();
  this.setState({ isAuthenticated: false });
}; 

    render(){
        return (
            <div>

                <Nav pullRight>
                    <NavItem eventKey={3} href="#"><Link to="/login">Log out</Link></NavItem>
                </Nav>
            </div>
        );
    }
}

export default HeaderLinks;
