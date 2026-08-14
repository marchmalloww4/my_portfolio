import { sentimentOverallSplit } from '../../data/sentimentAnalysis'

export default function SentimentSplitBar() {
  const { positive, negative } = sentimentOverallSplit
  return (
    <div>
      <div className="split-bar">
        <div className="split-bar__segment" style={{ width: `${positive}%`, background: 'var(--chart-navy)' }} />
        <div className="split-bar__segment" style={{ width: `${negative}%`, background: 'var(--chart-gold)' }} />
      </div>
      <div className="split-bar__legend">
        <span><i style={{ background: 'var(--chart-navy)' }} /> Positive {positive}%</span>
        <span><i style={{ background: 'var(--chart-gold)' }} /> Negative {negative}%</span>
      </div>
    </div>
  )
}
