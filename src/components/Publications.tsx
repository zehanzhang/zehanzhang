import { motion } from 'framer-motion'
import { FiExternalLink } from 'react-icons/fi'
import { featuredPublications, publications } from '../data/profile'

export default function Publications() {
  return (
    <section id="publications" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7 }}
      >
        <div className="flex items-center gap-4 mb-6">
          <h2 className="text-3xl font-bold text-text-primary">学术论文</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-primary/40 to-transparent" />
        </div>

        <a
          href="https://scholar.google.com/citations?user=C1Nxx_0AAAAJ&hl=zh-CN"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 mb-12 px-4 py-2 text-sm font-mono text-primary border border-primary/30 rounded-lg hover:bg-primary/10 transition-colors"
        >
          <span>📚</span>
          Google Scholar 主页
          <FiExternalLink size={14} />
        </a>

        {/* 代表性工作 */}
        <h3 className="text-sm font-mono tracking-widest text-text-dim mb-6">
          — 代表性工作
        </h3>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {featuredPublications.map((pub, i) => (
            <motion.a
              key={i}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="group flex flex-col rounded-xl border border-glass-border bg-glass-bg overflow-hidden hover:border-primary/40 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)] transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-dark-800">
                <img
                  src={pub.image}
                  alt={pub.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 px-2 py-0.5 text-xs font-mono text-primary border border-primary/40 rounded bg-dark-900/80">
                  {pub.venue}
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5">
                <h4 className="text-[15px] font-semibold text-text-primary mb-2 line-clamp-3 group-hover:text-primary transition-colors leading-relaxed">
                  {pub.title}
                </h4>
                <p className="text-sm text-text-dim mb-3">{pub.authors}</p>
                <p className="text-sm text-text-secondary leading-relaxed flex-1">
                  {pub.description}
                </p>
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-glass-border">
                  <span className="font-mono text-xs text-text-dim">{pub.year}</span>
                  {pub.citations != null && (
                    <span className="font-mono text-xs text-primary/70">引用 {pub.citations}</span>
                  )}
                  <span className="text-xs text-text-dim group-hover:text-primary transition-colors flex items-center gap-1">
                    查看论文 <FiExternalLink size={11} />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* 全部论文 */}
        <h3 className="text-sm font-mono tracking-widest text-text-dim mb-6">
          — 全部论文
        </h3>
        <div className="space-y-0 divide-y divide-glass-border border border-glass-border rounded-xl overflow-hidden">
          {publications.map((pub, i) => (
            <motion.a
              key={i}
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.4) }}
              className="group flex items-start gap-4 px-5 py-4 bg-glass-bg hover:bg-primary/5 transition-colors"
            >
              <span className="font-mono text-xs text-text-dim w-10 shrink-0 pt-0.5">
                {pub.year}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-text-primary group-hover:text-primary transition-colors leading-snug mb-1">
                  {pub.title}
                </p>
                <div className="flex items-center gap-3 text-xs text-text-dim flex-wrap">
                  <span>{pub.authors}</span>
                  <span className="text-dark-500">·</span>
                  <span className="text-text-secondary">{pub.venue}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                {pub.citations != null && (
                  <span className="font-mono text-xs text-primary/60 hidden sm:block">
                    {pub.citations}↗
                  </span>
                )}
                <FiExternalLink size={14} className="text-text-dim group-hover:text-primary transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
