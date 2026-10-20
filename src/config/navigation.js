// Navigation content: the mega-menu panels (desktop), menu tabs (phone) and quick chips.

export const megaMenus = [
  {
    id: 'collections',
    label: 'Collections',
    to: '/shop',
    columns: [
      {
        title: 'Collections',
        items: [
          { label: 'Modern heirlooms', desc: 'Made to pass on', image: 'j37-1', to: '/shop?occasion=heirloom' },
          { label: 'Colour of elegance', desc: 'Gemstone tones', image: 'j24-1', to: '/shop?occasion=colour' },
          { label: 'Everyday essentials', desc: 'Fine and light', image: 'j29-1', to: '/shop?occasion=everyday' },
          { label: 'Bridal', desc: 'Mangalsutras and sets', image: 'j04-1', to: '/shop?occasion=bridal' },
          { label: 'Bestsellers', desc: 'Loved most', image: 'j26-1', to: '/shop?bestseller=1' },
        ],
      },
    ],
    feature: { image: 'j05-1', title: 'The Blossom Diamond Ring', to: '/product/blossom-diamond-ring' },
  },
  {
    id: 'jewellery',
    label: 'Jewellery',
    to: '/shop',
    columns: [
      {
        title: 'Jewellery',
        items: [
          { label: 'Rings', desc: 'Cocktail and stacking', image: 'j49-1', to: '/shop/rings' },
          { label: 'Necklaces', desc: 'Pendants and mangalsutras', image: 'j01-1', to: '/shop/necklaces' },
          { label: 'Earrings', desc: 'Studs, hoops and drops', image: 'j43-1', to: '/shop/earrings' },
          { label: 'Bracelets', desc: 'Tennis, cuffs, sliders', image: 'j26-1', to: '/shop/bracelets' },
          { label: 'Bangles', desc: 'Pairs, stacks, kadas', image: 'j15-1', to: '/shop/bangles' },
        ],
      },
    ],
    feature: { image: 'j37-1', title: 'The Serpent Watch Bracelet', to: '/product/serpent-watch-bracelet' },
  },
]

export const navLinks = [
  { label: 'New in', to: '/shop?sort=new' },
  { label: 'Bridal', to: '/shop?occasion=bridal' },
  { label: 'Gifts', to: '/#gifts' },
  { label: 'About', to: '/about' },
]

export const quickChips = [
  { label: 'New in', to: '/shop?sort=new' },
  { label: 'Rings', to: '/shop/rings' },
  { label: 'Necklaces', to: '/shop/necklaces' },
  { label: 'Earrings', to: '/shop/earrings' },
  { label: 'Bracelets', to: '/shop/bracelets' },
  { label: 'Bangles', to: '/shop/bangles' },
  { label: 'Bridal', to: '/shop?occasion=bridal' },
  { label: 'Sale', to: '/shop?sale=1', accent: true },
]
