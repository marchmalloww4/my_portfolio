export interface ActivityEntry {
  role: string
  organization: string
  year: string
  description: string
  evidenceImage?: string
}

// Source: resume "LEADERSHIP & VOLUNTEER EXPERIENCES" and
// "COMPETITIONS & ACTIVITIES" sections, read directly this session.
// evidenceImage paths reference Task 6's certificate output filenames —
// update these if Task 6 named the files differently.
export const activities: ActivityEntry[] = [
  {
    role: 'Naib Yang Dipertua II (NYDP-II)',
    organization: 'GPMS UiTM Shah Alam',
    year: '2025 - Present',
    description: 'Led and coordinated student programs and activities.',
  },
  {
    role: 'Penolong Ketua Fasilitator',
    organization: 'Kem Remaja Berilmu 2026',
    year: '2026',
    description: 'Guided students in leadership and group activities.',
    evidenceImage: '/images/certificates/sijil-fasilitator.png',
  },
  {
    role: 'Program Leader & Facilitator',
    organization: 'Horizon Camp 2025',
    year: '12-14 Dec 2025',
    description: 'Organized and managed leadership camp activities, at Havarri Campsite, Bentong Pahang.',
    evidenceImage: '/images/certificates/horizon-camp-2025.png',
  },
  {
    role: 'Event Committee',
    organization: "MELATI's Inspiring Resilience: Leadership with Heart",
    year: '2025',
    description: 'Assisted in event planning and coordination.',
    evidenceImage: '/images/certificates/melati-inspiring-resilience.png',
  },
  {
    role: 'Secretariat Membership & Relations Secretary',
    organization: 'GPMS UiTM Shah Alam',
    year: '2024 - 2025',
    description: 'Managed membership coordination and communication activities.',
  },
  {
    role: 'Member',
    organization: 'UiTM Cyberheroes Club (UCC)',
    year: '2024 - Present',
    description: 'Participated in cybersecurity-related activities and programs.',
    evidenceImage: '/images/certificates/white-hat-4.png',
  },
  {
    role: 'Member',
    organization: 'Emergency Response Team (ERT)',
    year: '2024 - Present',
    description: 'Participated in campus safety and emergency readiness activities.',
  },
  {
    role: 'Hackathon Participant (Team NAK4S)',
    organization: 'CodeNection 2025',
    year: '2025',
    description: 'Developed AI-driven solutions in a team-based hackathon environment.',
    evidenceImage: '/images/certificates/codenection-2025-cert.png',
  },
  {
    role: 'Volunteer',
    organization: 'GPMS Kenegaraan Malaysia Madani Siri 2',
    year: '2025',
    description: 'Participated in a national leadership/civics program.',
    evidenceImage: '/images/certificates/gpms-kenegaraan.png',
  },
  {
    role: 'Participant',
    organization: 'Seminar Kenegaraan Malaysia Madani (Road Tour Maxis)',
    year: '25 Oct 2025',
    description: 'National civics seminar.',
    evidenceImage: '/images/certificates/road-tour-maxis.png',
  },
  {
    role: 'Participant',
    organization: 'November Bulan Keluarga Kebangsaan (LPPKN)',
    year: '8-9 Nov 2025',
    description: 'National family-month program.',
    evidenceImage: '/images/certificates/nbkk25.png',
  },
  {
    role: 'Volunteer',
    organization: 'Jumbo Game Project 2.0, Faculty of Sports Science and Recreation',
    year: '16 Dec 2023',
    description: 'Event volunteer.',
    evidenceImage: '/images/certificates/jumbo-game.png',
  },
  {
    role: 'Participant',
    organization: 'Bengkel Inovasi 1.0: Empowering Student Entrepreneurs',
    year: '20 Apr 2024',
    description: 'Entrepreneurship workshop.',
    evidenceImage: '/images/certificates/inovasi-1.png',
  },
  {
    role: 'UiTM Delegate',
    organization: 'Festival Idea Putrajaya 2025 (FOI)',
    year: '2025',
    description: 'Represented UiTM in a national innovation and technology event.',
  },
  {
    role: 'Participant',
    organization: 'PETRONAS PESP Elevate 2026',
    year: '2026',
    description: 'Leadership and innovation development program.',
  },
  {
    role: 'Participant',
    organization: 'ProSolve International 2026 - Competitive Programming Contest',
    year: '2026',
    description: 'National-level competitive programming contest focused on algorithmic problem-solving.',
  },
  {
    role: 'Participant',
    organization: 'ICYOUTH 2026 Hackathon - AI Pose Estimation System',
    year: '2026',
    description: 'Applied computer vision concepts for posture detection and movement analysis.',
  },
  {
    role: 'Participant',
    organization: 'Trailblazer Camp 2024',
    year: '2024',
    description: 'Leadership and self-development activities.',
  },
  {
    role: 'Competitor',
    organization: 'Inter-Faculty Sports Tournament (SAF) & Sukan Antara Kolej (SUKOL)',
    year: '2024',
    description: 'Competed in Petanque, Ping Pong, and Running events.',
  },
  {
    role: 'Participant',
    organization: 'SIGMA Leadership Camp 2025',
    year: '2025',
    description: 'Multi-university leadership program.',
  },
]
