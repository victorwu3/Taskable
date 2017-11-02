import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {

  render(){
    return(
      <div className="header-container">
        <header className="page-header">
          <div className="header-elements-container">
            <Link className="header-logo" to="/" ></Link>
            <div className="header-links-container">
              <Link to="/login" className="homepage-login-button">
                <span>Log in</span>
              </Link>
              <Link to="/signup" className="homepage-signup-button">
                <span>Sign up</span>
              </Link>
            </div>
          </div>
        </header>
      </div>
    )
  }
}

export default Header;
