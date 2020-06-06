import React from 'react'
import Fade from 'react-reveal/Fade'

const Contact = props => (
  <section id="contact" className="wrapper style2 contact special fade inactive">
    <Fade duration={1500}>
      <div className="container dark-bg">
        <header>
          <h2>Contact</h2>
          <p>Drop me a line and I'll respond<br/> as soon as I can</p>
        </header>
          <form method="post" action="#">
            <div className="row gtr-uniform gtr-50">
              <div className="col-6 col-12-xsmall">
                <input type="text" name="name" id="name" placeholder="Name" />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="col-12">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  rows="6"
                ></textarea>
              </div>
              <div className="col-12">
                <ul className="actions">
                  <li>
                    <input
                      type="submit"
                      value="Send"
                      className="primary"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </form>
      </div>
    </Fade>
  </section>
)
export default Contact
