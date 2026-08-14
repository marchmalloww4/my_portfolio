import { fypProject } from '../data/fyp'
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import Chip from '../components/Chip'
import ModelComparisonChart from '../components/charts/ModelComparisonChart'
import { assetPath } from '../lib/assetPath'

export default function FeaturedProject() {
  return (
    <div className="featured-project">
      <Reveal>
        <img src={assetPath(fypProject.frontPageImage)} alt="FYP report front page" className="featured-project__cover" />
      </Reveal>

      <Reveal delay={0.05}>
        <div className="featured-project__intro">
          <p className="section__eyebrow">Final Year Project &middot; Most prominent build</p>
          <h2>{fypProject.title}</h2>
          <p className="text-muted" style={{ marginTop: 'var(--space-2)' }}>{fypProject.traitScope}</p>
          <p style={{ marginTop: 'var(--space-3)', fontWeight: 700, color: 'var(--accent)' }}>
            Prototype interface: {fypProject.productName}
          </p>
          <div className="chip-row" style={{ marginTop: 'var(--space-4)' }}>
            {fypProject.technologies.map((tech) => <Chip key={tech}>{tech}</Chip>)}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <Card>
          <h3>Project Overview</h3>
          <p className="text-muted">{fypProject.overview}</p>
          <p style={{ marginTop: 'var(--space-3)', fontSize: '0.9rem' }}>
            <strong>Role:</strong> {fypProject.role} &middot; {fypProject.institution} &middot; Supervisor: {fypProject.supervisor}
          </p>
        </Card>
      </Reveal>

      <Reveal delay={0.15}>
        <Card>
          <h3>Methodology</h3>
          <ol className="methodology-flow">
            {fypProject.methodologySteps.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </Card>
      </Reveal>

      <Reveal delay={0.2}>
        <Card>
          <h3>Evaluation — Ridge Regression vs. BERT Regression, across 3 training stages</h3>
          <p className="text-muted" style={{ marginBottom: 'var(--space-4)' }}>
            Held-out evaluation set. BERT Hyper-Tune is the strongest configuration overall.
          </p>
          <ModelComparisonChart />
        </Card>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="grid grid--3">
          <div className="stat">
            <span className="stat__value">{fypProject.headline.r2.toFixed(4)}</span>
            <span className="stat__label">Best R&sup2; ({fypProject.headline.model})</span>
          </div>
          <div className="stat">
            <span className="stat__value">{fypProject.headline.mae.toFixed(4)}</span>
            <span className="stat__label">Best MAE</span>
          </div>
          <div className="stat">
            <span className="stat__value">{fypProject.headline.rmse.toFixed(4)}</span>
            <span className="stat__label">Best RMSE</span>
          </div>
        </div>
        <p className="text-muted" style={{ marginTop: 'var(--space-4)' }}>{fypProject.headlineExplanation}</p>
      </Reveal>

      <Reveal delay={0.3}>
        <Card>
          <h3>Prediction Interface — {fypProject.productName}</h3>
          <div className="grid grid--2">
            <figure>
              <img src={assetPath(fypProject.interfaceImages.main.src)} alt={fypProject.interfaceImages.main.caption} className="featured-project__screenshot" />
              <figcaption className="text-muted">{fypProject.interfaceImages.main.caption}</figcaption>
            </figure>
            <figure>
              <img src={assetPath(fypProject.interfaceImages.result.src)} alt={fypProject.interfaceImages.result.caption} className="featured-project__screenshot" />
              <figcaption className="text-muted">{fypProject.interfaceImages.result.caption}</figcaption>
            </figure>
          </div>
        </Card>
      </Reveal>

      <Reveal delay={0.35}>
        <div className="grid grid--3">
          <Card>
            <h3>Challenges</h3>
            <ul className="bullet-list">{fypProject.challenges.map((c) => <li key={c}>{c}</li>)}</ul>
          </Card>
          <Card>
            <h3>What I Learned</h3>
            <ul className="bullet-list">{fypProject.learnings.map((l) => <li key={l}>{l}</li>)}</ul>
          </Card>
          <Card>
            <h3>Future Improvements</h3>
            <ul className="bullet-list">{fypProject.futureImprovements.map((f) => <li key={f}>{f}</li>)}</ul>
          </Card>
        </div>
      </Reveal>

      <Reveal delay={0.4}>
        <div className="hero__actions" style={{ marginTop: 'var(--space-6)' }}>
          {fypProject.links.map((link) => (
            <a key={link.label} href={link.href} className="btn btn--ghost" title={link.isPlaceholder ? 'Link coming soon' : undefined}>
              {link.label}{link.isPlaceholder ? ' (soon)' : ''}
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  )
}
