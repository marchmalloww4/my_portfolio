import type { ReactNode } from 'react'
import { otherProjects, smartShelterProject, sentimentAnalysisProject, type Project } from '../data/projects'
import { sentimentDatasetStats, sentimentPipeline } from '../data/sentimentAnalysis'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import Chip from '../components/Chip'
import Reveal from '../components/Reveal'
import FeaturedProject from './FeaturedProject'
import SmartShelterDiagram from '../components/SmartShelterDiagram'
import SentimentModelChart from '../components/charts/SentimentModelChart'
import ConfusionMatrixGrid from '../components/charts/ConfusionMatrixGrid'
import SentimentSplitBar from '../components/charts/SentimentSplitBar'
import { assetPath } from '../lib/assetPath'

// Per-project extra content (diagrams/charts) that don't live in the plain
// data layer. Keyed by slug so otherProjects.map() below stays the single
// source of truth for WHICH projects render here — a project without an
// entry here just renders without extras, instead of needing this file
// edited to appear at all (which previously meant DataPortfolio.tsx and
// this section could silently disagree about which projects exist).
const projectExtras: Record<string, ReactNode> = {
  [smartShelterProject.slug]: <SmartShelterDiagram />,
  [sentimentAnalysisProject.slug]: (
    <>
      <div className="grid grid--3" style={{ marginBottom: 'var(--space-4)' }}>
        <div className="stat">
          <span className="stat__value">{sentimentDatasetStats.totalReviews.toLocaleString()}</span>
          <span className="stat__label">Reviews analyzed</span>
        </div>
        <div className="stat">
          <span className="stat__value">{sentimentDatasetStats.balancedLabels.positive.toLocaleString()} / {sentimentDatasetStats.balancedLabels.negative.toLocaleString()}</span>
          <span className="stat__label">Balanced positive / negative labels</span>
        </div>
        <div className="stat">
          <span className="stat__value">{sentimentPipeline.tool}</span>
          <span className="stat__label">{sentimentPipeline.methodology} pipeline</span>
        </div>
      </div>
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <p style={{ fontWeight: 600, marginBottom: 'var(--space-2)' }}>Model accuracy comparison</p>
        <SentimentModelChart />
      </div>
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <p style={{ fontWeight: 600, marginBottom: 'var(--space-2)' }}>Confusion matrix (best model)</p>
        <ConfusionMatrixGrid />
      </div>
      <div>
        <p style={{ fontWeight: 600, marginBottom: 'var(--space-2)' }}>Overall user sentiment toward Threads</p>
        <SentimentSplitBar />
      </div>
    </>
  ),
}

function ProjectCard({ project, children }: { project: Project; children?: ReactNode }) {
  return (
    <Card>
      <p className="section__eyebrow">{project.category}</p>
      <h3>{project.title}</h3>
      <p className="text-muted" style={{ margin: 'var(--space-2) 0' }}><strong>Problem:</strong> {project.problem}</p>
      <p className="text-muted" style={{ margin: 'var(--space-2) 0' }}><strong>Approach:</strong> {project.approach}</p>
      <p className="text-muted" style={{ margin: 'var(--space-2) 0' }}><strong>Result:</strong> {project.result}</p>
      <div className="chip-row" style={{ margin: 'var(--space-3) 0' }}>
        {project.technologies.map((t) => <Chip key={t}>{t}</Chip>)}
      </div>
      {children}
      {project.image && (
        <img src={assetPath(project.image.src)} alt={project.image.caption} style={{ borderRadius: 'var(--radius-md)', marginTop: 'var(--space-3)', border: '1px solid var(--border)' }} />
      )}
      <div style={{ marginTop: 'var(--space-4)' }}>
        {project.links.map((link) => (
          <a key={link.label} href={link.href} className="btn btn--ghost">{link.label}{link.isPlaceholder ? ' (soon)' : ''}</a>
        ))}
      </div>
    </Card>
  )
}

export default function OtherProjects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading eyebrow="Written Portfolio" title="Featured Project" />
        <FeaturedProject />

        <div style={{ marginTop: 'var(--space-16)' }}>
          <SectionHeading eyebrow="Written Portfolio" title="Other Projects" />
          <div className="grid grid--2">
            {otherProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 0.05}>
                <ProjectCard project={project}>{projectExtras[project.slug]}</ProjectCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
