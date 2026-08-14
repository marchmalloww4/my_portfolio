import type { ProjectLink } from './types'

export interface Project {
  slug: string
  title: string
  category: string
  problem: string
  approach: string
  technologies: string[]
  result: string
  image?: { src: string; caption: string }
  links: ProjectLink[]
}

export const smartShelterProject: Project = {
  slug: 'smart-shelter',
  title: 'Dual Smart Automation System for Clothes Drying and Parcel Protection',
  category: 'IoT / Embedded Systems',
  problem:
    'Clothes left out to dry and parcels left on doorsteps are both exposed to sudden rain and, for parcels, theft — with no automated way to react in real time.',
  approach:
    'An Arduino Uno R4 WiFi system runs two coordinated automations: a rain sensor triggers a servo motor to rotate the clothesline 90° under the roof the moment rain is detected, while IR and ultrasonic sensors detect an arriving parcel and trigger a pulley system that pulls the parcel box under shelter. Built with Blynk IoT for monitoring, in C++.',
  technologies: ['Arduino UNO R4 WiFi', 'Blynk IoT Platform', 'Rain Sensor', 'IR + Ultrasonic Sensors', 'Servo Motors', 'C++'],
  result:
    'Working prototype demonstrating automatic, real-time response to both rainfall (clothesline protection) and parcel arrival (parcel protection) without manual intervention.',
  image: { src: '/images/projects/smart-shelter.jpg', caption: 'Smart Shelter IoT prototype (ITT569)' },
  links: [{ label: 'View GitHub', href: '#', isPlaceholder: true }],
}

export const sentimentAnalysisProject: Project = {
  slug: 'sentiment-analysis-threads',
  title: 'Sentiment Analysis of Threads App Reviews',
  category: 'NLP / Data Analytics',
  problem:
    'Threads app reviews generate a large volume of unstructured user opinion; manually reading through it to gauge sentiment is impractical at scale.',
  approach:
    'Group project (BizQueens, ISP610 Business Data Analytics, 4 members, supervised by Dr Ruhaila Binti Maskat). Built a RapidMiner pipeline following CRISP-DM: ~40,000 Kaggle-sourced Threads reviews (Google Play + Apple App Store), labeled by star rating, cleaned and TF-IDF vectorized, then compared four classifiers — SVM, Naive Bayes, Logistic Regression, and Deep Learning.',
  technologies: ['RapidMiner', 'CRISP-DM', 'TF-IDF', 'SVM', 'Naive Bayes', 'Logistic Regression', 'Deep Learning'],
  result:
    'Deep Learning was the best-performing model at 80.79% accuracy. The full-corpus sentiment analysis found users lean negative overall (55.8% negative vs 44.2% positive), a real business insight the group used to recommend prioritizing performance/usability fixes.',
  links: [{ label: 'View GitHub', href: '#', isPlaceholder: true }],
}

export const tuberculosisProject: Project = {
  slug: 'tuberculosis-diagnostic-system',
  title: 'Tuberculosis Diagnostic System',
  category: 'Rule-Based AI Expert System',
  problem:
    'Early tuberculosis diagnosis benefits from a structured way to reason over symptoms and diagnostic criteria, especially as a teaching example of classical (non-ML) AI.',
  approach:
    'A 4-person group project building a rule-based expert system. I built the system on the Anvil platform, and collaboratively designed the rule-based inference logic and built the knowledge base together with my teammates.',
  technologies: ['Anvil', 'Rule-Based Inference', 'Knowledge Base Design'],
  result:
    'A working expert system that walks through an inference chain from symptoms to a final diagnostic conclusion.',
  image: { src: '/images/projects/tuberculosis-outcome-1.jpg', caption: 'System outcome screen' },
  links: [{ label: 'View GitHub', href: '#', isPlaceholder: true }],
}

export const otherProjects: Project[] = [smartShelterProject, sentimentAnalysisProject, tuberculosisProject]
