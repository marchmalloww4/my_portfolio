interface SectionHeadingProps {
  eyebrow: string
  title: string
  lede?: string
}

export default function SectionHeading({ eyebrow, title, lede }: SectionHeadingProps) {
  return (
    <div>
      <p className="section__eyebrow">{eyebrow}</p>
      <h2 className="section__title">{title}</h2>
      {lede && <p className="section__lede">{lede}</p>}
    </div>
  )
}
