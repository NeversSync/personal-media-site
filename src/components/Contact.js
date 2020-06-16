import React from 'react'
import { navigate } from 'gatsby-link'
import Fade from 'react-reveal'
import Recaptcha from 'react-recaptcha'

const RECAPTCHA_KEY = process.env.SITE_RECAPTCHA_KEY;

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error))
  }

  // render on captcha load
  const handleCaptchaLoad = (event) => {
    console.log('handleCaptchaLoad')
  }

  // load on callback verify
  const verifyCallback = (event) => {
    console.log('verifyCallback-->', event)
  }


  return (
    <section id="contact" className="wrapper style2 contact special fade inactive">
      <Fade duration={1500}>
        <div className="container dark-bg">
          <header>
            <h2>Contact</h2>
            <p>Drop me a line and I'll respond<br /> as soon as I can</p>
          </header>
          <form
            name="contact"
            method="post"
            action="/thanks"
            data-netlify="true"
            // data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />
            <div className="row gtr-uniform gtr-50">
              <div className="col-6 col-12-xsmall no-left-padding">
                {/* <p hidden>
                  <label>Don’t fill this out if you're human: <input name="bot-field" onChange={handleChange} /></label>
                </p> */}
                <input type="text" name="name" id="name" placeholder="Name" onChange={handleChange} />
              </div>
              <div className="col-6 col-12-xsmall">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={handleChange}
                />
              </div>
              <div className="col-12 no-left-padding">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Enter your message"
                  rows="6"
                  onChange={handleChange}
                ></textarea>
              </div>
              <Recaptcha
                sitekey={RECAPTCHA_KEY}
                render="explicit"
                verifyCallback={verifyCallback}
                onloadCallback={handleCaptchaLoad}
              />
              <div className="col-12">
                <ul className="actions">
                  <li className="no-left-padding">
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
}
