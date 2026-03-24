import { motion } from 'framer-motion'
import { FiMapPin, FiCalendar } from 'react-icons/fi'
import { profile } from '../data/profile'

export default function Travel() {
  return (
    <section id="hobbies" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-3xl font-bold text-text-primary font-cn">旅行记录</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <p className="text-text-dim font-cn mb-10">
          工作之余，喜欢在不同城市与自然中寻找灵感，用脚步丈量世界，用镜头记录沿途的风景与故事。
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {profile.travelLogs.map((log, i) => (
            <motion.div
              key={log.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex flex-col rounded-xl border border-glass-border bg-glass-bg overflow-hidden hover:border-primary/30 hover:shadow-[0_0_30px_rgba(0,212,255,0.06)] transition-all duration-300"
            >
              {/* Cover image area */}
              <div className="relative h-44 bg-dark-700 overflow-hidden">
                {log.cover ? (
                  <img
                    src={log.cover}
                    alt={log.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  /* Placeholder with gradient and icon */
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-dark-700 via-dark-600 to-dark-700">
                    <span className="text-4xl mb-2 opacity-40">🌏</span>
                    <span className="text-xs font-mono text-text-dim/50">照片即将更新</span>
                  </div>
                )}

                {/* Status badge */}
                {log.status === 'coming' && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 text-[10px] font-mono text-accent-light border border-accent/30 rounded bg-dark-900/80 backdrop-blur-sm">
                    即将更新
                  </span>
                )}

                {/* Location badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 text-xs text-text-primary bg-dark-900/80 backdrop-blur-sm rounded-full">
                  <FiMapPin size={12} className="text-primary" />
                  <span className="font-cn">{log.location}</span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-[15px] font-semibold text-text-primary font-cn mb-2 group-hover:text-primary transition-colors leading-relaxed">
                  {log.title}
                </h3>
                <p className="text-sm text-text-secondary font-cn leading-relaxed flex-1 mb-4">
                  {log.summary}
                </p>

                {/* Bottom: date + tags */}
                <div className="flex items-center justify-between pt-3 border-t border-glass-border">
                  <div className="flex items-center gap-1.5 text-xs text-text-dim">
                    <FiCalendar size={11} />
                    <span className="font-mono">{log.date}</span>
                  </div>
                  <div className="flex gap-1.5">
                    {log.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[10px] font-cn text-text-dim border border-glass-border rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* More coming hint */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <p className="text-sm text-text-dim font-cn">
            更多旅行记录正在整理中，敬请期待 ✈️
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
