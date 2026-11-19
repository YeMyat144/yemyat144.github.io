import { useEffect, type CSSProperties } from 'react'
import { Seo } from '../components/seo/Seo'
import { Nav } from '../components/portfolio/Nav'
import { Hero } from '../components/portfolio/Hero'
import { Story } from '../components/portfolio/Story'
import { Speaking } from '../components/portfolio/Speaking'
import { Toolkit } from '../components/portfolio/Toolkit'
import { Contact } from '../components/portfolio/Contact'

export interface HomePageProps {
  availability?: string
  accent?: string
  photo?: string
  storyOrder?: 'oldest first' | 'newest first'
}

const defaultHomeArgs = {
  availability: 'Open to AI / Full-stack roles',
  accent: '#3b4cff',
  photo: '/logos/profile.jpeg',
  storyOrder: 'oldest first' as const,
}

export default function HomePage(props: HomePageProps) {
  const { availability, accent, photo, storyOrder } = { ...defaultHomeArgs, ...props }

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.replace('#', '')
      const el = document.getElementById(id)
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      }
    }
  }, [])

  return (
    <>
      <Seo
        title="Ye Myat Moe"
        description="Software engineer in Bangkok building full-stack products, LLM workflows, and n8n automation systems."
        path="/"
      />
      <div
        className="min-h-full bg-paper font-sans text-ink"
        style={{ ['--accent' as string]: accent } as CSSProperties}
      >
        <Nav />
        <main>
          <Hero availability={availability} photo={photo} />
          <Story order={storyOrder === 'newest first' ? 'desc' : 'asc'} />
          <Speaking />
          <Toolkit />
          <Contact />
        </main>
      </div>
    </>
  )
}
