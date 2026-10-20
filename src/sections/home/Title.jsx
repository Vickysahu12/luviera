import { Link } from 'react-router'
import { Icon } from '../../components/ui/Icon'
import { cn } from '../../lib/cn'

/**
 * A section title in the inspo's manner: a small spaced kicker in bronze over a Cormorant
 * heading, with "View all" on the right. `center` stacks it centred with a fine ornament.
 */
export function Title({ id, kicker, children, to, cta = 'View all', center, light }) {
  if (center) {
    return (
      <div className="flex flex-col items-center text-center">
        {kicker && <p className="caps mb-3 text-[10px] text-gold">{kicker}</p>}
        <h2 id={id} className={cn('display text-[32px] sm:text-[42px]', light && 'text-cream')}>
          {children}
        </h2>
        <span aria-hidden="true" className="ornament mt-4">
          <i />
        </span>
      </div>
    )
  }
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        {kicker && <p className="caps mb-2.5 text-[10px] text-gold">{kicker}</p>}
        <h2 id={id} className={cn('display text-[30px] sm:text-[40px]', light && 'text-cream')}>
          {children}
        </h2>
      </div>
      {to && (
        <Link to={to} className="caps group mb-2 flex shrink-0 items-center gap-2 text-[10px] text-ink transition-colors hover:text-gold-deep">
          <span className="link-line">{cta}</span>
          <Icon name="arrow" size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      )}
    </div>
  )
}
