import { useId, useMemo, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { giftFinder } from '../../data/content'
import { products } from '../../data/products'
import { formatPrice } from '../../lib/format'
import { ProductCard } from '../../features/product/ProductCard'
import { Icon } from '../../components/ui/Icon'
import { cn } from '../../lib/cn'

/**
 * The gift finder: choose the moment, then drag the budget. The three pieces that sit
 * closest under the budget appear on the right, re-dealt each time the answer changes.
 * If nothing fits, it says so and offers to raise the budget.
 */
export function GiftFinder() {
  const id = useId()
  const reduce = useReducedMotion()
  const [moment, setMoment] = useState(giftFinder.moments[0].id)
  const [budget, setBudget] = useState(giftFinder.start)
  const m = giftFinder.moments.find((x) => x.id === moment)

  const pool = useMemo(() => products.filter((p) => p.price <= budget && p.wear.some((w) => m.match.includes(w))), [budget, m])
  const picks = useMemo(() => [...pool].sort((a, b) => b.price - a.price || b.rating - a.rating).slice(0, 3), [pool])
  const pct = ((budget - giftFinder.min) / (giftFinder.max - giftFinder.min)) * 100

  return (
    <section id="gifts" className="shell scroll-mt-28 pt-16 lg:pt-24" aria-labelledby="gifts-title">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,380px)_minmax(0,1fr)] lg:gap-10">
        {/* The questions */}
        <div className="relative overflow-hidden rounded-[10px] bg-espresso p-7 text-cream sm:p-9">
          <span aria-hidden="true" className="sparkle absolute -top-4 -right-4 w-28 opacity-25" />
          <p className="caps text-[10px] text-gold-light">The gift finder</p>
          <h2 id="gifts-title" className="display mt-4 text-[36px] text-cream sm:text-[42px]">
            Find the <span className="block italic text-gold-light">perfect gift</span>
          </h2>

          <fieldset className="mt-8">
            <legend className="caps mb-3 text-[9.5px] text-cream/70">The moment</legend>
            <div className="flex flex-wrap gap-2">
              {giftFinder.moments.map((x) => (
                <button
                  key={x.id}
                  type="button"
                  aria-pressed={moment === x.id}
                  onClick={() => setMoment(x.id)}
                  className={cn(
                    'press h-10 rounded-[3px] border px-4 text-[13px] transition-colors duration-200',
                    moment === x.id ? 'border-gold-light bg-gold-light text-espresso' : 'border-cream/25 text-cream hover:border-cream/60',
                  )}
                >
                  {x.label}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-8">
            <label htmlFor={id} className="caps flex items-baseline justify-between text-[9.5px] text-cream/70">
              Budget up to
              <span className="font-[family-name:var(--font-display)] text-[26px] tracking-normal text-cream normal-case tabular-nums">{formatPrice(budget)}</span>
            </label>
            <input
              id={id}
              type="range"
              min={giftFinder.min}
              max={giftFinder.max}
              step={giftFinder.step}
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              className="gift-range mt-3 w-full"
              style={{ '--fill': `${pct}%` }}
            />
            <div className="mt-1.5 flex justify-between text-[11.5px] text-cream/60 tabular-nums">
              <span>{formatPrice(giftFinder.min)}</span>
              <span>{formatPrice(giftFinder.max)}</span>
            </div>
          </div>

          <p className="mt-8 flex items-center gap-2 border-t border-cream/15 pt-5 text-[13px] text-cream/80">
            <Icon name="gift" size={17} className="text-gold-light" /> Every piece arrives gift-boxed, with a handwritten note on request.
          </p>
        </div>

        {/* The answer */}
        <div className="flex flex-col">
          <p className="text-[14px] text-ink-soft" aria-live="polite">
            {pool.length ? (
              <>
                <span className="text-ink">{pool.length}</span> pieces for {m.label.toLowerCase()} under {formatPrice(budget)}. Our three closest to your budget:
              </>
            ) : (
              'Nothing under this budget for that moment yet.'
            )}
          </p>
          <AnimatePresence mode="wait" initial={false}>
            {picks.length ? (
              <motion.ul
                key={`${moment}-${picks.map((p) => p.id).join()}`}
                className="mt-5 grid grid-cols-2 gap-x-3 gap-y-8 sm:grid-cols-3 lg:gap-x-5"
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, transition: { duration: 0.15 } }}
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07 } } }}
              >
                {picks.map((p) => (
                  <motion.li key={p.id} variants={{ hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 16, rotate: -1.5 }, show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } } }}>
                    <ProductCard product={p} />
                  </motion.li>
                ))}
              </motion.ul>
            ) : (
              <motion.div key="none" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mt-5 grid flex-1 place-items-center rounded-[10px] border border-dashed border-line-strong p-10 text-center">
                <div>
                  <span aria-hidden="true" className="sparkle mx-auto w-8" />
                  <p className="mt-4 text-[15px] text-ink">Try a little more room in the budget.</p>
                  <button type="button" onClick={() => setBudget((b) => Math.min(giftFinder.max, b + 1500))} className="btn mt-5 h-10 px-5 text-[10.5px]">
                    Raise to {formatPrice(Math.min(giftFinder.max, budget + 1500))}
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
