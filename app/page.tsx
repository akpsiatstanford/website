import Link from "next/link";
import ExternalLink from "./_components/ExternalLink";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <main>
      <h1 className={styles.title}>Alpha Kappa Psi</h1>
      <p className={styles.subtitle}>
        Stanford's Premier Co-Ed Professional Business Fraternity
      </p>

      <section>
        <h2>Who We Are</h2>
        <p>
          Since 1904, Alpha Kappa Psi has been the nation's oldest and largest business fraternity.
          AKPsi was founded on the principles of educating the public to appreciate higher ideals in business
          and of furthering the welfare of its members during college and beyond.
        </p>
      </section>

      <section>
        <h2>The Pi Tau Chapter</h2>
        <p>
          Chartered in 1999, the Pi Tau chapter of AKPsi is Stanford's premier co-ed professional business fraternity.
          Our brothers are broadly interested in business-related careers, but come from diverse backgrounds
          and majors across engineering, the humanities, and the sciences.
          We provide valuable resources for academic, professional, and personal success and learn from each other's strengths.
          Most importantly, we pride ourselves on forming deep friendships and mentorships that last well beyond graduation.
          The Pi Tau chapter and its alumni network connect us not only across Stanford but across the nation and the world.
        </p>
      </section>

      <section>
        <h2>Join The Brotherhood</h2>
        <p>
          Learn more about our <Link href="/brotherhood">brothers</Link> and see how AKPsi can help you grow your
          professional career and make the most of your time in college.
          We <Link href="/recruitment">recruit</Link> new members every fall and spring quarter, and we would love to meet you!
          Follow us on <ExternalLink href="https://www.instagram.com/stanford.akpsi/">social media</ExternalLink>{" "} to stay updated.
        </p>
      </section>
    </main>
  );
}
