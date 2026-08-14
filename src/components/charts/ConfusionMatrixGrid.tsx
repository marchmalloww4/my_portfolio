import { sentimentConfusionMatrix as m } from '../../data/sentimentAnalysis'

const CELLS = [
  { label: 'Predicted Positive, Actual Positive', value: m.truePositive, key: 'tp' },
  { label: 'Predicted Positive, Actual Negative', value: m.falsePositive, key: 'fp' },
  { label: 'Predicted Negative, Actual Positive', value: m.falseNegative, key: 'fn' },
  { label: 'Predicted Negative, Actual Negative', value: m.trueNegative, key: 'tn' },
] as const

const maxValue = Math.max(...CELLS.map((c) => c.value))

export default function ConfusionMatrixGrid() {
  return (
    <div>
      <p className="text-muted" style={{ marginBottom: 'var(--space-3)', fontSize: '0.9rem' }}>
        {m.model} &middot; {m.accuracy}% accuracy &middot; test set of {m.truePositive + m.falsePositive + m.falseNegative + m.trueNegative} reviews
      </p>
      <div className="confusion-matrix">
        {CELLS.map((cell) => {
          const intensity = cell.value / maxValue
          return (
            <div
              key={cell.key}
              className="confusion-matrix__cell"
              style={{ background: `color-mix(in srgb, var(--chart-navy) ${Math.round(intensity * 100)}%, var(--bg-elevated))` }}
            >
              <span className="confusion-matrix__value" style={{ color: intensity > 0.55 ? '#fff' : 'var(--text)' }}>
                {cell.value.toLocaleString()}
              </span>
              <span className="confusion-matrix__label" style={{ color: intensity > 0.55 ? 'rgba(255,255,255,0.85)' : 'var(--text-muted)' }}>
                {cell.label}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
