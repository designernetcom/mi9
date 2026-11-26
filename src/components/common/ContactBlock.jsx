import React, { useState } from "react";
import { Phone, Mail, MapPin, Check } from "lucide-react";
import { company, products } from "../../data/companyData";
import Title from "./Title";

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState({});

  function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const errors = {};

    if (!data.name) errors.name = "Required";
    if (!/^\S+@\S+\.\S+$/.test(data.email || ""))
      errors.email = "Enter a valid email";
    if (!data.message) errors.message = "Required";

    setErr(errors);
    if (!Object.keys(errors).length) setSent(true);
  }

  if (sent) {
    return (
      <div className="success">
        <Check />
        <h3>Thank you. Your enquiry is ready.</h3>
        <p>
          This frontend demo does not transmit data. Connect the submit handler
          to an approved backend later.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit}>
      {[
        ["name", "Full Name"],
        ["email", "Email"],
        ["phone", "Phone"],
        ["company", "Company"],
      ].map(([field, label]) => (
        <label key={field}>
          {label}
          <input name={field} />
          {err[field] && <small>{err[field]}</small>}
        </label>
      ))}
      <label className="wide">
        Product Interest
        <select name="product">
          <option>Select a product</option>
          {products.map((p) => (
            <option key={p.slug}>{p.name}</option>
          ))}
        </select>
      </label>
      <label className="wide">
        Message
        <textarea rows="5" name="message" />
        {err.message && <small>{err.message}</small>}
      </label>
      <button className="btn green wide">Send Enquiry</button>
    </form>
  );
}

export default function ContactBlock() {
  return (
    <section className="section beige">
      <div className="wrap split">
        <div>
          <Title eye="CONTACT" title="Let's build a global partnership" />
          <div className="contactInfo">
            <p>
              <Phone />
              {company.phone}
            </p>
            <p>
              <Mail />
              {company.email}
            </p>
            <p>
              <MapPin />
              {company.corporate}
            </p>
            <p>
              <MapPin />
              {company.branch}
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
