"use client";

import styles from "./Contact.module.css";

const infoRows = [
  {
    icon: "📍",
    label: "Address",
    value: "Railway Road, Yamunanagar,\nHaryana 135001, India",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+91 78560 77777",
  },
  {
    icon: "✉️",
    label: "Email",
    value: "zorawarkidsfootwear@gmail.com",
  },
  {
    icon: "🕐",
    label: "Store Hours",
    value: "Open Daily: 10 AM – 10 PM",
  },
];

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.inner}>

        {/* Left — store info */}
        <div className={styles.info}>
          <p className={styles.label}>Find Us</p>
          <h2 className={styles.title}>
            Visit the <span>Store</span>
          </h2>

          {infoRows.map((row) => (
            <div key={row.label} className={styles.infoRow}>
              <div className={styles.infoIcon}>{row.icon}</div>
              <div className={styles.infoText}>
                <strong>{row.label}</strong>
                <span>
                  {row.value.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < row.value.split("\n").length - 1 && <br />}
                    </span>
                  ))}
                </span>
              </div>
            </div>
          ))}

          <div className={styles.socialRow}>
            <a
              href="https://www.instagram.com/zorawarkidsfootwear"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
            >
              Instagram
            </a>
            <a
              href="https://www.facebook.com/Zorawarkidsfootwear2018"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Right — enquiry form */}
        <div className={styles.formWrap}>
          <p className={styles.label}>Send a Message</p>
          <div className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.field}>
                <label htmlFor="name">Your Name</label>
                <input id="name" type="text" placeholder="Full name" />
              </div>
              <div className={styles.field}>
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="category">I&apos;m Looking For</label>
              <select id="category" defaultValue="">
                <option value="" disabled>Select category</option>
                <option>Kids Footwear</option>
                <option>Ladies Footwear</option>
                <option>Both</option>
                <option>Something else</option>
              </select>
            </div>
            <div className={styles.field}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                placeholder="Tell us what you're looking for — size, style, occasion..."
              />
            </div>
            <button type="button" className={styles.btnPrimary}>
              Send Enquiry
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
