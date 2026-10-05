"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import ExternalLink from "../_components/ExternalLink";
import { CloseIcon, EmailIcon, LinkedInIcon } from "../_components/icons";
import type { Member } from "./members";
import styles from "./MemberDirectory.module.css";

type Props = {
  exec: Member[];
  actives: Member[];
};

export default function MemberDirectory({ exec, actives }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [selected, setSelected] = useState<Member | null>(null);

  const openMember = (member: Member) => {
    setSelected(member);
    dialogRef.current?.showModal();
  };
  const close = () => dialogRef.current?.close();

  return (
    <>
      <MemberSection title="Executive Committee" members={exec} onSelect={openMember} />
      <MemberSection title="Active Members" members={actives} onSelect={openMember} />

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-labelledby="member-dialog-name"
        // The dialog has no padding, so a click whose target is the dialog itself landed on the backdrop.
        onClick={(event) => {
          if (event.target === event.currentTarget) close();
        }}
      >
        {selected && (
          <div className={styles.dialogBody}>
            <button
              type="button"
              className={styles.closeButton}
              aria-label="Close"
              onClick={close}
            >
              <CloseIcon />
            </button>
            <div className={styles.dialogAside}>
              <div className={`${styles.photo} ${styles.dialogPhoto}`}>
                <Photo key={selected.id} member={selected} sizes="384px" />
              </div>
              {(selected.linkedin || selected.email) && (
                <div className={styles.contactLinks}>
                  {selected.linkedin && (
                    <ExternalLink
                      href={selected.linkedin}
                      className={styles.contactLink}
                      aria-label={`${selected.name} on LinkedIn`}
                    >
                      <LinkedInIcon />
                    </ExternalLink>
                  )}
                  {selected.email && (
                    <a
                      href={`mailto:${selected.email}`}
                      className={styles.contactLink}
                      aria-label={`Email ${selected.name}`}
                    >
                      <EmailIcon />
                    </a>
                  )}
                </div>
              )}
            </div>
            <div className={styles.dialogInfo}>
              <h2 id="member-dialog-name">{selected.name}</h2>
              {selected.position && <p className={styles.position}>{selected.position}</p>}
              <DetailLine
                values={[
                  selected.hometown,
                  selected.pledgeClass && `${selected.pledgeClass} Pledge Class`,
                ]}
              />
              <DetailLine values={[selected.major, selected.gradYear]} />
              {selected.bio && (
                <div className={styles.bio}>
                  {selected.bio.split(/\n\s*\n/).map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              )}
              {selected.experience && (
                <p className={styles.experience}>
                  <b>Experience:</b> {selected.experience}
                </p>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}

function MemberSection({
  title,
  members,
  onSelect,
}: {
  title: string;
  members: Member[];
  onSelect: (member: Member) => void;
}) {
  if (members.length === 0) return null;

  return (
    <section>
      <h2>{title}</h2>
      <ul className={styles.grid}>
        {members.map((member) => (
          <li key={member.id}>
            <button type="button" className={styles.tile} onClick={() => onSelect(member)}>
              <span className={styles.photo}>
                <Photo member={member} sizes="192px" />
              </span>
              <span className={styles.name}>{member.name}</span>
              {member.position && <span className={styles.position}>{member.position}</span>}
              <span className={styles.hometown}>{member.hometown}</span>
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

function DetailLine({ values }: { values: string[] }) {
  const text = values.filter(Boolean).join(" · ");
  return text ? <p>{text}</p> : null;
}

function Photo({ member, sizes }: { member: Member; sizes: string }) {
  if (member.photo) {
    return <Image src={member.photo} alt="" fill sizes={sizes} className={styles.photoImage} />;
  }

  const words = member.name.split(/\s+/);
  const initials = words.length > 1 ? words[0][0] + words[words.length - 1][0] : words[0][0];
  return (
    <span className={styles.initials} aria-hidden="true">
      {initials}
    </span>
  );
}
