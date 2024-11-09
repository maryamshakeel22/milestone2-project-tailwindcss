import './contact.css'

const Contact = () => {
  return (
    <div className="contact-section" id="Contact">
        <section className="contact-content">
          <div className="container">
            <div className="text-center title-container">
              <h1 className="contact-title">Contact Me</h1>
              <p className="contact-description">
                Feel free to reach out if you`&apos;`d like to collaborate or have any questions. I`&apos;`m always open to new opportunities and connections.
              </p>
            </div>
            <div className="form-container">
              <div className="form-fields">
                <div className="form-field">
                  <label htmlFor="name" className="label">Name</label>
                  <input type="text" id="name" name="name" className="input" />
                </div>
                <div className="form-field">
                  <label htmlFor="subject" className="label">Subject</label>
                  <input type="text" id="subject" name="subject" className="input" />
                </div>
                <div className="form-field">
                  <label htmlFor="email" className="label">Email</label>
                  <input type="email" id="email" name="email" className="input" />
                </div>
                <div className="form-field">
                  <label htmlFor="message" className="label">Message</label>
                  <textarea id="message" name="message" className="textarea" defaultValue={""} />
                </div>
                <div className="form-field">
                  <button className="submit-btn">Submit</button>
                </div>
                <div className="contact-info">
                  <a className="email-link" href="mailto:maryammalikawan5@gmail.com">maryammalikawan5@gmail.com</a>
                  <p className="address">
                    Sanghar Sindh
                    <br />
                    Pakistan
                  </p>
                  <span className="social-links">
                    <a href="https://www.linkedin.com/in/maryam-shakeel-5720a12b5/" className="social-icon linkedin-icon">
                      {/* LinkedIn Icon */}
                    </a>
                    <a href="https://github.com/maryamshakeel22" className="social-icon github-icon">
                      {/* GitHub Icon */}
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}

export default Contact
