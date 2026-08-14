export interface ContactLinks {
  email: string
  linkedin: string
  github: string
  instagram: string
}

export interface ProjectLink {
  label: string
  href: string
  isPlaceholder: boolean
}

export interface SkillGroup {
  title: string
  skills: string[]
  relatedProjectSlugs: string[]
}
