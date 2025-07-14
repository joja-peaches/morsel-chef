import { React } from "react";
import { useForm, ValidationError } from "@formspree/react";

import "./Contact.css";
import megan from "../../assets/images/megan_gajewski.jpg";

function Contact() {
  const [state, handleSubmit] = useForm("mrblzkne");
  const regex = {
    name: /^[a-zA-Z0-9.?! ]*$/,
    phone: /^[0-9-]*$/,
    email: /^[a-zA-Z0-9.?!]+@[a-zA-Z0-9.?!]+\.[a-zA-Z]{2,}$/,
    message: /^[a-zA-Z0-9.?! ]*$/,
  };

  if (state.succeeded) {
    return <p>Thank you for reaching out!</p>;
  }
  return (
    <article className="contact">
      <h1 className="contact__title">Get in touch.</h1>
        <p className="contact__text">
          Ready to eat? Get in touch with us today to chat!
          <br />
          We look forward to
          meeting you.{" "}
        </p>
      <section className="contact__form-container">
        <img
          src={megan}
          className="contact__image"
          alt="Megan Gajewski sitting at a restaurant with a sparkler-lit birthday cake sitting in front of her"
        />
        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__form__input-wrapper">
            <label for="firstName" className="contact__form-label">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required
              className="contact__form-input"
              min="2"
              max="50"
            />
            <ValidationError
              prefix="First name"
              field="firstName"
              errors={state.errors}
            />
          </div>
          <div className="contact__form__input-wrapper">
            <label for="lastName" className="contact__form-label">
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last name"
              required
              className="contact__form-input"
              min="2"
              max="50"
            />
            <ValidationError
              prefix="Last Name"
              field="lastName"
              errors={state.errors}
            />
          </div>
          <div className="contact__form__input-wrapper">
            <label for="phone" className="contact__form-label">
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone number"
              className="contact__form-input"
            />
            <ValidationError
              prefix="Phone"
              field="phone"
              errors={state.errors}
            />
          </div>
          <div className="contact__form__input-wrapper">
            <label for="email" className="contact__form-label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email address"
              required
              className="contact__form-input"
              min="2"
              max="50"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="contact__form__input-wrapper">
            <label for="message" className="contact__form-label">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Your Message"
              required
              className="contact__form-input contact__form-input__message"
              min="2"
              max="500"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            className="contact__form-submit-button"
            disabled={state.submitting}
          >
            Submit
          </button>
        </form>
      </section>
    </article>
  );
}

export default Contact;
