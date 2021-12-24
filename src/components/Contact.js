import React from 'react'
import '../styles/Contact.css'
export default function Contact() {
    return (
   <div className="contact">
    <section className="contact-form" id="contact-section">
       <div className="interest">
           <h2>I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.</h2>
       </div>
       <div>
       <form className="form mt-3" id="form" action="https://formspree.io/f/xeqvpzae" method="post">
           <ul >
                 <li className="border-bottom">
                   <input type="text" id="name" placeholder="Full name" required maxlength="30"/>
               </li>
               <li className="border-bottom">
                   <input type="email" name="user-email" id="email" placeholder="Email address" required/>
               </li>
               <li>
                   <textarea name="comment" id="comment" placeholder="Enter text here" maxlength="500" required></textarea>
                   <small id="error"></small>
                </li>
               <li className="btn-touch border-btn">
                   <button  className="sp-btn submit"type="submit">Get in touch</button>
               </li>
           </ul>
       </form>
       </div>
     
   </section>
       </div>
    )
}
