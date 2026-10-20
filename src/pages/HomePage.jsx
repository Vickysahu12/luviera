import { useDocumentTitle } from '../hooks/useDocumentTitle'
import { HeroAdorn } from '../sections/home/HeroAdorn'
import { CategoryTiles, CollectionBanners, LovedMost } from '../sections/home/Showcase'
import { Craft, Promises, Testimonials, Journal } from '../sections/home/Stories'
import { GiftFinder } from '../sections/home/GiftFinder'
import { Closing } from '../sections/home/Closing'

// In the inspo's order: hero, the type tiles, four collection banners, Loved most, the craft
// block, promises, client notes and the journal; with the gift finder after the promises.
export function HomePage() {
  useDocumentTitle()
  return (
    <>
      <HeroAdorn />
      <CategoryTiles />
      <CollectionBanners />
      <LovedMost />
      <Craft />
      <div className="pt-10 lg:pt-14">
        <Promises />
      </div>
      <GiftFinder />
      <Testimonials />
      <Journal />
      <Closing />
    </>
  )
}
