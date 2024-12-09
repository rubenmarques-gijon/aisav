import Hero from '../components/home/Hero'
import LevelCard from '../components/home/LevelCard'
import StatsGrid from '../components/home/StatsGrid'
import AchievementCards from '../components/home/AchievementCards'

export default function Home() {
  const stats = {
    nivel: 'Técnico Nivel 2',
    xp: 1250,
    casosResueltos: 15,
    precision: '92%'
  }

  return (
    <div className="min-h-screen aurora-bg">
      <Hero />
      <div className="container mx-auto px-4">
        <LevelCard nivel={stats.nivel} xp={stats.xp} />
        <StatsGrid stats={stats} />
        <AchievementCards />
      </div>
    </div>
  )
}
