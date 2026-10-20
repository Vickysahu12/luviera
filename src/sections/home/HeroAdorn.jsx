import { useEffect, useState } from 'react'
import { Link } from 'react-router'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { heroSlides, editorial } from '../../data/content'
import { getProductSync } from '../../services/catalog'
import { formatPrice } from '../../lib/format'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { Button } from '../../components/ui/Button'
import { cn } from '../../lib/cn'

const HOLD = 7000
const EASE = [0.23, 1, 0.32, 1]

/**
 * Hero after the inspo's banner: a portrait on the right that fades into the cream ground,
 * the line on the left in Cormorant with its second half in bronze italic. Three portraits
 * change slowly (each drifting in from a slight zoom); the numbered bars fill with the timer
 * and can be clicked. A small card on the photo names the piece she is wearing.
 */
export function HeroAdorn() {
  const reduce = useReducedMotion()
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const slide = heroSlides[i]
  const piece = getProductSync(slide.productId)

  useEffect(() => {
    if (paused || reduce) return
    const t = setTimeout(() => setI((n) => (n + 1) % heroSlides.length), HOLD)
    return () => clearTimeout(t)
  }, [i, paused, reduce])

  return (
    <section aria-labelledby="hero-title" className="shell pt-4 lg:pt-5" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="relative isolate flex flex-col overflow-hidden rounded-[10px] bg-sand lg:block lg:h-[min(640px,calc(100dvh-150px))] lg:min-h-[540px]">
        {/* The portrait */}
        <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[16/11] lg:absolute lg:inset-y-0 lg:right-0 lg:aspect-auto lg:w-[64%]">
          <AnimatePresence initial={false}>
            <motion.img
              key={slide.image}
              src={editorial(slide.image)}
              alt=""
              fetchPriority={i === 0 ? 'high' : undefined}
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: slide.position }}
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 1.08 }}
              animate={reduce ? { opacity: 1 } : { opacity: 1, scale: 1, transition: { opacity: { duration: 1.1, ease: 'easeOut' }, scale: { duration: HOLD / 1000 + 1.2, ease: 'easeOut' } } }}
              exit={{ opacity: 0, transition: { duration: 1.1, ease: 'easeOut' } }}
            />
          </AnimatePresence>
          {/* Fade into the cream ground on the left (desktop) and at the foot (phones) */}
          <span aria-hidden="true" className="absolute inset-0 bg-[linear-gradient(180deg,transparent_62%,var(--color-sand))] lg:bg-[linear-gradient(90deg,var(--color-sand),rgb(243_234_223/0)_40%)]" />

          {/* The piece she is wearing */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={piece.id}
              className="absolute right-4 bottom-4 z-10 hidden sm:block lg:right-8 lg:bottom-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5, ease: EASE } }}
              exit={{ opacity: 0, y: 6, transition: { duration: 0.2 } }}
            >
              <Link to={`/product/${piece.slug}`} className="group flex items-center gap-3 rounded-[8px] bg-paper/90 p-2 pr-4 shadow-float backdrop-blur-md transition-transform duration-300 hover:-translate-y-0.5">
                <Img id={piece.images[1]} alt="" className="size-14 rounded-[6px]" position="50% 50%" />
                <span>
                  <span className="caps block text-[9px] text-gold">She is wearing</span>
                  <span className="mt-1 block text-[13.5px] text-ink">{piece.name}</span>
                  <span className="block text-[12.5px] text-ink-soft tabular-nums">{formatPrice(piece.price)}</span>
                </span>
                <Icon name="arrow" size={15} className="ml-1 text-ink transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* The line */}
        <div className="relative z-10 flex flex-col justify-center px-6 pt-2 pb-8 sm:px-10 lg:h-full lg:w-[46%] lg:px-14 lg:py-0 xl:px-20">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={i} initial="hidden" animate="show" exit="exit" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } }, exit: { opacity: 0, transition: { duration: 0.25 } } }}>
              <motion.p
                variants={{ hidden: { opacity: 0, x: -12 }, show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: EASE } } }}
                className="caps flex items-center gap-3 text-[10px] text-gold"
              >
                <span className="h-px w-8 bg-gold" aria-hidden="true" />
                {slide.kicker}
              </motion.p>
              <h1 id="hero-title" className="display mt-5 text-[52px] leading-[0.95] text-ink sm:text-[68px] lg:text-[80px]">
                <motion.span className="block" variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } } }}>
                  {slide.title[0]}
                </motion.span>
                <motion.span className="hand block pl-[0.6em] pb-1" variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } } }}>
                  {slide.title[1]}
                </motion.span>
              </h1>
              <motion.p
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } } }}
                className="mt-5 max-w-[36ch] text-[15px] leading-relaxed text-ink-soft"
              >
                {slide.body}
              </motion.p>
            </motion.div>
          </AnimatePresence>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Button to="/shop?bestseller=1" arrow>
              Discover signature pieces
            </Button>
            <Link to="/shop?sort=new" className="caps link-line text-[10px] text-ink">
              New arrivals
            </Link>
          </div>

          {/* Slide bars */}
          <div className="mt-10 flex gap-3" role="group" aria-label="Choose a look">
            {heroSlides.map((s, n) => (
              <button key={s.image} type="button" onClick={() => setI(n)} aria-label={`Look ${n + 1}`} aria-pressed={n === i} className="group/bar flex w-16 flex-col gap-2 text-left">
                <span className={cn('caps text-[9.5px] tabular-nums transition-colors', n === i ? 'text-ink' : 'text-ink-soft group-hover/bar:text-ink')}>{String(n + 1).padStart(2, '0')}</span>
                <span className="relative h-px w-full overflow-hidden bg-line-strong">
                  {n === i && (
                    <span
                      key={`${i}-${paused}`}
                      className="absolute inset-0 origin-left bg-gold"
                      style={paused || reduce ? undefined : { animation: `hero-progress ${HOLD}ms linear both` }}
                    />
                  )}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
