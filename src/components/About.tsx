import { motion } from 'framer-motion'
import { profile } from '../data/profile'

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 mb-12">
      <h2 className="text-3xl font-bold text-text-primary font-cn">{children}</h2>
      <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
    </div>
  )
}

const timelineColors: Record<string, string> = {
  primary: 'text-primary border-primary bg-primary/10',
  'accent-light': 'text-accent-light border-accent-light bg-accent/10',
  'neon-green': 'text-neon-green border-neon-green bg-neon-green/10',
}

const dotColors: Record<string, string> = {
  primary: 'border-primary shadow-[0_0_6px_rgba(0,212,255,0.5)]',
  'accent-light': 'border-accent-light shadow-[0_0_6px_rgba(167,139,250,0.5)]',
  'neon-green': 'border-neon-green shadow-[0_0_6px_rgba(0,255,136,0.5)]',
}

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
      >
        <SectionTitle>关于我</SectionTitle>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Bio + Education + Research Interests */}
          <div className="flex flex-col gap-6">
            <p className="text-text-secondary leading-relaxed text-lg font-cn">
              {profile.bio}
            </p>

            <div className="p-5 rounded-xl border border-glass-border bg-glass-bg backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-primary text-xl">🎓</span>
                <h3 className="text-text-primary font-semibold font-cn">教育背景</h3>
              </div>
              <p className="text-text-secondary ml-9 font-cn">{profile.education}</p>
            </div>

            <div className="p-5 rounded-xl border border-glass-border bg-glass-bg backdrop-blur-sm flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-primary text-xl">🔬</span>
                <h3 className="text-text-primary font-semibold font-cn">研究方向</h3>
              </div>
              <div className="flex flex-wrap gap-2.5 ml-9">
                {profile.researchInterests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3.5 py-1.5 text-sm font-cn font-medium text-primary border border-primary/25 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 shadow-[0_0_12px_rgba(0,212,255,0.08)]"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Timeline + Stats */}
          <div className="flex flex-col gap-6">
            {/* Research Timeline - horizontal */}
            <div className="p-6 rounded-xl border border-glass-border bg-glass-bg">
              <h3 className="text-text-primary font-semibold text-lg mb-6 font-cn">研究方向演进</h3>

              <div className="relative">
                {/* Horizontal line */}
                <div className="absolute top-[6px] left-[6px] right-[6px] h-px bg-gradient-to-r from-primary via-accent-light to-neon-green" />

                <div className="grid grid-cols-4">
                  {profile.researchTimeline.map((item, i) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="flex flex-col items-center text-center"
                    >
                      <div className={`w-[13px] h-[13px] rounded-full border-2 bg-dark-900 mb-3 shrink-0 ${
                        dotColors[item.color] || dotColors.primary
                      }`} />
                      <span className={`inline-block px-2.5 py-1 text-xs font-cn font-medium border rounded-full mb-2 ${
                        timelineColors[item.color] || timelineColors.primary
                      }`}>
                        {item.label}
                      </span>
                      <span className="font-mono text-base text-text-secondary">{item.period}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Academic Stats */}
            <div className="p-6 rounded-xl border border-glass-border bg-glass-bg flex-1">
              <h3 className="text-text-primary font-semibold text-lg mb-5 font-cn">学术指标</h3>
              <div className="grid grid-cols-3 gap-3">
                {profile.stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="p-3.5 rounded-lg border border-glass-border bg-dark-800/50 text-center"
                  >
                    <p className="text-2xl font-bold bg-gradient-to-r from-primary to-accent-light bg-clip-text text-transparent">
                      {stat.value}
                    </p>
                    <p className="text-[11px] text-text-dim mt-1.5 font-cn leading-snug">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
