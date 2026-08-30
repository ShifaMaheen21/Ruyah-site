import realWorldSkillsIcon from '../assets/real-world-skills.svg'
import languageMasteryIcon from '../assets/language-mastery.svg'
import islamicCharacterIcon from '../assets/islamic-character.svg'
import homeschoolFriendlyIcon from '../assets/homeschool-friendly.svg'

const pillars = [
  [realWorldSkillsIcon, 'Real-world skills', 'Practical, career-ready learning through hands-on tasks in coding, design, writing and more.'],
  [languageMasteryIcon, 'Language mastery', 'Arabic, Quran recitation and modern world languages taught through structured methods.'],
  [islamicCharacterIcon, 'Islamic character', 'Adab, ethics and tarbiyah are woven naturally into every learning experience.'],
  [homeschoolFriendlyIcon, 'Homeschool friendly', 'Flexible, structured resources designed for different ages, goals and lifestyles.']
]

export default function AboutPage({ onNavigate }) {
  return <main className="standalone-page about-page">
    <section className="standalone-hero pattern-dark"><span className="pill light">About Ruyah</span><h1>Learning with purpose, rooted in faith</h1><p>Ruyah brings practical education, language learning and Islamic character development together in one flexible online institute.</p></section>
    <section className="section page-intro"><span className="pill">Our Purpose</span><h2>Real skills. Real languages. Rooted in Islamic values.</h2><p className="lead">We help learners build useful knowledge and lasting character through thoughtful teaching, personal guidance and home-friendly learning formats.</p></section>
    <section className="section page-pillars"><span className="pill">Our Approach</span><h2>Four pillars guide every course</h2><div className="pillar-grid">{pillars.map(([icon,title,copy])=><article className="pillar" key={title}><img className="pillar-icon" src={icon} alt=""/><h3>{title}</h3><p>{copy}</p></article>)}</div><button className="button dark page-cta" onClick={()=>onNavigate('/programs')}>Explore programs</button></section>
  </main>
}
