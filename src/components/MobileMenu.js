import React from 'react'
import { Link } from 'gatsby'

const MobileMenu = props => (
  <nav>
    {props.menuLinks.map(link =>
      link.items ? (
        <React.Fragment key={link.name}>
          <Link className="link depth-0" to={link.link}>
            {link.name}
          </Link>
          <span className="indent-0"></span>
          {link.items.map(sublink =>
            sublink.items ? (
              <React.Fragment key={sublink.name}>
                <Link
                  style={{ marginLeft: `20px` }}
                  className="link depth-0"
                  to={sublink.link}
                >
                  {sublink.name}
                </Link>
                {sublink.items.map(nestedsublink => (
                  <div key={nestedsublink.name}>
                    <Link
                      style={{ marginLeft: `40px` }}
                      className="link depth-2"
                      to={nestedsublink.link}
                    >
                      {nestedsublink.name}
                    </Link>
                  </div>

                ))}
              </React.Fragment>
            ) : (
              <div key={sublink.name}>
                <Link
                  style={{ marginLeft: `20px` }}
                  className="link depth-1"
                  to={sublink.link}
                >
                  {sublink.name}
                </Link>
              </div>
            )
          )}
        </React.Fragment>
      ) : (
        <div key={link.name}>
          <Link className="link depth-0" to={link.link}>
            {link.name}
          </Link>
        </div>
      )
    )
    }
    <div>
        <a href="https://steadyhandtea.com" target="_blank" rel="noreferrer" className="link depth-0">Steady Hand Tea</a>
    </div>
    <div>
        <a href="https://nicoeversdesign.com" target="_blank" rel="noreferrer" className="link depth-0">Nico Evers Design</a>
    </div>
    <div>
        <Link to="/contact" className="link depth-0">Contact</Link>
    </div>
    <ul className="icons">
            <li>
              <a href="https://www.facebook.com/djneversmusic/" className="icon brands alt fa-facebook-f" target="_blank" rel="noreferrer">
                <span className="label">DJ Nevers Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/neverspinpoi/" className="icon brands alt fa-instagram" target="_blank" rel="noreferrer">
                <span className="label">DJ Nevers instagram</span>
              </a>
            </li>
            <li>
              <a href="https://www.youtube.com/user/dharmamystic" className="icon brands alt fa-youtube" target="_blank" rel="noreferrer">
                <span className="label">Youtube</span>
              </a>
            </li>
            <li>
              <a href="https://soundcloud.com/djnevers" className="icon brands alt fa-soundcloud" target="_blank" rel="noreferrer">
                <span className="label">Soundcloud</span>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nicky-evers/" className="icon brands alt fa-linkedin-in" target="_blank" rel="noreferrer">
                <span className="label">LinkedIn</span>
              </a>
            </li>
          </ul>
  </nav>
)

export default MobileMenu
