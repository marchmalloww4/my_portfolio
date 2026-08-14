import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { fypStageComparison } from '../../data/fyp'

const METRICS = [
  { key: 'mae', label: 'MAE (lower is better)' },
  { key: 'rmse', label: 'RMSE (lower is better)' },
  { key: 'r2', label: 'R² (higher is better)' },
] as const

export default function ModelComparisonChart() {
  const rows = fypStageComparison.map((row) => ({
    stage: row.stage,
    ridgeMae: row.ridge.mae,
    bertMae: row.bert.mae,
    ridgeRmse: row.ridge.rmse,
    bertRmse: row.bert.rmse,
    ridgeR2: row.ridge.r2,
    bertR2: row.bert.r2,
  }))

  return (
    <div className="model-comparison-chart">
      {METRICS.map((metric) => (
        <div key={metric.key} className="model-comparison-chart__panel">
          <p className="model-comparison-chart__panel-title">{metric.label}</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={rows} margin={{ top: 8, right: 8, left: 0, bottom: 0 }} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="stage" tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={{ stroke: 'var(--border)' }} tickLine={false} />
              <YAxis tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={false} tickLine={false} width={36} />
              <Tooltip
                contentStyle={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 13 }}
                labelStyle={{ color: 'var(--text)', fontWeight: 600 }}
              />
              <Legend wrapperStyle={{ fontSize: 12 }} />
              <Bar dataKey={`ridge${metric.key === 'r2' ? 'R2' : metric.key[0].toUpperCase() + metric.key.slice(1)}`} name="Ridge Regression" fill="var(--chart-navy)" radius={[4, 4, 0, 0]} />
              <Bar dataKey={`bert${metric.key === 'r2' ? 'R2' : metric.key[0].toUpperCase() + metric.key.slice(1)}`} name="BERT Regression" fill="var(--chart-gold)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      ))}
    </div>
  )
}
