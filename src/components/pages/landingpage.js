import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landingpage extends Component {
  render() {
    return (
      <div style={{ width: "100", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={"/Bitemoji1.png"} alt="avatar" className="avatar-img" />
            <div className="banner-text">
              <h1>Frontend Developer</h1>
              <hr />
              <p>HTML/CSS | Bootstrap | JavaScript | React</p>

              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="https://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* GitHub */}
                <a
                  href="https://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a
                  href="https://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

                {/* Youtybe */}
                <a
                  href="https://google.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landingpage;