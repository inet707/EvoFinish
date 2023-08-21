import React from "react";
import BackgroundiMG from "../../backgroundimage/BackgroundiMG";
import BackgroundImage from "./../../../img/hero/h1_hero6.jpg";
import "./Contact.css";

function Contact() {
  return (
    <>
      <BackgroundiMG backgroundimage={BackgroundImage} title="Contact" />
      <div className="contactRow">
        <div className="contact-title-area">
          <h2 className="contact-title">Get in Touch</h2>
        </div>
        <div className="contact_Form_col">
        <div className="form_Area">
          <form
            className="contact_form"
            action="contact_process.php"
            method="post"
            id="contactForm"
            novalidate="novalidate"
          >
            <div className="row_Input_area">
              <div className="form_Text_area">
                <div className="form-group">
                  <textarea
                    className="form-Textarea-control"
                    name="message"
                    id="message"
                    cols="30"
                    rows="9"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter Message'"
                    placeholder=" Enter Message"
                  ></textarea>
                </div>
              </div>
              <div className="input_area-6sm">
                <div className="form-group">
                  <input
                    className="form-control-input"
                    name="name"
                    id="name"
                    type="text"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter your name'"
                    placeholder="Enter your name"
                  />
                </div>
              
                <div className="form-group">
                  <input
                    className="form-control-input"
                    name="email"
                    id="email"
                    type="email"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter email address'"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="input_area-12sm">
                <div className="form-group">
                  <input
                    className="form-control-lgInput"
                    name="subject"
                    id="subject"
                    type="text"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter Subject'"
                    placeholder="Enter Subject"
                  />
                </div>
              </div>
            </div>
            <div className="form-group_Btn">
              <button
                type="submit"
                className="button button-contactForm boxed-btn"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="contact_Media_area">
          <div className="media_contact-info">
            <span className="contact-info__icon">
              <i className="ti-home"></i>
            </span>
            <div className="media-body">
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div className="media_contact-info">
            <span className="contact-info__icon">
              <i className="ti-tablet"></i>
            </span>
            <div className="media-body">
              <h3>+1 253 565 2365</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="media_contact-info">
            <span className="contact-info__icon">
              <i className="ti-email"></i>
            </span>
            <div className="media-body">
              <h3>
                <p className="__cf_email__"> support@colorlib.com </p>
              </h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default Contact;
