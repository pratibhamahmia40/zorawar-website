import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />

      <Image
        src="/logo.jpeg"
        alt="Zorawar Footwear"
        width={500}
        height={220}
        priority
        className={styles.logo}
      />

      <div className={styles.rule} aria-hidden="true" />

      <p className={styles.tag}>Kids &amp; Ladies Footwear &nbsp;·&nbsp; India</p>

      <h1 className={styles.headline}>
        Step Into <span>Bold.</span>
        <br />
        Walk With Pride.
      </h1>

      <p className={styles.sub}>
        Handpicked footwear for kids and ladies — where quality craftsmanship
        meets everyday style.
      </p>

      <div className={styles.cta}>
        <Link href="#collections" className={styles.btnPrimary}>
          Explore Collections
        </Link>
        <Link href="#contact" className={styles.btnOutline}>
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
