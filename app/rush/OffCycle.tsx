import ExternalLink from "../_components/ExternalLink";
import { rush } from "./rush";

export default function OffCycle() {
  return (
    <>
      <section>
        <h2>Current Recruitment</h2>
        <p>
          Our {rush.term} recruitment cycle has ended. If you are interested in rushing AKPsi during
          our next cycle, please check back in {rush.nextTerm} for more details or reach out to our VP
          Recruitment, {rush.team.vp.name}. You can stay updated with AKPsi by following us on{" "}
          <ExternalLink href="https://www.instagram.com/stanford.akpsi/">Instagram</ExternalLink>.
        </p>
      </section>
      
      <section>
          <h2>General Information</h2>
          <p>
            We recruit new members at the beginning of every fall and spring quarter. Only current
            sophomores and juniors are eligible for fall rush, while spring rush is also open to
            freshmen. Prospective new members who are extended a bid subsequently complete the
            quarter-long Leadership Training Program (LTP).
          </p>
        </section>
    </>
  );
}
