import fs from "node:fs";
import path from "node:path";
import { parse } from "csv-parse/sync";

export type Member = {
  id: string;
  name: string;
  hometown: string;
  position: string;
  pledgeClass: string;
  major: string;
  gradYear: string;
  bio: string;
  experience: string;
  linkedin: string;
  email: string;
  photo: string | null;
};

type Row = { status: string; member: Member };

const CSV_FILE = "content/members.csv";
const PHOTO_DIR = "public/members";
const COLUMNS = [
  "Name",
  "Hometown",
  "Status",
  "Pledge Class",
  "Major",
  "Grad Year",
  "Bio",
  "Experience",
  "Email",
  "Linkedin",
  "Position",
  "Photo",
];
// Only "active" members appear on the site; the others are kept for records.
const STATUSES = ["active", "hidden"];
const EXEC_POSITIONS = ["Co-President",
  "VP Finance", "VP Administration", "VP Membership", "VP Professional Development",
  "VP External", "VP Recruitment", "VP Alumni Relations", "Social Chair"];

const slugify = (name: string) =>
  name
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function loadRows(): Row[] {
  const records = parse(fs.readFileSync(path.join(process.cwd(), CSV_FILE), "utf8"), {
    columns: (header: string[]) => {
      const missing = COLUMNS.filter((column) => !header.includes(column));
      if (missing.length) {
        throw new Error(`${CSV_FILE} is missing column(s): ${missing.join(", ")}`);
      }
      return header;
    },
    skip_empty_lines: true,
    trim: true,
    bom: true,
    // Hand-edited rows often drop trailing empty values (e.g. a blank Photo).
    relax_column_count: true,
  }) as Partial<Record<string, string>>[];

  const errors: string[] = [];
  const seen = new Set<string>();

  const rows = records.map((record, index) => {
    const field = (column: string) => record[column] ?? "";
    // Spreadsheet row number, counting the header as row 1.
    const where = `${CSV_FILE} row ${index + 2}`;
    const name = field("Name");
    const hometown = field("Hometown");
    const status = field("Status").toLowerCase();
    const photo = field("Photo");
    const linkedin = field("Linkedin");
    const email = field("Email");
    const id = slugify(name);

    if (!name) errors.push(`${where}: Name is blank`);
    if (!hometown) errors.push(`${where}: Hometown is blank`);
    if (!STATUSES.includes(status)) {
      errors.push(
        `${where}: Status must be one of active or hidden; got "${field("Status")}"`,
      );
    }
    if (field("Position") && !EXEC_POSITIONS.includes(field("Position"))) {
      errors.push(
        `${where}: Position "${field("Position")}" isn't in EXEC_POSITIONS (app/brotherhood/members.ts)`,
      );
    }
    if (name && seen.has(id)) errors.push(`${where}: duplicate name "${name}"`);
    seen.add(id);
    if (linkedin && !linkedin.startsWith("https://")) {
      errors.push(`${where}: Linkedin must be a full link starting with https://`);
    }
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errors.push(`${where}: Email "${email}" doesn't look like an email address`);
    }
    if (photo && !fs.existsSync(path.join(process.cwd(), PHOTO_DIR, photo))) {
      errors.push(`${where}: photo "${photo}" not found in ${PHOTO_DIR}/`);
    }

    const member: Member = {
      id,
      name,
      hometown,
      position: field("Position"),
      pledgeClass: field("Pledge Class"),
      major: field("Major"),
      gradYear: field("Grad Year"),
      bio: field("Bio"),
      experience: field("Experience"),
      linkedin,
      email,
      photo: photo ? `/members/${encodeURIComponent(photo)}` : null,
    };
    return { status, member };
  });

  if (errors.length) throw new Error(`Invalid member data:\n${errors.join("\n")}`);

  return rows;
}

const activeMembers = () =>
  loadRows()
    .filter((row) => row.status === "active")
    .map((row) => row.member);

export function getExec(): Member[] {
  return activeMembers()
    .filter((member) => member.position)
    .sort((a, b) => EXEC_POSITIONS.indexOf(a.position) - EXEC_POSITIONS.indexOf(b.position));
}

export function getActives(): Member[] {
  return activeMembers()
    .filter((member) => !member.position)
    .sort((a, b) => a.name.localeCompare(b.name));
}
