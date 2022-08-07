import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import '../styles/Contact.css';

export default function Contact() {
  const [state, handleSubmit] = useForm('xeqvpzae');
  const handlesubmit = (e) => {
    handleSubmit(e);
    e.target.reset();
  };
  return (
    <div className="contact" id="contact">

      <section className=" p-container m-container contact-form d-flex flex-column flex-lg-row" id="contact-section">
        <div className="interest">
          {state.succeeded && (
          <h2 data-aos="fade-right">Thanks for reaching out! I will get back to you as soon as possible</h2>
          )}
          {state.succeeded === false && (
          <h2 data-aos="fade-right">
            I am always interested in hearing about new projects, so if you would
            like to chat please get in touch.
          </h2>
          )}
        </div>
        <div className="w-100 ">
          <form data-aos="fade-left" className="form w-100" onSubmit={handlesubmit}>
            <ul className="list-unstyled">
              <li className="border-bottom">
                <input
                  type="text"
                  id="name"
                  placeholder="Full name"
                  required
                  maxLength="50"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
              </li>
              <li className="border-bottom">
                <input
                  type="email"
                  name="user-email"
                  id="email"
                  placeholder="Email address"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </li>
              <li>
                <textarea
                  name="comment"
                  id="comment"
                  placeholder="Enter text here"
                  maxLength="500"
                  required
                />
                <ValidationError
                  prefix="Comment"
                  field="comment"
                  errors={state.errors}
                />
              </li>
              <li className="btn-touch border-btn">
                <button
                  className="sp-btn submit"
                  type="submit"
                  disabled={state.submitting}
                >
                  Get in touch
                </button>
              </li>
            </ul>
          </form>
        </div>
      </section>
    </div>
  );
}
