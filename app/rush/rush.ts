export type RushEvent = {
  name: string;
  date: string;
  time: string;
  location: string;
};

export type RushContact = {
  name: string;
  email: string;
};

// Set `open` to true when a rush cycle starts and back to false when it ends.
// Update the relevant contacts, events, times, links, etc. for the current cycle.
export const rush = {
  open: true,
  term: "Fall 2026",
  nextTerm: "Spring 2027",
  team: {
    vp: { name: "Sophia Li", email: "sxphiali@stanford.edu" } satisfies RushContact,
    chairs: [
      { name: "Hyungjae Kim", email: "hyungjae@stanford.edu" },
      { name: "Jenny Li", email: "jennyl06@stanford.edu" },
      { name: "Mary Yoon", email: "maryyoon@stanford.edu" },
    ] satisfies RushContact[],
  },
  chatsUrl: "https://docs.google.com/spreadsheets/d/1h-FmwX7Eddp2vVpO_Gn_J9ejHiIx0gk5Rstcmiyas8s/edit?gid=0#gid=0",
  appUrl: "https://docs.google.com/forms/d/1TKKIueMtNhXdX3qRfcT3jWaptX2BXqDjgY9B5NQYAVo/closedform",
  appDeadline: "9:00pm on Tuesday, September 29",
  events: [
    {
      name: "Info Session",
      date: "Sunday, September 27",
      time: "7:30pm – 9:00pm",
      location: "EVGR B144",
    },
    {
      name: "Speed Dating",
      date: "Monday, September 28",
      time: "7:30pm – 9:00pm",
      location: "Lathrop Basement",
    },
    {
      name: "Alumni Panel",
      date: "Tuesday, September 29",
      time: "7:30pm – 9:30pm",
      location: "200-002 (Lane)",
    },
    {
      name: "Meet the Actives",
      date: "Wednesday, September 30",
      time: "7:30pm – 9:30pm",
      location: "Invite-only",
    },
  ] satisfies RushEvent[],
};
