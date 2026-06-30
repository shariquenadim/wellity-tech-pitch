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

export const flowsIntro = "Three roles. One clean loop.";

export const stakeholderFlows: StakeholderFlow[] = [
  {
    id: "pharmacy",
    label: "Pharmacy",
    subtitle: "The hub operator",
    steps: [
      {
        number: 1,
        title: "Onboard",
        description:
          "Owner details, certificate, Aadhaar/PAN. Identity auto-verified; field team helps set up in person.",
      },
      {
        number: 2,
        title: "Verify",
        description:
          "Admin approval under 24 hrs, then dashboard access.",
      },
      {
        number: 3,
        title: "Register patient",
        description:
          "Mobile number → ABHA fetched or created → form pre-filled. (consent captured via patient OTP)",
      },
      {
        number: 4,
        title: "Capture intake",
        description:
          "Pharmacist records complaint + vitals. Nothing clinical — that's the doctor's job.",
      },
      {
        number: 5,
        title: "Select doctor",
        description:
          "Available doctors bid in real time; pharmacist picks by qualification and fee.",
        isLive: true,
      },
      {
        number: 6,
        title: "Consult",
        description:
          "Video call connects patient and doctor.",
        isLive: true,
      },
      {
        number: 7,
        title: "Dispense & send",
        description:
          "Print the signed prescription, hand over medicine, and send a secure record link by WhatsApp / SMS / email.",
      },
      {
        number: 8,
        title: "Upload results",
        description:
          "Diagnostic reports attached to the patient's record.",
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
        title: "Consent",
        description:
          "A one-time OTP to the patient's phone confirms identity and permission.",
      },
      {
        number: 3,
        title: "Health ID",
        description:
          "ABHA fetched, or created with assistance if they don't have one.",
      },
      {
        number: 4,
        title: "Consultation",
        description:
          "Connected to a verified doctor through the pharmacy.",
        isLive: true,
      },
      {
        number: 5,
        title: "Receive care",
        description:
          "Medicine handed over locally; prescription printed.",
      },
      {
        number: 6,
        title: "Stay in the loop",
        description:
          "Reports and follow-up reminders via a secure link (WhatsApp → SMS → email). No smartphone? The pharmacy handles everything in person.",
      },
    ],
    footnote:
      "Two patient-initiated flows — nearest-facility home visits and direct emergency consults — are planned for later phases, with the clinical and legal safeguards they require.",
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
          "Personal + contact details, medical certificate, Aadhaar, photo, and medical-council registration number.",
      },
      {
        number: 2,
        title: "Verify",
        description:
          "Identity and licence auto-checked; a live selfie is matched to the ID.",
      },
      {
        number: 3,
        title: "Set profile",
        description:
          "Specialty, qualification, languages, default consultation fee.",
      },
      {
        number: 4,
        title: "Go live",
        description:
          "A simple availability toggle. Live patient requests appear in the dashboard.",
        isLive: true,
      },
      {
        number: 5,
        title: "Bid",
        description:
          "Respond to a request with a fee (adjustable to the case). Accepting is atomic — no double-booking.",
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
        title: "Record & prescribe",
        description:
          "Write the clinical note; generate a prescription stamped with the doctor's signature, registration number and an immutable audit trail.",
      },
      {
        number: 8,
        title: "Follow up",
        description:
          "Returning patients route back to the same doctor.",
      },
    ],
    footnote:
      "A house-doctor team acts as guaranteed fallback — if no specialist accepts within the window, a Wellity doctor is auto-assigned, so the patient is never left waiting.",
  },
];
