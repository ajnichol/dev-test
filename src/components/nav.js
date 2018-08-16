import React from 'react';
import { Link } from 'react-router-dom';


class Nav extends React.Component {

  render() {
    return(
      <div>
        <nav className="navbar navbar-expand-lg fixed-top navbar-light top-nav-collapse">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img id="competitorLogo" src={require("../assets/competitor.png")} alt="Competitor Logo" />
            </a>
            <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse navBarColor" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/Item-1">Item 1</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Item-2">Item 2</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/Item-3">Item 3</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

export default Nav;
