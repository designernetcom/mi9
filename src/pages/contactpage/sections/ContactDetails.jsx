import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  Send,
  Clock3,
  CheckCircle2,
  MessageCircle,
  PackageCheck,
} from "lucide-react";

import "./ContactDetails.css";

export default function ContactDetails() {
  // ==========================================
  // FORM STATES
  // ==========================================

  const [isSending, setIsSending] = useState(false);

  const [formStatus, setFormStatus] = useState({
    type: "",
    message: "",
  });

  // ==========================================
  // RECAPTCHA SITE KEY
  // ==========================================

  const RECAPTCHA_SITE_KEY = "6Lf1ETAuAAAAAGfjnIiUyH1daH4IblRf1d1HwGbJ";

  // ==========================================
  // SHOW ERROR
  // ==========================================

  const showError = (message) => {
    setFormStatus({
      type: "error",
      message: message,
    });
  };

  // ==========================================
  // SHOW SUCCESS
  // ==========================================

  const showSuccess = (message) => {
    setFormStatus({
      type: "success",
      message: message,
    });
  };

  // ==========================================
  // HANDLE FORM SUBMISSION
  // ==========================================

  const handleContactSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Clear previous messages
    setFormStatus({
      type: "",
      message: "",
    });

    // ========================================
    // GET FORM VALUES
    // ========================================

    const name = String(formData.get("name") || "").trim();

    const companyName = String(formData.get("companyName") || "").trim();

    const email = String(formData.get("email") || "").trim();

    const phone = String(formData.get("phone") || "").trim();

    const country = String(formData.get("country") || "").trim();

    const product = String(formData.get("product") || "").trim();

    const message = String(formData.get("message") || "").trim();

    // ========================================
    // NAME VALIDATION
    // ========================================

    if (!name) {
      showError("Please enter your full name.");
      form.elements["name"].focus();
      return;
    }

    if (name.length > 100 || !/^[\p{L}\s.'-]+$/u.test(name)) {
      showError("Please enter a valid full name.");
      form.elements["name"].focus();
      return;
    }

    // ========================================
    // COMPANY VALIDATION
    // ========================================

    if (companyName.length > 150) {
      showError("Company name is too long.");
      form.elements["companyName"].focus();
      return;
    }

    // ========================================
    // EMAIL VALIDATION
    // ========================================

    if (!email) {
      showError("Please enter your email address.");
      form.elements["email"].focus();
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showError("Please enter a valid email address.");
      form.elements["email"].focus();
      return;
    }

    // ========================================
    // PHONE VALIDATION
    // ========================================

    if (!phone) {
      showError("Please enter your phone number.");
      form.elements["phone"].focus();
      return;
    }

    if (!/^[0-9+\-\s().]{7,20}$/.test(phone)) {
      showError("Please enter a valid phone number.");
      form.elements["phone"].focus();
      return;
    }

    // ========================================
    // COUNTRY VALIDATION
    // ========================================

    const allowedCountries = [
      "United Kingdom",
      "Europe",
      "Gulf Countries",
      "Middle East",
      "Other",
    ];

    if (!allowedCountries.includes(country)) {
      showError("Please select your country or market.");
      form.elements["country"].focus();
      return;
    }

    // ========================================
    // PRODUCT VALIDATION
    // ========================================

    if (!product) {
      showError("Please enter your product requirement.");
      form.elements["product"].focus();
      return;
    }

    if (product.length > 250) {
      showError("Product requirement is too long.");
      form.elements["product"].focus();
      return;
    }

    // ========================================
    // MESSAGE VALIDATION
    // ========================================

    if (!message) {
      showError("Please enter your message.");
      form.elements["message"].focus();
      return;
    }

    if (message.length > 2000) {
      showError("Message is too long.");
      form.elements["message"].focus();
      return;
    }

    // ========================================
    // DISABLE SUBMIT BUTTON
    // ========================================

    setIsSending(true);

    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 90000);

    try {
      // ======================================
      // CHECK RECAPTCHA
      // ======================================

      if (
        !window.grecaptcha ||
        typeof window.grecaptcha.ready !== "function" ||
        typeof window.grecaptcha.execute !== "function"
      ) {
        throw new Error(
          "reCAPTCHA could not be loaded. Please refresh the page.",
        );
      }

      // ======================================
      // GENERATE RECAPTCHA TOKEN
      // ======================================

      const token = await Promise.race([
        new Promise((resolve, reject) => {
          window.grecaptcha.ready(() => {
            window.grecaptcha
              .execute(RECAPTCHA_SITE_KEY, {
                action: "contact_form",
              })
              .then(resolve)
              .catch(reject);
          });
        }),

        new Promise((_, reject) => {
          controller.signal.addEventListener(
            "abort",
            () => reject(new Error("Request timed out.")),
            { once: true },
          );
        }),
      ]);

      if (!token) {
        throw new Error("reCAPTCHA token was not generated.");
      }

      // ======================================
      // UPDATE FORM DATA
      // ======================================

      formData.set("name", name);
      formData.set("companyName", companyName);
      formData.set("email", email);
      formData.set("phone", phone);
      formData.set("country", country);
      formData.set("product", product);
      formData.set("message", message);
      formData.set("recaptcha_token", token);

      // ======================================
      // SEND FORM DATA TO PHP
      // ======================================

      const response = await fetch("/contact_valid.php", {
        method: "POST",
        body: formData,

        headers: {
          Accept: "application/json",
        },

        signal: controller.signal,
      });

      console.log("HTTP STATUS:", response.status);

      const responseText = await response.text();

      // ======================================
      // CHECK EMPTY PHP RESPONSE
      // ======================================

      if (!responseText.trim()) {
        throw new Error(
          `PHP returned an empty response. HTTP ${response.status}`,
        );
      }

      // ======================================
      // PARSE JSON RESPONSE
      // ======================================

      let result;

      try {
        result = JSON.parse(responseText);
      } catch {
        throw new Error(
          `Invalid response from server. HTTP ${response.status}`,
        );
      }

      // ======================================
      // SUCCESS RESPONSE
      // ======================================

      if (response.ok && result.success === true) {
        showSuccess(
          result.message ||
            "Thank you for contacting MI9 International. Our team will get back to you shortly.",
        );

        form.reset();

        form.elements["recaptcha_token"].value = "";
      } else {
        // ====================================
        // ERROR RESPONSE
        // ====================================

        showError(
          result.message || "Unable to send your enquiry. Please try again.",
        );
      }
    } catch (error) {
      console.error("CONTACT FORM ERROR:", error);

      if (error.name === "AbortError") {
        showError("Request timed out. Please try again.");
      } else {
        showError(error.message || "Something went wrong. Please try again.");
      }
    } finally {
      // ======================================
      // RESET SUBMIT BUTTON
      // ======================================

      clearTimeout(timeout);

      setIsSending(false);
    }
  };

  // ==========================================
  // CONTACT SECTION
  // ==========================================

  return (
    <section className="mi9-contact-main">
      <div className="mi9-contact-bg-circle circle-one" />

      <div className="mi9-contact-bg-circle circle-two" />

      <div className="wrap">
        <div className="mi9-contact-grid">
          {/* =================================
              LEFT SIDE - CONTACT INFORMATION
          ================================= */}

          <motion.div
            className="mi9-contact-info"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mi9-contact-info-head">
              <span>CONTACT DETAILS</span>

              <h3>
                Connect with
                <br />
                <strong>MI9 International.</strong>
              </h3>
            </div>

            <div className="mi9-contact-info-list">
              {/* Email */}

              <a
                href="mailto:mi9international@gmail.com"
                className="mi9-contact-info-card"
              >
                <div className="mi9-contact-icon">
                  <Mail size={21} />
                </div>

                <div>
                  <small>EMAIL US</small>

                  <strong>mi9international@gmail.com</strong>

                  <span>Send us your enquiry</span>
                </div>

                <ArrowUpRight size={18} className="mi9-contact-arrow" />
              </a>

              {/* Phone */}

              <a href="tel:+919371095152" className="mi9-contact-info-card">
                <div className="mi9-contact-icon">
                  <Phone size={21} />
                </div>

                <div>
                  <small>CALL US</small>

                  <strong>+91 9371095152</strong>

                  <span>Speak with our team</span>
                </div>

                <ArrowUpRight size={18} className="mi9-contact-arrow" />
              </a>

              {/* Corporate Office */}

              <div className="mi9-contact-info-card">
                <div className="mi9-contact-icon">
                  <MapPin size={21} />
                </div>

                <div>
                  <small>OUR LOCATION</small>

                  <strong>Corporate Office</strong>

                  <span>144 MG Road Pune 411001, Maharashtra, India.</span>
                </div>
              </div>

              {/* Branch Office */}

              <div className="mi9-contact-info-card">
                <div className="mi9-contact-icon">
                  <MapPin size={21} />
                </div>

                <div>
                  <small>OUR LOCATION</small>

                  <strong>Branch Office</strong>

                  <span>
                    381/17 Bhawani Peth, Pune 411042, Maharashtra, India.
                  </span>
                </div>
              </div>

              {/* Business Hours */}

              <div className="mi9-contact-info-card">
                <div className="mi9-contact-icon">
                  <Clock3 size={21} />
                </div>

                <div>
                  <small>BUSINESS HOURS</small>

                  <strong>Monday – Saturday</strong>

                  <span>Available for international enquiries</span>
                </div>
              </div>
            </div>

            {/* Export Support */}

            <div className="mi9-contact-trust">
              <div className="mi9-contact-trust-icon">
                <PackageCheck size={22} />
              </div>

              <div>
                <strong>Export-ready support</strong>

                <p>
                  From sourcing and quality checks to packaging and distribution
                  coordination.
                </p>
              </div>
            </div>
          </motion.div>

          {/* =================================
              RIGHT SIDE - ENQUIRY FORM
          ================================= */}

          <motion.div
            className="mi9-contact-form-card"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mi9-form-top">
              <div>
                <span>ENQUIRY FORM</span>

                <h3>Tell us what you need.</h3>
              </div>

              <div className="mi9-form-icon">
                <MessageCircle size={22} />
              </div>
            </div>

            {/* =================================
                CONTACT FORM
            ================================= */}

            <form
              id="myForm"
              className="mi9-contact-form"
              action="/contact_valid.php"
              method="POST"
              onSubmit={handleContactSubmit}
              noValidate
            >
              {/* reCAPTCHA Hidden Field */}

              <input
                type="hidden"
                name="recaptcha_token"
                id="recaptcha_token"
                defaultValue=""
              />

              {/* Full Name & Company Name */}

              <div className="mi9-form-row">
                <div className="mi9-form-group">
                  <label htmlFor="mi9-full-name">Full Name</label>

                  <input
                    id="mi9-full-name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    autoComplete="name"
                    maxLength={100}
                    required
                  />
                </div>

                <div className="mi9-form-group">
                  <label htmlFor="mi9-company">Company Name</label>

                  <input
                    id="mi9-company"
                    name="companyName"
                    type="text"
                    placeholder="Company name"
                    autoComplete="organization"
                    maxLength={150}
                  />
                </div>
              </div>

              {/* Email & Phone */}

              <div className="mi9-form-row">
                <div className="mi9-form-group">
                  <label htmlFor="mi9-email">Email Address</label>

                  <input
                    id="mi9-email"
                    name="email"
                    type="email"
                    placeholder="you@company.com"
                    autoComplete="email"
                    maxLength={254}
                    required
                  />
                </div>

                <div className="mi9-form-group">
                  <label htmlFor="mi9-phone">Phone / WhatsApp</label>

                  <input
                    id="mi9-phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 9371095152"
                    autoComplete="tel"
                    maxLength={20}
                    required
                  />
                </div>
              </div>

              {/* Country / Market */}

              <div className="mi9-form-group">
                <label htmlFor="mi9-country">Country / Market</label>

                <select
                  id="mi9-country"
                  name="country"
                  defaultValue=""
                  required
                >
                  <option value="" disabled>
                    Select your market
                  </option>

                  <option value="United Kingdom">United Kingdom</option>

                  <option value="Europe">Europe</option>

                  <option value="Gulf Countries">Gulf Countries</option>

                  <option value="Middle East">Middle East</option>

                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Product / Requirement */}

              <div className="mi9-form-group">
                <label htmlFor="mi9-product">Product / Requirement</label>

                <input
                  id="mi9-product"
                  name="product"
                  type="text"
                  placeholder="What are you looking for?"
                  maxLength={250}
                  required
                />
              </div>

              {/* Message */}

              <div className="mi9-form-group">
                <label htmlFor="mi9-message">Message</label>

                <textarea
                  id="mi9-message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your requirements..."
                  maxLength={2000}
                  required
                />
              </div>

              {/* =================================
                  SUCCESS / ERROR MESSAGE
              ================================= */}

              <div
                id="check1"
                role="status"
                aria-live="polite"
                className={`mi9-form-message ${formStatus.type}`}
                style={{
                  display: formStatus.message ? "block" : "none",
                }}
              >
                {formStatus.message}
              </div>

              {/* =================================
                  SUBMIT BUTTON
              ================================= */}

              <button
                type="submit"
                id="btn_submit"
                className="mi9-contact-submit"
                disabled={isSending}
                aria-busy={isSending}
              >
                <span>{isSending ? "Sending..." : "Send Enquiry"}</span>

                <span className="mi9-submit-icon">
                  {isSending ? (
                    <span className="mi9-form-spinner" />
                  ) : (
                    <Send size={17} />
                  )}
                </span>
              </button>

              {/* Form Note */}

              <div className="mi9-form-note">
                <CheckCircle2 size={15} />

                <span>Your enquiry will be reviewed by our team.</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
