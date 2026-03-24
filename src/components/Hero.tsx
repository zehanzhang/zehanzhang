import { motion } from 'framer-motion'
import ParticleField from './ParticleField'
import { profile } from '../data/profile'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticleField />

      {/* Gradient overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-dark-900/40 via-transparent to-dark-900" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_30%,#0a0a0f_80%)]" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        {/* English Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black mb-5 tracking-tight"
        >
          <span className="bg-gradient-to-r from-primary via-accent-light to-neon-green bg-clip-text text-transparent">
            {profile.nameEn}
          </span>
        </motion.h1>

        {/* Chinese Name */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-2xl md:text-3xl text-text-secondary font-cn font-light mb-10 tracking-[0.3em]"
        >
          {profile.name}
        </motion.p>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-text-secondary font-cn font-medium tracking-wider mb-2"
        >
          {profile.title}
        </motion.p>

        {/* Education */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-base md:text-lg text-text-dim font-cn tracking-wider mb-10"
        >
          {profile.education}
        </motion.p>

        {/* Research tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {profile.heroTags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 text-sm font-cn font-medium text-primary/90 border border-primary/25 rounded-full bg-primary/5 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
