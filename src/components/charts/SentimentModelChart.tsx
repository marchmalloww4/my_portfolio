import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { sentimentModelResults } from '../../data/sentimentAnalysis'

export default function SentimentModelChart() {
  const rows = sentimentModelResults.map((m) => ({
    model: m.model,
    crossValidation: m.crossValidation?.accuracy ?? null,
    splitData: m.splitData.accuracy,
  }))

  return (
    <ResponsiveContainer width="100%" height={280}>
      <BarChart data={rows} layout="vertical" margin={{ top: 8, right: 24, left: 8, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" horizontal={false} />
        <XAxis type="number" domain={[0, 100]} tick={{ fill: 'var(--text-muted)', fontSize: 12 }} axisLine={{ stroke: 'var(--border)' }} tickLine={false} unit="%" />
        <YAxis type="category" dataKey="model" tick={{ fill: 'var(--text)', fontSize: 13 }} axisLine={false} tickLine={false} width={130} />
        <Tooltip
          contentStyle={{ background: 'var(--bg-elevated)', border: '1px solid var(--border)', borderRadius: 8, fontSize: 13 }}
          formatter={(value) => (typeof value === 'number' ? `${value.toFixed(2)}%` : 'not reported')}
        />
        <Legend wrapperStyle={{ fontSize: 12 }} />
        <Bar dataKey="crossValidation" name="Cross Validation" fill="var(--chart-navy)" radius={[0, 4, 4, 0]} />
        <Bar dataKey="splitData" name="Split Data (0.7 / 0.3)" fill="var(--chart-gold)" radius={[0, 4, 4, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}
