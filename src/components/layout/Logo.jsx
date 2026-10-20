import { Link } from 'react-router'
import { site } from '../../config/site'
import { cn } from '../../lib/cn'

// The client's logo (public/brand), in its own polished bronze. In the header the script L
// sits beside the wordmark and tilts a little on hover; `full` shows the whole
// stacked lockup, brightened for the espresso footer.
export function Logo({ className, full, size = 'md' }) {
  if (full) {
    return (
      <Link to="/" aria-label={`${site.name} home`} className={cn('press inline-block', className)}>
        <img src="/brand/logo-light.png" alt={site.name} width={340} height={378} draggable={false} className="h-auto w-[200px]" />
      </Link>
    )
  }
  return (
    <Link to="/" aria-label={`${site.name} home`} className={cn('press group relative inline-flex items-center gap-2.5', className)}>
      <img
        src="/brand/mark.png"
        alt=""
        width={302}
        height={260}
        draggable={false}
        className={cn('w-auto transition-[height,transform] duration-500 ease-[var(--ease-spring)] group-hover:-rotate-6', size === 'sm' ? 'h-9' : 'h-10 lg:h-12')}
      />
      <img src="/brand/wordmark.png" alt={site.name} width={333} height={91} draggable={false} className={cn('w-auto transition-[height] duration-300', size === 'sm' ? 'h-7' : 'h-8 lg:h-9')} />
    </Link>
  )
}
