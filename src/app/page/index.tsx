// src/pages/index.tsx
import React from 'react';
import Navbar from '../components/Navbar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />

      {/* Header */}
      <header className="w3-container w3-red w3-center" style={{ padding: '128px 16px' }}>
        <h1 className="w3-margin w3-jumbo">THE BAND</h1>
        <p className="w3-xlarge">The Roadies</p>
        <button className="w3-button w3-black w3-padding-large w3-large w3-margin-top">Get Tickets</button>
      </header>

      {/* First Grid */}
      <div className="w3-row-padding w3-padding-64 w3-container">
        <div className="w3-content">
          <h5 className="w3-center w3-padding-64">
            <span className="w3-tag w3-wide">THE BAND</span>
          </h5>
          <p className="w3-center">
            <img
              src="https://www.w3schools.com/w3images/bandmember.jpg"
              className="w3-round w3-image w3-opacity-min"
              alt="The Band"
              width="600"
              height="400"
            />
          </p>
          <p className="w3-justify">
            We love music. We have released five albums. We have sold out shows in Arena throughout the world. We cannot wait to see you in our next show!
          </p>
          <p className="w3-center w3-padding-32">
            <span className="w3-xlarge w3-text-teal">
              <strong>The Band</strong>
            </span>
          </p>
          <div className="w3-row-padding w3-center" style={{ marginTop: '64px' }}>
            <div className="w3-quarter">
              <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Random Name" style={{ width: '100%' }} />
              <h3>Random Name</h3>
              <p>Vocalist</p>
            </div>
            <div className="w3-quarter">
              <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Random Name" style={{ width: '100%' }} />
              <h3>Random Name</h3>
              <p>Guitarist</p>
            </div>
            <div className="w3-quarter">
              <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Random Name" style={{ width: '100%' }} />
              <h3>Random Name</h3>
              <p>Drummer</p>
            </div>
            <div className="w3-quarter">
              <img src="https://www.w3schools.com/w3images/bandmember.jpg" alt="Random Name" style={{ width: '100%' }} />
              <h3>Random Name</h3>
              <p>Bassist</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Grid */}
      <div className="w3-row-padding w3-light-grey w3-padding-64 w3-container">
        <div className="w3-content">
          <div className="w3-third w3-center">
            <i className="fa fa-anchor w3-padding-64 w3-text-red"></i>
          </div>

          <div className="w3-twothird">
            <h5 className="w3-padding-32">Our Work</h5>
            <p className="w3-text-grey">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>

      <div className="w3-container w3-black w3-center w3-opacity w3-padding-64">
        <h1 className="w3-margin w3-xlarge">Quote of the day: live life</h1>
      </div>

      {/* Third Grid */}
      <div className="w3-row-padding w3-padding-64 w3-container">
        <div className="w3-content">
          <h5 className="w3-center w3-padding-64">
            <span className="w3-tag w3-wide">THE TOUR</span>
          </h5>
          <p className="w3-center">
            <img src="https://www.w3schools.com/w3images/map.jpg" className="w3-image" style={{ width: '100%' }} />
          </p>
          <p className="w3-justify">
            We had the best time playing at the Valley Rock Festival - it was an amazing event!
          </p>
          <p className="w3-center w3-padding-32">
            <span className="w3-xlarge w3-text-teal">
              <strong>The Tour Dates</strong>
            </span>
          </p>
          <ul className="w3-ul w3-border w3-white w3-text-grey">
            <li className="w3-padding">
              September <span className="w3-tag w3-red w3-margin-left">Sold out</span>
            </li>
            <li className="w3-padding">
              October <span className="w3-tag w3-red w3-margin-left">Sold out</span>
            </li>
            <li className="w3-padding">
              November <span className="w3-badge w3-right w3-margin-right">3</span>
            </li>
          </ul>
          <p className="w3-center w3-padding-32">
            <span className="w3-xlarge w3-text-teal">
              <strong>Pricing</strong>
            </span>
          </p>
          <div className="w3-row-padding" style={{ margin: '0 -16px' }}>
            <div className="w3-third w3-margin-bottom">
              <ul className="w3-ul w3-border w3-hover-shadow">
                <li className="w3-teal w3-xlarge w3-padding-32">Standard</li>
                <li className="w3-padding-16">Full Pass</li>
                <li className="w3-padding-16">VIP Access</li>
                <li className="w3-padding-16">Food &amp; Beverages</li>
                <li className="w3-padding-16">
                  <h2>$ 150</h2>
                  <span className="w3-opacity">per person</span>
                </li>
                <li className="w3-light-grey w3-padding-24">
                  <button className="w3-button w3-teal w3-padding-large w3-hover-black">Sign Up</button>
                </li>
              </ul>
            </div>
            <div className="w3-third w3-margin-bottom">
              <ul className="w3-ul w3-border w3-hover-shadow">
                <li className="w3-teal w3-xlarge w3-padding-32">Premium</li>
                <li className="w3-padding-16">Full Pass</li>
                <li className="w3-padding-16">VIP Access</li>
                <li className="w3-padding-16">Food &amp; Beverages</li>
                <li className="w3-padding-16">
                  <h2>$ 250</h2>
                  <span className="w3-opacity">per person</span>
                </li>
                <li className="w3-light-grey w3-padding-24">
                  <button className="w3-button w3-teal w3-padding-large w3-hover-black">Sign Up</button>
                </li>
              </ul>
            </div>
            <div className="w3-third w3-margin-bottom">
              <ul className="w3-ul w3-border w3-hover-shadow">
                <li className="w3-teal w3-xlarge w3-padding-32">Ultra</li>
                <li className="w3-padding-16">Full Pass</li>
                <li className="w3-padding-16">VIP Access</li>
                <li className="w3-padding-16">Food &amp; Beverages</li>
                <li className="w3-padding-16">
                  <h2>$ 350</h2>
                  <span className="w3-opacity">per person</span>
                </li>
                <li className="w3-light-grey w3-padding-24">
                  <button className="w3-button w3-teal w3-padding-large w3-hover-black">Sign Up</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w3-container w3-padding-64 w3-theme-l5" id="contact">
        <div className="w3-row">
          <div className="w3-col m5">
            <div className="w3-padding-16">
              <span className="w3-xlarge w3-border-teal w3-bottombar">Contact Us</span>
            </div>
            <h3>Address</h3>
            <p>Swing by for a chat, or just send us a message:</p>
            <p>
              <i className="fa fa-map-marker w3-text-teal w3-xlarge"></i> Chicago, US
            </p>
            <p>
              <i className="fa fa-phone w3-text-teal w3-xlarge"></i> Phone: +00 151515
            </p>
            <p>
              <i className="fa fa-envelope w3-text-teal w3-xlarge"></i> Email: mail@mail.com
            </p>
          </div>
          <div className="w3-col m7">
            <form className="w3-container w3-card-4 w3-padding-16 w3-white" action="/action_page.php" target="_blank">
              <div className="w3-section">
                <label>Name</label>
                <input className="w3-input" type="text" name="Name" required />
              </div>
              <div className="w3-section">
                <label>Email</label>
                <input className="w3-input" type="text" name="Email" required />
              </div>
              <div className="w3-section">
                <label>Message</label>
                <input className="w3-input" type="text" name="Message" required />
              </div>
              <button type="submit" className="w3-button w3-right w3-theme">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w3-container w3-padding-64 w3-center w3-opacity">
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
      </footer>
    </div>
  );
};

export default Home;
