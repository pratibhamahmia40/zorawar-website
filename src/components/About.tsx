import styles from "./About.module.css";

const stats = [
  { num: "5000+", label: "Styles in Store" },
  { num: "All",  label: "Sizes Available" },
  { num: "Kids", label: "& Ladies Range" },
  { num: "100%", label: "Quality Assured" },
];

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.label}>About Us</p>
          <h2 className={styles.title}>
            Rooted in <span>Trust</span>
          </h2>
          <p>
            Zorawar Footwear has been serving families with quality kids and
            ladies footwear. We believe that every step a child takes and every
            stride a woman makes deserves the right pair of shoes.
          </p>
          <p>
            Our store carries a wide range of styles, sizes, and price points —
            because great footwear should be accessible to everyone.
          </p>
          <p className={styles.note}>
            Online store launching soon — browse and order from the comfort of
            your home.
          </p>
        </div>

        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.statBox}>
              <p className={styles.statNum}>{s.num}</p>
              <p className={styles.statLabel}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
