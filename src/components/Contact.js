import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "../styles/Contact.css";
export default function Contact() {
  const [state, handleSubmit] = useForm("xeqvpzae");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className="contact">
      <section className="contact-form" id="contact-section">
        <div className="interest">
          <h2>
            I'm always interested in hearing about new projects, so if you'd
            like to chat please get in touch.
          </h2>
        </div>
        <div>
          <form className="form mt-3" onSubmit={handleSubmit}>
            <ul>
              <li className="border-bottom">
                <input
                  type="text"
                  id="name"
                  placeholder="Full name"
                  required
                  maxlength="30"
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
                  maxlength="500"
                  required
                ></textarea>
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
