import ExternalLink from "../_components/ExternalLink";
import { rush } from "./rush";
import styles from "./rush.module.css";

const contacts = [
  { role: "VP Recruitment", ...rush.team.vp },
  ...rush.team.chairs.map((chair) => ({ role: "Rush Chair", ...chair })),
];

export default function OnCycle() {
  return (
    <>
      <section>
        <h2>Current Recruitment</h2>
        <p>Our {rush.term} recruitment cycle is now open!
          
          In order to be eligible, you must be a current sophomore or junior, attend all of the events listed below,
          and submit the <ExternalLink href={rush.appUrl}>written application</ExternalLink> by <b>{rush.appDeadline}</b>.
          We strongly encourage scheduling a <ExternalLink href={rush.chatsUrl}>coffee chat</ExternalLink> with
          one of our executives to learn more about AKPsi.
        </p>
      </section>

      <section>
        <h2>Rush Schedule</h2>
        <div className={styles.events}>
          {rush.events.map((event) => (
            <div key={event.name} className={styles.event}>
              <h3>{event.name}</h3>
              <p>
                {event.date} · {event.time} · {event.location}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section>
          <h2>Contact Information</h2>
          <p>If you have any questions or concerns, please reach out to our rush team.</p>
          <div className={styles.contacts}>
            {contacts.map(({ role, name, email }) => (
              <p key={email}>
                <b>{name}</b>, {role} · <a href={`mailto:${email}`}>{email}</a>
              </p>
            ))}
          </div>
      </section>
    </>
  );
}
