import { useRef, useState } from 'react'
import { Link } from 'react-router'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { craft, perks, testimonials, journal, editorial } from '../../data/content'
import { getProductSync } from '../../services/catalog'
import { useReveal } from '../../hooks/useReveal'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { Title } from './Title'
import { cn } from '../../lib/cn'

/** "The beauty behind every detail" (ref: the craft block): words on the left, the photograph easing past on the right. */
export function Craft() {
  const ref = useRef(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], reduce ? ['0%', '0%'] : ['-6%', '6%'])

  return (
    <section ref={ref} className="mt-16 bg-sand lg:mt-24" aria-labelledby="craft-title">
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:py-20 lg:pr-12 lg:pl-10">
          <p className="caps text-[10px] text-gold">{craft.kicker}</p>
          <h2 id="craft-title" className="display mt-4 text-[36px] sm:text-[48px]">
            {craft.title[0]}
            <span className="hand block">{craft.title[1]}</span>
          </h2>
          <p className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-ink-soft">{craft.body}</p>
          <ul className="mt-8 grid max-w-[460px] grid-cols-3 gap-4">
            {craft.points.map((p) => (
              <li key={p.label} className="group flex flex-col items-center gap-2.5 text-center">
                <span className="grid size-12 place-items-center rounded-full border border-gold/40 text-gold transition-[background-color,color,rotate] duration-500 ease-[var(--ease-spring)] group-hover:rotate-12 group-hover:bg-gold group-hover:text-paper">
                  <Icon name={p.icon} size={20} />
                </span>
                <span className="text-[12.5px] leading-snug text-ink">{p.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative min-h-[360px] overflow-hidden sm:min-h-[460px]">
          <motion.img
            src={editorial(craft.image)}
            alt="Stacked eternity rings in an open wooden box"
            loading="lazy"
            className="absolute inset-x-0 -top-[8%] h-[116%] w-full object-cover"
            style={{ y, objectPosition: '50% 50%' }}
          />
          <span aria-hidden="true" className="absolute inset-0 hidden bg-[linear-gradient(90deg,var(--color-sand),rgb(243_234_223/0)_32%)] lg:block" />
        </div>
      </div>
    </section>
  )
}

/** The five promises (ref: Certified quality / Secure payment / Signature packaging / ...). */
export function Promises() {
  return (
    <div className="shell">
    <ul className="grid grid-cols-2 gap-px overflow-hidden rounded-[8px] bg-line shadow-[0_0_0_1px_var(--color-line)] sm:grid-cols-3 lg:grid-cols-5" aria-label="Our promises">
      {perks.map((p) => (
        <li key={p.title} className="group flex flex-col items-center bg-paper px-4 py-7 text-center max-sm:last:col-span-2">
          <Icon name={p.icon} size={30} weight="light" className="text-gold transition-transform duration-500 ease-[var(--ease-spring)] group-hover:-translate-y-1 group-hover:scale-110" />
          <span className="mt-3 text-[14px] font-medium text-ink">{p.title}</span>
          <span className="mt-1 text-[12.5px] text-ink-soft">{p.body}</span>
        </li>
      ))}
    </ul>
    </div>
  )
}

/** "Treasured by our clients": three notes at a time, arrows to move along, on cream. */
export function Testimonials() {
  const reduce = useReducedMotion()
  const [start, setStart] = useState(0)
  const n = testimonials.length
  const visible = [0, 1, 2].map((k) => testimonials[(start + k) % n])
  const move = (d) => setStart((s) => (s + d + n) % n)

  return (
    <section className="mt-16 bg-mist py-16 lg:mt-24 lg:py-20" aria-labelledby="clients-title">
      <div className="shell">
        <Title id="clients-title" kicker="Kind words" center>
          Treasured by our <span className="hand">clients</span>
        </Title>
        <div className="relative mt-10">
          <motion.ul key={start} className="grid gap-4 md:grid-cols-3" initial={reduce ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, ease: [0.23, 1, 0.32, 1] }}>
            {visible.map((t, k) => {
              const p = getProductSync(t.productId)
              return (
                <li key={t.name} className={cn('rounded-[8px] bg-paper p-6 shadow-[inset_0_0_0_1px_var(--color-line)]', k > 0 && 'max-md:hidden')}>
                  <Icon name="quote" size={24} weight="fill" className="text-gold-light" />
                  <blockquote className="mt-3 font-[family-name:var(--font-display)] text-[19px] leading-snug text-ink italic">{t.text}</blockquote>
                  <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
                    <Img id={p.images[1]} alt="" className="size-10 rounded-full" position="50% 50%" />
                    <span className="min-w-0 flex-1">
                      <span className="block text-[13.5px] font-medium text-ink">
                        {t.name}, {t.city}
                      </span>
                      <Link to={`/product/${p.slug}`} className="link-line truncate text-[12.5px] text-ink-soft hover:text-ink">
                        {p.name}
                      </Link>
                    </span>
                    <span className="flex text-gold" aria-label={`${t.rating} out of 5`}>
                      {Array.from({ length: 5 }, (_, s) => (
                        <Icon key={s} name="star" size={11} weight={s < t.rating ? 'fill' : 'regular'} />
                      ))}
                    </span>
                  </div>
                </li>
              )
            })}
          </motion.ul>
          {[
            [-1, 'caret-left', 'Previous', '-left-2 lg:-left-5'],
            [1, 'caret-right', 'Next', '-right-2 lg:-right-5'],
          ].map(([d, icon, label, pos]) => (
            <button
              key={d}
              type="button"
              onClick={() => move(d)}
              aria-label={`${label} notes`}
              className={`press absolute top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-paper text-ink shadow-float transition-colors duration-200 hover:bg-gold hover:text-paper ${pos}`}
            >
              <Icon name={icon} size={16} weight="bold" />
            </button>
          ))}
        </div>
        <p className="mt-6 text-center text-[11.5px] text-ink-soft">Sample notes for this demo store.</p>
      </div>
    </section>
  )
}

/** "The journal: Inspiration & stories" (ref: four stories across). */
export function Journal() {
  const ref = useReveal()
  return (
    <section ref={ref} className="shell pt-16 lg:pt-24" aria-labelledby="journal-title">
      <Title id="journal-title" kicker="The journal" to="/about" cta="About Luviera">
        Inspiration <span className="hand">&amp; stories</span>
      </Title>
      <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-8 lg:grid-cols-4 lg:gap-x-5">
        {journal.map((j, i) => (
          <li key={j.title} data-reveal style={{ '--reveal-delay': `${i * 70}ms` }}>
            <Link to={j.to} className="group block">
              <span className="block overflow-hidden rounded-[8px] bg-sand">
                {j.editorial ? (
                  <img src={editorial(j.image)} alt="" loading="lazy" className="aspect-[4/3] w-full object-cover object-[50%_35%] transition-transform duration-[1200ms] ease-[var(--ease-out)] group-hover:scale-[1.05]" />
                ) : (
                  <Img id={j.image} alt="" className="aspect-[4/3]" position="50% 50%" imgClassName="transition-transform duration-[1200ms] ease-[var(--ease-out)] group-hover:scale-[1.05]" />
                )}
              </span>
              <span className="caps mt-4 block text-[9.5px] text-ink-soft">{j.date}</span>
              <span className="headline mt-1.5 block text-[20px] text-ink transition-colors group-hover:text-gold-deep">{j.title}</span>
              <span className="caps mt-2 inline-flex items-center gap-2 text-[9.5px] text-gold">
                Read the story <Icon name="arrow" size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}
