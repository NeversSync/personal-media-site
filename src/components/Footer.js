import React from 'react'

const Footer = props => (
  <footer id="footer">
    <ul className="icons">
      <li>
        <a href="https://www.facebook.com/djneversmusic/" className="icon brands alt fa-facebook-f" target="_blank">
          <span className="label">DJ Nevers Facebook</span>
        </a>
      </li>
      <li>
        <a href="https://www.youtube.com/user/dharmamystic" className="icon brands alt fa-youtube" target="_blank">
          <span className="label">Youtube</span>
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/nicky-evers/" className="icon brands alt fa-linkedin-in" target="_blank">
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a href="https://soundcloud.com/djnevers" className="icon brands alt fa-soundcloud" target="_blank">
          <span className="label">Soundcloud</span>
        </a>
      </li>
    </ul>
    <ul className="copyright">
      <li>&copy; <a href="https://nickyevers.com" target="_blank">Nicky Evers Design</a>. All rights reserved.</li>
    </ul>
  </footer>
)

export default Footer
