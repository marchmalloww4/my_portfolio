import { fypProject } from '../data/fyp'
import { otherProjects } from '../data/projects'
import { dsc651Analysis, excelPlaceholder } from '../data/dataPortfolio'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import ModelComparisonChart from '../components/charts/ModelComparisonChart'
import ConfusionMatrixGrid from '../components/charts/ConfusionMatrixGrid'
import SentimentSplitBar from '../components/charts/SentimentSplitBar'
import { assetPath } from '../lib/assetPath'

const codingProjects = [
  { title: fypProject.title, result: fypProject.headlineExplanation, links: fypProject.links },
  ...otherProjects.map((p) => ({ title: p.title, result: p.result, links: p.links })),
]

export default function DataPortfolio() {
  return (
    <section id="data-portfolio" className="section">
      <div className="container">
        <SectionHeading eyebrow="Data Portfolio" title="Coding Projects" lede="Problem to approach to technology to result to evidence, for every project above." />
        <div className="grid grid--2">
          {codingProjects.map((p) => (
            <Reveal key={p.title}>
              <Card>
                <h3>{p.title}</h3>
                <p className="text-muted" style={{ margin: 'var(--space-2) 0' }}>{p.result}</p>
                {p.links.map((link) => (
                  <a key={link.label} href={link.href} className="btn btn--ghost">{link.label}{link.isPlaceholder ? ' (soon)' : ''}</a>
                ))}
              </Card>
            </Reveal>
          ))}
        </div>

        <div style={{ marginTop: 'var(--space-16)' }}>
          <SectionHeading eyebrow="Data Portfolio" title="Data Analysis Example" />
          <Reveal>
            <Card>
              <h3>{dsc651Analysis.title}</h3>
              <p className="text-muted" style={{ margin: 'var(--space-1) 0' }}>
                {dsc651Analysis.course} &middot; Group "{dsc651Analysis.group.name}" ({dsc651Analysis.group.size} members) &middot; Supervisor: {dsc651Analysis.group.supervisor}
              </p>
              <p style={{ marginTop: 'var(--space-3)' }}><strong>Question:</strong> <span className="text-muted">{dsc651Analysis.question}</span></p>
              <p style={{ marginTop: 'var(--space-2)' }}><strong>Data:</strong> <span className="text-muted">{dsc651Analysis.data}</span></p>
              <p style={{ marginTop: 'var(--space-2)' }}><strong>Analysis:</strong> <span className="text-muted">{dsc651Analysis.analysis}</span></p>
              <p style={{ marginTop: 'var(--space-2)' }}><strong>Insight:</strong> <span className="text-muted">{dsc651Analysis.insight}</span></p>
              <div className="grid grid--2" style={{ marginTop: 'var(--space-4)' }}>
                {dsc651Analysis.images.map((img) => (
                  <figure key={img.src}>
                    <img src={assetPath(img.src)} alt={img.caption} style={{ borderRadius: 'var(--radius-md)', border: '1px solid var(--border)' }} />
                    <figcaption className="text-muted" style={{ fontSize: '0.85rem', marginTop: 'var(--space-1)' }}>{img.caption}</figcaption>
                  </figure>
                ))}
              </div>
            </Card>
          </Reveal>
        </div>

        <div style={{ marginTop: 'var(--space-16)' }}>
          <SectionHeading eyebrow="Data Portfolio" title="Visualizations" lede="Five real visualizations behind the projects above, each with a one-line takeaway." />
          <div className="grid grid--2">
            <Reveal>
              <Card>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-2)' }}>FYP: Ridge vs. BERT across training stages</p>
                <ModelComparisonChart />
                <p className="text-muted" style={{ marginTop: 'var(--space-2)', fontSize: '0.85rem' }}>Insight: hyperparameter tuning helps BERT but hurts Ridge — the two model families respond oppositely to the same tuning process.</p>
              </Card>
            </Reveal>
            <Reveal delay={0.05}>
              <Card>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-2)' }}>Sentiment Analysis: confusion matrix (best model)</p>
                <ConfusionMatrixGrid />
                <p className="text-muted" style={{ marginTop: 'var(--space-2)', fontSize: '0.85rem' }}>Insight: the model catches positive and negative reviews at almost identical rates (81.3% vs 80.3% recall), so its errors aren't skewed toward missing complaints or praise.</p>
              </Card>
            </Reveal>
            <Reveal delay={0.1}>
              <Card>
                <p style={{ fontWeight: 600, marginBottom: 'var(--space-2)' }}>Sentiment Analysis: overall user sentiment toward Threads</p>
                <SentimentSplitBar />
                <p className="text-muted" style={{ marginTop: 'var(--space-2)', fontSize: '0.85rem' }}>Insight: negative sentiment outweighs positive across the full review corpus, a real risk signal for user retention.</p>
              </Card>
            </Reveal>
            {dsc651Analysis.images.map((img, i) => (
              <Reveal key={img.src} delay={0.15 + i * 0.05}>
                <Card>
                  <img src={assetPath(img.src)} alt={img.caption} style={{ borderRadius: 'var(--radius-md)', border: '1px solid var(--border)', marginBottom: 'var(--space-2)' }} />
                  <p style={{ fontWeight: 600 }}>{img.caption}</p>
                  <p className="text-muted" style={{ fontSize: '0.85rem' }}>From the DSC651 "{dsc651Analysis.group.name}" group report.</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 'var(--space-16)' }}>
          <SectionHeading eyebrow="Data Portfolio" title="Excel" />
          <Reveal>
            <Card>
              <p className="placeholder-note">{excelPlaceholder.status} &mdash; {excelPlaceholder.note}</p>
              <button className="btn btn--ghost btn--disabled" disabled>Download (coming soon)</button>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
