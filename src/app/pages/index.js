// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Band</title>
        <meta name="description" content="Band Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <div className="w3-top">
        <div className="w3-bar w3-black w3-card w3-left-align w3-large">
          <a href="#" className="w3-bar-item w3-button w3-padding-large w3-white">HOME</a>
          <a href="#band" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">BAND</a>
          <a href="#tour" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">TOUR</a>
          <a href="#contact" className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">CONTACT</a>
        </div>
      </div>

      {/* Header */}
      <header className="w3-container w3-center w3-padding-64">
        <h1><b>MY BAND</b></h1>
        <p>The one and only</p>
        <img src="/band.jpg" alt="Band" className="w3-image" width="1000" height="500" />
      </header>

      {/* Band Section */}
      <div className="w3-container w3-center w3-padding-64" id="band">
        <h2>THE BAND</h2>
        <p className="w3-opacity"><i>We love music</i></p>
        <p className="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="w3-row w3-padding-32">
          <div className="w3-third">
            <p>Name</p>
            <img src="/bandmember.jpg" className="w3-round w3-margin-bottom" alt="Member" style={{ width: '60%' }} />
          </div>
          <div className="w3-third">
            <p>Name</p>
            <img src="/bandmember.jpg" className="w3-round w3-margin-bottom" alt="Member" style={{ width: '60%' }} />
          </div>
          <div className="w3-third">
            <p>Name</p>
            <img src="/bandmember.jpg" className="w3-round" alt="Member" style={{ width: '60%' }} />
          </div>
        </div>
      </div>

      {/* Tour Section */}
      <div className="w3-container w3-padding-64 w3-center" id="tour">
        <h2>TOUR DATES</h2>
        <p className="w3-opacity">Remember to book your tickets!</p>
        <div className="w3-row-padding w3-padding-32">
          <div className="w3-third">
            <p>New York</p>
            <img src="/newyork.jpg" className="w3-round w3-margin-bottom" alt="New York" style={{ width: '60%' }} />
            <p>Fri 27 Nov 2016</p>
            <button className="w3-button w3-black">Buy tickets</button>
          </div>
          <div className="w3-third">
            <p>Paris</p>
            <img src="/paris.jpg" className="w3-round w3-margin-bottom" alt="Paris" style={{ width: '60%' }} />
            <p>Sat 28 Nov 2016</p>
            <button className="w3-button w3-black">Buy tickets</button>
          </div>
          <div className="w3-third">
            <p>San Francisco</p>
            <img src="/sanfran.jpg" className="w3-round w3-margin-bottom" alt="San Francisco" style={{ width: '60%' }} />
            <p>Sun 29 Nov 2016</p>
            <button className="w3-button w3-black">Buy tickets</button>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="w3-container w3-padding-64 w3-center" id="contact">
        <h2>CONTACT</h2>
        <p className="w3-opacity w3-large"><i>Fan? Drop a note!</i></p>
        <div className="w3-row-padding" style={{ margin: '8px -16px' }}>
          <div className="w3-half">
            <img src="/map.jpg" className="w3-image" style={{ width: '100%' }} />
          </div>
          <div className="w3-half">
            <p>I'd love your feedback!</p>
            <form action="/action_page.php" target="_blank">
              <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name" />
              <input className="w3-input w3-border" type="text" placeholder="Email" required name="Email" />
              <input className="w3-input w3-border" type="text" placeholder="Message" required name="Message" />
              <button className="w3-button w3-black w3-section" type="submit">SEND</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w3-container w3-padding-64 w3-center w3-opacity w3-light-grey">
        <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p>
      </footer>
    </div>
  );
}
