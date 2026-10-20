// Editorial content for the storefront. Kept out of components so the client
// (or a CMS later) can change copy and imagery in one place.
// Image ids refer to public/media/products (jNN-1 the piece, jNN-2 a closer crop). Larger
// copies for banners live in public/media/editorial (jNN.webp, and model1-3.webp).

export const editorial = (name) => `/media/editorial/${name}.webp`

// Hero: three portraits that change slowly, each with its own line.
export const heroSlides = [
  { image: 'model3', kicker: 'The art of adornment', title: ['Timeless', 'brilliance'], body: 'Fine chains, soft gold and stones that catch the light, made for the moments you will remember.', productId: 'j03', position: '50% 30%' },
  { image: 'model2', kicker: 'The evening edit', title: ['Wear the', 'glow'], body: 'Beaded chokers, slim bracelets and the warmth of gold against skin.', productId: 'j31', position: '50% 22%' },
  { image: 'model1', kicker: 'Colour of elegance', title: ['Colour,', 'worn softly'], body: 'Sapphire-blue beads, emerald leaves and amethyst studs for days that want colour.', productId: 'j47', position: '50% 25%' },
]

export const categoryTiles = [
  { id: 'rings', label: 'Rings', image: 'j49-2', to: '/shop/rings' },
  { id: 'necklaces', label: 'Necklaces', image: 'j01-2', to: '/shop/necklaces' },
  { id: 'earrings', label: 'Earrings', image: 'j43-2', to: '/shop/earrings' },
  { id: 'bracelets', label: 'Bracelets', image: 'j26-1', to: '/shop/bracelets' },
  { id: 'bangles', label: 'Bangles', image: 'j15-2', to: '/shop/bangles' },
  { id: 'bridal', label: 'Bridal', image: 'j04-2', to: '/shop?occasion=bridal' },
]

// The four collection banners (ref: Modern Heirlooms / Color of Elegance / ...).
export const collections = [
  { id: 'heirloom', title: ['Modern', 'heirlooms'], body: 'Pieces to pass on, made for every generation.', image: 'j37', position: '50% 55%', to: '/shop?occasion=heirloom' },
  { id: 'colour', title: ['Colour of', 'elegance'], body: 'Gemstone tones that speak softly.', image: 'j24', position: '50% 60%', to: '/shop?occasion=colour' },
  { id: 'everyday', title: ['Everyday', 'essentials'], body: 'Fine designs for your everyday glow.', image: 'j29', position: '50% 55%', to: '/shop?occasion=everyday' },
  { id: 'bridal', title: ['Forever', 'begins here'], body: 'Mangalsutras, bangles and sets for your forever story.', image: 'j04', position: '50% 55%', to: '/shop?occasion=bridal' },
]

export const lovedMost = { ids: ['j05', 'j01', 'j43', 'j26', 'j31', 'j15'], to: '/shop?bestseller=1' }

export const craft = {
  kicker: 'Crafted to be cherished',
  title: ['The beauty behind', 'every detail'],
  body: 'Every Luviera piece begins as a sketch and ends in a hand-finished box. Stones are set one at a time, every surface is polished twice, and each finish is plated thick and nickel-free so it stays kind to skin.',
  image: 'j06',
  points: [
    { icon: 'sparkle', label: 'Hand-set stones' },
    { icon: 'seal', label: 'Nickel-free finish' },
    { icon: 'gift', label: 'Signature box' },
  ],
}

export const perks = [
  { icon: 'seal', title: 'Skin-safe quality', body: 'Nickel-free, thick plating' },
  { icon: 'lock', title: 'Secure payment', body: 'Encrypted and safe' },
  { icon: 'gift', title: 'Signature packaging', body: 'A box worth keeping' },
  { icon: 'truck', title: 'Insured shipping', body: 'Free above ₹2,999' },
  { icon: 'returns', title: 'Easy returns', body: 'Within 7 days, unworn' },
]

export const categoryLabels = {
  rings: 'Rings',
  necklaces: 'Necklaces',
  earrings: 'Earrings',
  bracelets: 'Bracelets',
  bangles: 'Bangles',
}

export const categorySingular = {
  rings: 'Ring',
  necklaces: 'Necklace',
  earrings: 'Earrings',
  bracelets: 'Bracelet',
  bangles: 'Bangles',
}

export const categories = categoryTiles.filter((c) => c.id !== 'bridal')

// The collection lives in each product's `occasions`.
export const occasionLabels = {
  heirloom: 'Modern heirlooms',
  colour: 'Colour of elegance',
  everyday: 'Everyday essentials',
  bridal: 'Bridal',
}

export const occasions = Object.entries(occasionLabels).map(([id, label]) => ({ id, label }))

// The gift finder: who it is for, and a budget.
export const giftFinder = {
  moments: [
    { id: 'anniversary', label: 'Anniversary', match: ['bridal', 'heirloom'] },
    { id: 'birthday', label: 'Birthday', match: ['everyday', 'colour'] },
    { id: 'wedding', label: 'Wedding', match: ['bridal'] },
    { id: 'self', label: 'Just for me', match: ['everyday', 'colour', 'heirloom'] },
  ],
  min: 1500,
  max: 9000,
  step: 500,
  start: 4000,
}

// Sample client notes (demo content).
export const testimonials = [
  { name: 'Isha M.', city: 'Mumbai', rating: 5, productId: 'j05', text: 'The Blossom ring is even more beautiful in person and arrived in the most elegant box. I wear it every single day.' },
  { name: 'Rohan & Meera', city: 'Pune', rating: 5, productId: 'j26', text: 'I gifted the tennis bracelet for our anniversary and she has not taken it off. Thank you for making it unforgettable.' },
  { name: 'Sophia K.', city: 'Bengaluru', rating: 5, productId: 'j43', text: 'From the quality to the service, everything was perfect. Luviera is my go-to for gifts now.' },
  { name: 'Ananya R.', city: 'Delhi', rating: 5, productId: 'j08', text: 'My everyday mangalsutra is light and so pretty. It has not dulled at all after months of wear.' },
  { name: 'Kavya S.', city: 'Hyderabad', rating: 4, productId: 'j31', text: 'The kada is sleek and sits perfectly on the wrist. I want it in rose gold next.' },
]

// The journal (ref: "Inspiration & Stories"). Each story opens a page that exists.
export const journal = [
  { date: '12 Oct 2026', title: 'Choosing the perfect engagement ring', image: 'j05-1', to: '/shop/rings' },
  { date: '28 Sep 2026', title: 'Layering necklaces, the easy way', image: 'model3', editorial: true, to: '/shop/necklaces' },
  { date: '15 Sep 2026', title: 'Inside our bangle atelier', image: 'j17-1', to: '/shop/bangles' },
  { date: '2 Sep 2026', title: 'The art of gift giving', image: 'j10-1', to: '/#gifts' },
]

export const instagram = {
  handle: '@luviera.jewels',
  tag: '#ALittleMoreLuxurious',
  href: 'https://instagram.com',
  images: ['j35-1', 'j40-1', 'j17-1', 'j37-1', 'j28-1', 'j50-1'],
}

export const offers = [
  { title: '10% off your first piece', code: 'LUXE10' },
  { title: '₹500 off orders above ₹4,999', code: 'GIFT500' },
  { title: '₹1,000 off bridal orders above ₹9,999', code: 'BRIDAL1000' },
]

export const serviceRow = perks

// Review pool used to fill product pages (demo).
export const reviewPool = [
  { name: 'Nisha P.', rating: 5, title: 'Even prettier in person', text: 'The finish is beautiful and it came in the loveliest box.' },
  { name: 'Aditi R.', rating: 5, title: 'Perfect gift', text: 'Bought it for my sister and she loved it. Packaging felt very premium.' },
  { name: 'Megha K.', rating: 4, title: 'Lovely, a little delicate', text: 'Beautiful piece. I keep it in the pouch when I am not wearing it.' },
  { name: 'Riya S.', rating: 5, title: 'Wear it daily', text: 'No tarnish after weeks of wear. Very happy.' },
  { name: 'Tanya G.', rating: 4, title: 'Great value', text: 'Looks far more expensive than it was. Will order again.' },
]

export const sortOptions = [
  { id: 'featured', label: 'Featured' },
  { id: 'new', label: 'New in' },
  { id: 'price-asc', label: 'Price: Low to High' },
  { id: 'price-desc', label: 'Price: High to Low' },
  { id: 'rating', label: 'Top Rated' },
]

export const priceBands = [
  { id: 'u2000', label: 'Under ₹2,000', min: 0, max: 1999 },
  { id: '2000-2999', label: '₹2,000 to ₹2,999', min: 2000, max: 2999 },
  { id: '3000-4999', label: '₹3,000 to ₹4,999', min: 3000, max: 4999 },
  { id: '5000-9999', label: '₹5,000 and above', min: 5000, max: 9999 },
]

// Ring sizes (Indian) and bangle sizes, by inside diameter and circumference.
export const sizeGuide = {
  note: 'Measure a ring or bangle you already own, or wrap a strip of paper around your finger or the widest part of your hand. Necklaces, earrings and bracelets are one size and adjustable where noted.',
  headers: ['Size', 'Inside diameter', 'Circumference'],
  rows: [
    ['Ring 10', '15.9 mm', '49.9 mm'],
    ['Ring 12', '16.5 mm', '51.9 mm'],
    ['Ring 14', '17.2 mm', '54.0 mm'],
    ['Ring 16', '17.8 mm', '56.0 mm'],
    ['Ring 18', '18.5 mm', '58.1 mm'],
    ['Bangle 2.4', '57.2 mm', '179.6 mm'],
    ['Bangle 2.6', '60.3 mm', '189.5 mm'],
    ['Bangle 2.8', '63.5 mm', '199.5 mm'],
  ],
}
