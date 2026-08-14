export interface GalleryItem {
  src: string
  event: string
  role: string
  year: string
  category: string
}

export const galleryItems: GalleryItem[] = [
  { src: '/images/gallery/horizon-camp-2025.jpg', event: 'Horizon Camp 2025', role: 'Program Leader & Facilitator', year: '2025', category: 'Leadership / Camps' },
  { src: '/images/gallery/gpms-mesyuarat-agung.jpg', event: 'Mesyuarat Agung Kali ke-50, GPMS Club', role: 'MC', year: '2025', category: 'Leadership / University Activities' },
  { src: '/images/gallery/codenection-2025.jpg', event: 'CodeNection 2025', role: 'Hackathon Participant (Team NAK4S)', year: '2025', category: 'Competitions / Hackathons' },
  { src: '/images/gallery/itt569-iot-project.jpg', event: 'ITT569 IoT Project', role: 'Developer', year: '2026', category: 'University Activities' },
]

export const galleryCategories = [
  'All',
  'Leadership / Camps',
  'Leadership / University Activities',
  'Competitions / Hackathons',
  'University Activities',
]
