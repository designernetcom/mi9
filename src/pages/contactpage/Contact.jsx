import React from "react";
import ContactHero from "./sections/ContactHero";
import ContactDetails from "./sections/ContactDetails";
import "./Contact.css";

export default function Contact() {
  return (
    <main className="mi9-contact-page">
      <ContactHero />
      <ContactDetails />
    </main>
  );
}
