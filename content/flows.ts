export interface FlowStep {
  number: number;
  title: string;
  description: string;
  isLive?: boolean;
  icon: FlowIcon;
}

export interface StakeholderFlow {
  id: string;
  label: string;
  subtitle: string;
  summary: [string, string, string];
  steps: FlowStep[];
  footnote?: string;
}

export type FlowIcon =
  | "id-card"
  | "user-plus"
  | "clipboard-heart"
  | "radio"
  | "video"
  | "file-signature"
  | "send"
  | "upload-cloud"
  | "footprints"
  | "shield-check"
  | "user-check"
  | "toggle"
  | "gavel"
  | "repeat";

export const flowsIntro = "Three roles, one clean loop.";

export const stakeholderFlows: StakeholderFlow[] = [
  {
    id: "pharmacy",
    label: "Pharmacy",
    subtitle: "The hub operator",
    summary: ["Intake", "Live consult", "Dispense & record"],
    steps: [
      {
        number: 1,
        title: "Onboard & verify",
        icon: "id-card",
        description:
          "Owner details, certificate, Aadhaar/PAN. Identity auto-verified; field team helps set up in person.",
      },
      {
        number: 2,
        title: "Register patient",
        icon: "user-plus",
        description:
          "Mobile number → ABHA fetched or created → form pre-filled. Consent captured via patient OTP.",
      },
      {
        number: 3,
        title: "Capture complaint + vitals",
        icon: "clipboard-heart",
        description:
          "Pharmacist records complaint and vitals. Nothing clinical — that's the doctor's job.",
      },
      {
        number: 4,
        title: "Select doctor",
        icon: "radio",
        description:
          "Available doctors bid in real time; pharmacist picks by qualification and fee.",
        isLive: true,
      },
      {
        number: 5,
        title: "Consult",
        icon: "video",
        description:
          "Verified specialist joins live with intake pre-loaded on screen.",
        isLive: true,
      },
      {
        number: 6,
        title: "Print Rx + dispense",
        icon: "file-signature",
        description:
          "Signed prescription prints; pharmacist dispenses medicine on the spot.",
      },
      {
        number: 7,
        title: "Send secure record link",
        icon: "send",
        description:
          "Record link delivered via WhatsApp / SMS / email. PHI never in the message body.",
      },
      {
        number: 8,
        title: "Upload diagnostic reports",
        icon: "upload-cloud",
        description:
          "Diagnostic reports attached to the patient's ABHA-linked record.",
      },
    ],
  },
  {
    id: "patient",
    label: "Patient",
    subtitle: "Passive in Phase 1 — no app to learn",
    summary: ["Walk in", "Live consult", "Medicine + follow-up"],
    steps: [
      {
        number: 1,
        title: "Walk in",
        icon: "footprints",
        description:
          "Patient visits the local pharmacy, exactly as they do today.",
      },
      {
        number: 2,
        title: "Consent OTP",
        icon: "shield-check",
        description:
          "A one-time OTP to the patient's phone = identity + consent + timestamp in one step.",
      },
      {
        number: 3,
        title: "ABHA fetch/create",
        icon: "id-card",
        description:
          "Health ID fetched, or created with assistance. Graceful degradation if not available immediately.",
      },
      {
        number: 4,
        title: "Consult via pharmacy",
        icon: "video",
        description:
          "Connected to a verified specialist through the pharmacy screen.",
        isLive: true,
      },
      {
        number: 5,
        title: "Receive medicine + Rx",
        icon: "file-signature",
        description:
          "Medicine handed over locally; signed prescription printed.",
      },
      {
        number: 6,
        title: "Follow-up via secure link",
        icon: "send",
        description:
          "Reports and follow-up reminders via authenticated link. No smartphone? The pharmacy handles everything in person.",
      },
    ],
    footnote:
      "Home-visit and emergency direct-call flows are later phases, with the clinical and legal safeguards they require.",
  },
  {
    id: "doctor",
    label: "Doctor",
    subtitle: "The verified specialist",
    summary: ["Verify", "Go live + consult", "Signed Rx + follow-up"],
    steps: [
      {
        number: 1,
        title: "Onboard",
        icon: "id-card",
        description:
          "Personal details, medical certificate, Aadhaar, photo, and medical-council registration number.",
      },
      {
        number: 2,
        title: "Verify",
        icon: "user-check",
        description:
          "Licence auto-checked; liveness face-match confirms identity. Fully verified before going live.",
      },
      {
        number: 3,
        title: "Set profile",
        icon: "clipboard-heart",
        description:
          "Specialty, qualification, languages spoken, default consultation fee.",
      },
      {
        number: 4,
        title: "Go live",
        icon: "toggle",
        description:
          "A simple availability toggle. Live patient requests appear in the dashboard immediately.",
        isLive: true,
      },
      {
        number: 5,
        title: "Bid",
        icon: "gavel",
        description:
          "Respond to a request with a fee. Accepting is atomic — row-level lock prevents double-booking.",
        isLive: true,
      },
      {
        number: 6,
        title: "Consult",
        icon: "video",
        description:
          "Video call with the patient's intake already on screen.",
        isLive: true,
      },
      {
        number: 7,
        title: "Write note + signed Rx",
        icon: "file-signature",
        description:
          "Clinical note written; prescription stamped with registration number and immutable audit log.",
      },
      {
        number: 8,
        title: "Follow-up",
        icon: "repeat",
        description:
          "Returning patients route back to the same doctor.",
      },
    ],
    footnote:
      "A salaried house-doctor team acts as guaranteed fallback — if no specialist accepts within the window, a Wellity doctor is auto-assigned. The marketplace is never empty.",
  },
];
