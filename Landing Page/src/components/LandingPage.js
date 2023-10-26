import React from "react";
import "./landingPage.css";

const LandingPage = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <img src="logoo.png" alt="logo" />
        </div>
        <div className="menu">
          <ul>
            <li>Solution</li>
            <select></select>
            &nbsp;&nbsp;
            <li>Integrations</li>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
            <select></select>
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
            &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; <li>Log in </li>
          </ul>
        </div>
        <div className="user">
          <button className="start">Start for free &#11016;</button>
        </div>
      </nav>
      <div className="container">
        <div className="pinkdiv">
          <div className="build">
            <h1>Build your</h1>&nbsp;&nbsp; &nbsp;&nbsp;
            <div class="square-border">
              <h1 className="head">website</h1>
              <div class="corner-square top-left"></div>
              <div class="corner-square top-right"></div>
              <div class="corner-square bottom-left"></div>
              <div class="corner-square bottom-right"></div>
            </div>
          </div>
          <div className="free">
            <h1>for free!</h1>
          </div>
          <div className="easy">
            {" "}
            <h4>Easy to Build and Manage your website Created</h4>
            <h4 className="para"> for non-technical users</h4>
          </div>

          <button className="btn">Get Started</button>

          <div className="arrow">&#10532;</div>
          <div className="tilted-div">
            No credit card is required to get started!
          </div>
        </div>

        <div className="half-top-div">
          <p className="dot">...</p>{" "}
          <p className="create">&#8595; &nbsp;Create your website</p>
          <div className="template">
            <div className="navbar">
              <div className="left-side">
                <div className="menu-items">&#8592; Template 1</div>
                <div className="input">
                  <input type="select" placeholder="Select Page" />
                  <select>
                    <option></option>
                  </select>
                </div>
              </div>
              <div className="right-side">
                <div className="menu-item">Cancel</div>
                <div className="menu-item">Preview</div>
                <button className="publish-button">Publish</button>
              </div>
            </div>

            <div className="styled-div">
              <div className="left-content">Homepage</div>
              <div className="right-content">&#10006;</div>
            </div>

            <div className="sec">
              <div className="App">
                <div className="page-section">
                  <h2>Page Sections</h2>
                  <div className="input-with-icon">
                    <input type="text" placeholder="Herobunner" />
                    <span className="icon">...</span>
                  </div>
                  <div className="input-with-icon">
                    <input type="text" placeholder="Carousel" />
                    <span className="icon">...</span>
                  </div>
                  <div className="input-with-icon">
                    <input type="text" placeholder="Produotist" />
                    <span className="icon">...</span>
                  </div>
                  <div className="input-with-icon">
                    <input type="text" placeholder="Categories" />
                    <span className="icon">...</span>
                  </div>
                </div>

                <div className="add-section">
                  <h2>Add More Sections</h2>
                  <div className="input-with-icon">
                    <input type="text" placeholder="Accordon" />
                    <span className="icon">+</span>
                  </div>
                  <div className="input-with-icon">
                    <input type="text" placeholder="Customer Logo" />
                    <span className="icon">+</span>
                  </div>
                  <div className="input-with-icon">
                    <input type="text" placeholder="Form" />
                    <span className="icon">+</span>
                  </div>
                  <div className="input-with-icon">
                    <input type="text" placeholder="Carousel" />
                    <span className="icon">+</span>
                  </div>
                  <div className="input-with-icon">
                    <input type="text" placeholder="Map" />
                    <span className="icon">+</span>
                  </div>
                  <div className="input-with-icon">
                    <input type="text" placeholder="Gallery" />
                    <span className="icon">+</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="acc">
              <h3>Accordion Style 1</h3>
              <input
                type="checkbox"
                id="item-1"
                className="accordion-toggle"
                name="item"
              />
              <label htmlFor="item-1">Accordion</label>
              <h3 className="osa">Accordion Style 2</h3>

              <input
                type="checkbox"
                id="item-1"
                className="accordion-toggle"
                name="item"
              />
              <label htmlFor="item-1">Accordion</label>
              <h3>Accordion Style 3</h3>
              <input
                type="checkbox"
                id="item-1"
                className="accordion-toggle"
                name="item"
              />
              <label htmlFor="item-1">Accordion</label>
            </div>

            <div className="shop"></div>
          </div>
        </div>
      </div>

      <div className="how">
        <div className="createe"></div>

        <div className="big-div">
          <div className="template-2">
            <div className="navbarr">
              <div className="left-sidee">
                <div className="menu-iteems">
                  &nbsp;&nbsp;&#8592; Template 1
                </div>
                <div className="inputt">
                  <input type="select" placeholder="Select Page" />
                  <select>
                    <option></option>
                  </select>
                </div>
              </div>
              <div className="right-sidee">
                <div className="menu-iteem">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Cancel
                </div>
                <div className="menu-iteem">Preview</div>
                <button className="publish-buttonn">Publish</button>
              </div>
            </div>
          </div>
          <div className="settings">
            <h5>Theme Settings</h5>
            <input
              className="int"
              type="text"
              placeholder="Header"
            /> <br /> <br />
            <input className="int" type="text" placeholder="Navigation" />{" "}
            <br /> <br />
            <input
              className="int"
              type="text"
              placeholder="Footer"
            /> <br /> <br />
            <input
              className="int"
              type="text"
              placeholder="Color"
            /> <br /> <br />
            <input className="int" type="text" placeholder="Typography" />{" "}
            <br /> <br />
            <input
              className="int"
              type="text"
              placeholder="Favicon"
            /> <br /> <br />
            <input
              className="int"
              type="text"
              placeholder="Button"
            /> <br /> <br />
            <input
              className="int"
              type="text"
              placeholder="Social Media"
            />{" "}
            <br />
          </div>

          <div></div>

          <div className="small-div left-bottom"></div>
          <div className="small-div right-bottom"></div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
