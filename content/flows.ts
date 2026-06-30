export interface FlowStep {
  number: number;
  title: string;
  description: string;
  isLive?: boolean;
}

export interface StakeholderFlow {
  id: string;
  label: string;
  subtitle: string;
  steps: FlowStep[];
  footnote?: string;
}

export const flowsIntro = "Three roles, one clean loop.";

export const stakeholderFlows: StakeholderFlow[] = [
  {
    id: "pharmacy",
    label: "Pharmacy",
    subtitle: "The hub operator",
    steps: [
      {
        number: 1,
        title: "Onboard & verify",
        description:
          "Owner details, certificate, Aadhaar/PAN. Identity auto-verified; field team helps set up in person.",
      },
      {
        number: 2,
        title: "Register patient",
        description:
          "Mobile number → ABHA fetched or created → form pre-filled. Consent captured via patient OTP.",
      },
      {
        number: 3,
        title: "Capture complaint + vitals",
        description:
          "Pharmacist records complaint and vitals. Nothing clinical — that's the doctor's job.",
      },
      {
        number: 4,
        title: "Select doctor",
        description:
          "Available doctors bid in real time; pharmacist picks by qualification and fee.",
        isLive: true,
      },
      {
        number: 5,
        title: "Consult",
        description:
          "Verified specialist joins live with intake pre-loaded on screen.",
        isLive: true,
      },
      {
        number: 6,
        title: "Print Rx + dispense",
        description:
          "Signed prescription prints; pharmacist dispenses medicine on the spot.",
      },
      {
        number: 7,
        title: "Send secure record link",
        description:
          "Record link delivered via WhatsApp / SMS / email. PHI never in the message body.",
      },
      {
        number: 8,
        title: "Upload diagnostic reports",
        description:
          "Diagnostic reports attached to the patient's ABHA-linked record.",
      },
    ],
  },
  {
    id: "patient",
    label: "Patient",
    subtitle: "Passive in Phase 1 — no app to learn",
    steps: [
      {
        number: 1,
        title: "Walk in",
        description:
          "Patient visits the local pharmacy, exactly as they do today.",
      },
      {
        number: 2,
        title: "Consent OTP",
        description:
          "A one-time OTP to the patient's phone = identity + consent + timestamp in one step.",
      },
      {
        number: 3,
        title: "ABHA fetch/create",
        description:
          "Health ID fetched, or created with assistance. Graceful degradation if not available immediately.",
      },
      {
        number: 4,
        title: "Consult via pharmacy",
        description:
          "Connected to a verified specialist through the pharmacy screen.",
        isLive: true,
      },
      {
        number: 5,
        title: "Receive medicine + Rx",
        description:
          "Medicine handed over locally; signed prescription printed.",
      },
      {
        number: 6,
        title: "Follow-up via secure link",
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
    steps: [
      {
        number: 1,
        title: "Onboard",
        description:
          "Personal details, medical certificate, Aadhaar, photo, and medical-council registration number.",
      },
      {
        number: 2,
        title: "Verify",
        description:
          "Licence auto-checked; liveness face-match confirms identity. Fully verified before going live.",
      },
      {
        number: 3,
        title: "Set profile",
        description:
          "Specialty, qualification, languages spoken, default consultation fee.",
      },
      {
        number: 4,
        title: "Go live",
        description:
          "A simple availability toggle. Live patient requests appear in the dashboard immediately.",
        isLive: true,
      },
      {
        number: 5,
        title: "Bid",
        description:
          "Respond to a request with a fee. Accepting is atomic — row-level lock prevents double-booking.",
        isLive: true,
      },
      {
        number: 6,
        title: "Consult",
        description:
          "Video call with the patient's intake already on screen.",
        isLive: true,
      },
      {
        number: 7,
        title: "Write note + signed Rx",
        description:
          "Clinical note written; prescription stamped with registration number and immutable audit log.",
      },
      {
        number: 8,
        title: "Follow-up",
        description:
          "Returning patients route back to the same doctor.",
      },
    ],
    footnote:
      "A salaried house-doctor team acts as guaranteed fallback — if no specialist accepts within the window, a Wellity doctor is auto-assigned. The marketplace is never empty.",
  },
];
