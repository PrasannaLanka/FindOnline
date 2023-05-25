import React, { Component } from "react";
import "../styles/Home.css";
import img from "../images/icon.png";
export class Second extends Component {
  render() {
    return (
      <div>
        <header>
          <link
            href="https://fonts.googleapis.com/css?family=Raleway:400, 600"
            rel="stylesheet"
            type="text/css"
          />
        </header>
        <div className="header">
          <div className="container">
            <ul className="nav">
              <div className="logo-container">
                <img src={img} alt="Logo" className="logo" />
                <h1 className="company-name">Proven dating sites</h1>
              </div>

              {/* <li>About</li>
            <li>Work</li>
            <li>Team</li>
            <li>Contact</li> */}
            </ul>
          </div>
        </div>

        <div className="jumbotron">
          <div className="container">
            <div className="main">
              <h1 id="big">
                Are you tired of dating western women who only talk about their
                shoes and nails?
              </h1>

              {/* <a href="#" className="btn-main">
                Get Started
              </a> */}
              <a href="/third" class="button button-4">
                Yes
              </a>
              <a href="/third" class="button button-4">
                No
              </a>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="container">
            <p>&copy;2023 All rights reserved</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Second;
