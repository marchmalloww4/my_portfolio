export interface Certification {
  title: string
  issuer: string
  year: string
  image?: string
  hasFile: boolean
  credentialUrl?: string
}

export const certifications: Certification[] = [
  {
    title: 'Google Cloud Certified Professional Machine Learning Engineer',
    issuer: 'Google Cloud',
    year: '2026',
    image: '/images/certificates/gcp-ml-engineer.png',
    hasFile: true,
  },
  {
    title: 'Bengkel Road to White Hat 4.0',
    issuer: 'UiTM Cyberheroes Club',
    year: '2024',
    image: '/images/certificates/white-hat-4.png',
    hasFile: true,
  },
  {
    title: 'SQL Schema Script Certification',
    issuer: 'Oracle Academy',
    year: '2024',
    hasFile: false,
  },
]
