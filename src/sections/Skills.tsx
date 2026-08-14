import { skillGroups } from '../data/skills'
import { fypProject } from '../data/fyp'
import { otherProjects } from '../data/projects'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import Chip from '../components/Chip'
import Reveal from '../components/Reveal'

// Resolves a project slug (as used in skillGroups[].relatedProjectSlugs) to
// its real title, so the Skills section links to human-readable project
// names instead of raw machine identifiers like "fyp-extraverse-ai".
const projectTitles: Record<string, string> = {
  [fypProject.slug]: fypProject.title,
  ...Object.fromEntries(otherProjects.map((p) => [p.slug, p.title])),
}

export default function Skills() {
  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow="Skills" title="What I Work With" lede="Grouped by area, backed by the projects above — not percentages." />
        <div className="grid grid--2">
          {skillGroups.map((group) => (
            <Reveal key={group.title}>
              <Card>
                <h3>{group.title}</h3>
                <div className="chip-row" style={{ margin: 'var(--space-3) 0' }}>
                  {group.skills.map((skill) => <Chip key={skill}>{skill}</Chip>)}
                </div>
                {group.relatedProjectSlugs.length > 0 && (
                  <p className="text-muted" style={{ fontSize: '0.85rem' }}>
                    Demonstrated in:{' '}
                    {group.relatedProjectSlugs.map((slug, i) => (
                      <span key={slug}>
                        {i > 0 && ', '}
                        <a href="#projects">{projectTitles[slug] ?? slug}</a>
                      </span>
                    ))}
                  </p>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
