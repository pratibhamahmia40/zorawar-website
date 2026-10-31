import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.rule} aria-hidden="true" />
      <div className={styles.bottom}>
          <p className={styles.brand}>ZORAWAR FOOTWEAR</p>
          <p className={styles.gst}>GST: 06CRQPK1752A1ZZ</p>
          <p className={styles.copy}>
          © {year} Zorawar Kids Footwear. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
