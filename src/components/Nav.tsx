import { useActiveSection } from '../hooks/useActiveSection'
import ThemeToggle from './ThemeToggle'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'data-portfolio', label: 'Data Portfolio' },
  { id: 'visual-portfolio', label: 'Visual Portfolio' },
  { id: 'activities', label: 'Activities' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const activeId = useActiveSection(LINKS.map((l) => l.id))

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#home" className="nav__brand">Nurul Nasyrah</a>
        <nav aria-label="Section navigation">
          <ul className="nav__links">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={activeId === link.id ? 'nav__link nav__link--active' : 'nav__link'}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
