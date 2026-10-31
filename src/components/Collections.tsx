import styles from "./Collections.module.css";

const cards = [
  {
    icon: "👟",
    name: "Kids Footwear",
    desc: "From school shoes to weekend sneakers — durable, comfortable, and built for the energy of growing children. Available across all sizes.",
    accent: false,
  },
  {
    icon: "👠",
    name: "Ladies Footwear",
    desc: "Flats, heels, sandals, and casual styles — curated for every occasion. Elegance that never compromises on comfort.",
    accent: true,
  },
  {
    icon: "🏅",
    name: "Quality You Can Feel",
    desc: "Every pair is selected for material quality and finish. We carry designs that go beyond the first season.",
    accent: false,
  },
];

export default function Collections() {
  return (
    <section className={styles.section} id="collections">
      <div className={styles.inner}>
        <p className={styles.label}>What We Offer</p>
        <h2 className={styles.title}>
          Collections for <span>Every Step</span>
        </h2>
        <div className={styles.grid}>
          {cards.map((card) => (
            <div key={card.name} className={styles.card}>
              <span className={styles.icon}>{card.icon}</span>
              <p className={`${styles.cardName} ${card.accent ? styles.pink : ""}`}>
                {card.name}
              </p>
              <p className={styles.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
