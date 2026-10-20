import { Link } from 'react-router'
import { categoryTiles, collections, lovedMost, editorial } from '../../data/content'
import { getProductSync } from '../../services/catalog'
import { useReveal } from '../../hooks/useReveal'
import { ProductCard } from '../../features/product/ProductCard'
import { Img } from '../../components/ui/Img'
import { Icon } from '../../components/ui/Icon'
import { Title } from './Title'

/** Shop by type (ref: the five soft tiles): the piece up close, its name, a fine ornament; the logo star turns on hover. */
export function CategoryTiles() {
  const ref = useReveal()
  return (
    <section ref={ref} className="shell pt-8 lg:pt-10" aria-label="Shop by type">
      <ul className="grid grid-cols-3 gap-2.5 sm:gap-3 lg:grid-cols-6 lg:gap-4">
        {categoryTiles.map((c, i) => (
          <li key={c.id} data-reveal style={{ '--reveal-delay': `${i * 60}ms` }}>
            <Link to={c.to} className="group relative block overflow-hidden rounded-[8px] bg-paper p-2 pb-4 shadow-[inset_0_0_0_1px_var(--color-line)] transition-[box-shadow,transform] duration-500 ease-[var(--ease-out)] hover:-translate-y-1 hover:shadow-[inset_0_0_0_1px_var(--color-gold-light),0_18px_30px_-22px_rgb(60_38_18/0.4)]">
              <span className="block overflow-hidden rounded-[6px]">
                <Img id={c.image} alt="" className="aspect-square" position="50% 50%" imgClassName="transition-transform duration-[1200ms] ease-[var(--ease-out)] group-hover:scale-[1.08]" />
              </span>
              <span aria-hidden="true" className="sparkle absolute top-3.5 right-3.5 w-3.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="caps mt-3.5 block text-center text-[10px] text-ink">{c.label}</span>
              <span className="mt-2 flex justify-center">
                <span aria-hidden="true" className="ornament">
                  <i />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

/** The four collection banners (ref: Modern Heirlooms / Color of Elegance / Everyday Essentials / Forever Begins Here). */
export function CollectionBanners() {
  const ref = useReveal()
  return (
    <section ref={ref} className="shell pt-4 lg:pt-5" aria-label="Collections">
      <ul className="grid grid-cols-2 gap-2.5 sm:gap-3 lg:grid-cols-4 lg:gap-4">
        {collections.map((c, i) => (
          <li key={c.id} data-reveal-frame style={{ '--reveal-delay': `${i * 70}ms` }}>
            <Link to={c.to} className="group relative isolate flex aspect-[4/5] flex-col justify-between overflow-hidden rounded-[8px] bg-espresso p-5 text-cream sm:aspect-[5/4] sm:p-6 lg:aspect-[4/3.4]">
              <img
                src={editorial(c.image)}
                alt=""
                loading="lazy"
                className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-[1400ms] ease-[var(--ease-out)] group-hover:scale-[1.06]"
                style={{ objectPosition: c.position }}
              />
              <span aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,rgb(28_19_12/0.82),rgb(28_19_12/0.45)_45%,rgb(28_19_12/0.05))]" />
              <span>
                <span className="display block text-[24px] leading-[1.02] sm:text-[30px]">
                  {c.title[0]}
                  <span className="block italic text-gold-light">{c.title[1]}</span>
                </span>
                <span className="mt-3 block max-w-[20ch] text-[12.5px] leading-snug text-cream/80">{c.body}</span>
              </span>
              <span className="caps flex items-center gap-2 text-[9.5px] text-cream">
                Explore
                <span className="relative h-px w-6 bg-current transition-[width] duration-500 ease-[var(--ease-out)] group-hover:w-12">
                  <Icon name="caret-right" size={10} weight="bold" className="absolute -top-[5px] -right-1" />
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

/** "Our signature selection: Loved most" (ref: six across). */
export function LovedMost() {
  const ref = useReveal()
  const items = lovedMost.ids.map(getProductSync)
  return (
    <section ref={ref} className="shell pt-16 lg:pt-24" aria-labelledby="loved-title">
      <Title id="loved-title" kicker="Our signature selection" to={lovedMost.to} cta="View all bestsellers">
        Loved <span className="hand">most</span>
      </Title>
      <ul className="mt-8 grid grid-cols-2 gap-x-3 gap-y-9 sm:grid-cols-3 lg:grid-cols-6 lg:gap-x-4">
        {items.map((p, i) => (
          <li key={p.id} data-reveal style={{ '--reveal-delay': `${i * 60}ms` }}>
            <ProductCard product={p} />
          </li>
        ))}
      </ul>
    </section>
  )
}
