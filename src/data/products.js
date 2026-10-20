// Demo catalogue built from the client's photos (public/media/products/jNN-1 / jNN-2).
// `n` is the source photo number (src/assets/image/ImgNN). Every photo is high resolution;
// view 1 is the full still life at 800 x 1000 (4:5), view 2 a closer crop on the piece.
// `fabric` holds the finish (filtered as Material); `wear` holds the collection:
// heirloom, colour, everyday, bridal.
// Shape mirrors what a products API would return, so services/catalog.js can switch to fetch() later.
// Prices sit between ₹1,290 and ₹8,990; ratings and copy are sample data.

const RING = ['10', '12', '14', '16', '18']
const BANGLE = ['2.4', '2.6', '2.8']
const ONE = ['One size']

const CARE = ['Store in the Luviera pouch, away from air', 'Keep away from perfume, water and lotion', 'Wipe with the polishing cloth after wear']

const CATEGORY = {
  rings: { sizes: RING, includes: 'One ring in a Luviera box', care: CARE },
  necklaces: { sizes: ONE, includes: 'Necklace in a Luviera box', care: CARE },
  earrings: { sizes: ONE, includes: 'One pair in a Luviera box', care: CARE },
  bracelets: { sizes: ONE, includes: 'One bracelet in a Luviera box', care: CARE },
  bangles: { sizes: BANGLE, includes: 'Bangles in a Luviera box', care: CARE },
}

const GOLD = '18K Gold Plated'
const ROSE = 'Rose Gold Plated'

const item = (category) => (p) => {
  const base = { category, ...CATEGORY[category], ...p }
  return { ...base, occasions: base.wear }
}
const ring = item('rings')
const necklace = item('necklaces')
const earring = item('earrings')
const bracelet = item('bracelets')
const bangle = item('bangles')

const raw = [
  necklace({ n: 1, name: 'Solitaire Drop Pendant', fabric: GOLD, fit: 'Adjustable 16-18 in', color: 'Gold', hex: '#c9a15c', wear: ['everyday'], price: 2490, rating: 4.8, reviews: 214, bestseller: true, badge: 'Bestseller', blurb: 'A single round-cut stone on a fine chain. The pendant you never take off.' }),
  necklace({ n: 2, name: 'Twin Mangalsutra Set', fabric: GOLD, fit: '20 in', color: 'Gold & Black', hex: '#3a2e25', wear: ['bridal'], price: 5990, rating: 4.8, reviews: 88, blurb: 'Two delicate mangalsutras in black beads and gold, one long, one short, to wear together.' }),
  necklace({ n: 3, name: 'Fine Link Chain', fabric: GOLD, fit: '18 in', color: 'Gold', hex: '#c8a35f', wear: ['everyday'], price: 1890, rating: 4.7, reviews: 131, blurb: 'A whisper-fine link chain that layers with everything.' }),
  necklace({ n: 4, name: 'Garden Mangalsutra Set', fabric: GOLD, fit: '20 in', color: 'Gold & Black', hex: '#4a3b2a', wear: ['bridal', 'heirloom'], price: 6990, rating: 4.9, reviews: 64, isNew: true, badge: 'New', blurb: 'A pendant mangalsutra with matching drop earrings, set with tiny white stones.' }),
  ring({ n: 5, name: 'Blossom Diamond Ring', fabric: GOLD, fit: 'Cocktail', color: 'Gold', hex: '#d4af6a', wear: ['bridal'], price: 4490, rating: 4.9, reviews: 96, bestseller: true, badge: 'Bestseller', blurb: 'Petals of pavé stones open around a brilliant centre. Comes in our signature box.' }),
  ring({ n: 6, name: 'Stacked Eternity Rings', fabric: GOLD, fit: 'Set of 3', color: 'Gold', hex: '#a57a3e', wear: ['heirloom', 'bridal'], price: 3990, rating: 4.7, reviews: 58, includes: 'Three stacking rings in a wooden box', blurb: 'Three slim eternity bands to wear stacked or apart.' }),
  necklace({ n: 7, name: 'Leaf Mangalsutra Necklace', fabric: GOLD, fit: '20 in', color: 'Gold & Black', hex: '#5a4630', wear: ['bridal'], price: 4990, rating: 4.8, reviews: 72, blurb: 'A leaf-shaped pendant on a double strand of black beads and gold.' }),
  necklace({ n: 8, name: 'Black Bead Mangalsutra', fabric: GOLD, fit: '18 in', color: 'Gold & Black', hex: '#3b3027', wear: ['bridal', 'everyday'], price: 2990, rating: 4.7, reviews: 119, blurb: 'A light, modern mangalsutra for every day after the wedding.' }),
  necklace({ n: 9, name: 'Minimal Square Pendant', fabric: GOLD, fit: '16 in', color: 'Gold', hex: '#c69d5a', wear: ['everyday'], price: 1690, rating: 4.6, reviews: 77, blurb: 'A tiny square charm on a fine chain. Quiet, but it catches the light.' }),
  necklace({ n: 10, name: 'Celebration Pendant Necklace', fabric: GOLD, fit: '18 in', color: 'Gold', hex: '#c5994f', wear: ['heirloom'], price: 3290, rating: 4.7, reviews: 52, blurb: 'A softly glowing pendant made for gifting, in a ribboned box.' }),
  necklace({ n: 11, name: 'Zigzag Chain Necklace', fabric: GOLD, fit: '18 in', color: 'Gold', hex: '#b88d47', wear: ['everyday'], price: 2290, rating: 4.6, reviews: 61, isNew: true, badge: 'New', blurb: 'A fine chain that folds into a zigzag at the collarbone.' }),
  bangle({ n: 12, name: 'Fluted Gold Bangles', fabric: GOLD, fit: 'Pair', color: 'Gold', hex: '#d1a750', wear: ['heirloom'], price: 3490, rating: 4.8, reviews: 104, includes: 'A pair of bangles in a Luviera box', blurb: 'A pair of bangles with fine fluted lines that catch the light as you move.' }),
  bangle({ n: 13, name: 'Textured Bangle Stack', fabric: GOLD, fit: 'Set of 4', color: 'Gold', hex: '#cba052', wear: ['heirloom', 'bridal'], price: 5490, rating: 4.8, reviews: 67, includes: 'Four bangles in a Luviera box', blurb: 'Four bangles, each with its own hammered or engraved texture.' }),
  bangle({ n: 14, name: 'Braided Gold Bangles', fabric: GOLD, fit: 'Pair', color: 'Gold', hex: '#cfa457', wear: ['heirloom'], price: 3690, rating: 4.7, reviews: 55, includes: 'A pair of bangles in a Luviera box', blurb: 'A pair of braided bangles, made to be worn every day for years.' }),
  bangle({ n: 15, name: 'Classic Gold Bangles', fabric: GOLD, fit: 'Pair', color: 'Gold', hex: '#d0a95e', wear: ['everyday'], price: 2990, rating: 4.7, reviews: 142, bestseller: true, includes: 'A pair of bangles in a Luviera box', blurb: 'Plain, polished, perfectly round. The pair your mother would approve of.' }),
  bangle({ n: 16, name: 'Scalloped Gold Bangles', fabric: GOLD, fit: 'Pair', color: 'Gold', hex: '#cda55b', wear: ['heirloom'], price: 3290, rating: 4.6, reviews: 48, includes: 'A pair of bangles in a Luviera box', blurb: 'Soft scalloped edges on a slim pair.' }),
  bangle({ n: 17, name: 'Festive Bangle Stack', fabric: GOLD, fit: 'Set of 6', color: 'Gold', hex: '#b78a45', wear: ['bridal', 'heirloom'], price: 6490, rating: 4.9, reviews: 39, includes: 'Six bangles in a Luviera box', blurb: 'Six bangles for the wedding week, mixed textures and widths.' }),
  bangle({ n: 18, name: 'Engraved Bangle Set', fabric: GOLD, fit: 'Set of 4', color: 'Gold', hex: '#b88c49', wear: ['heirloom'], price: 4990, rating: 4.7, reviews: 44, includes: 'Four bangles in a Luviera box', blurb: 'Four engraved bangles inspired by temple jewellery.' }),
  bangle({ n: 19, name: 'Temple Bangle Stack', fabric: GOLD, fit: 'Set of 6', color: 'Gold', hex: '#a98142', wear: ['bridal'], price: 6990, compareAt: 7990, rating: 4.8, reviews: 31, badge: 'Sale', includes: 'Six bangles in a Luviera box', blurb: 'A heavier stack with temple motifs, made for bridal days.' }),
  bangle({ n: 20, name: 'Banded Gold Bangles', fabric: GOLD, fit: 'Pair', color: 'Gold', hex: '#d3ad62', wear: ['everyday'], price: 2790, rating: 4.6, reviews: 58, includes: 'A pair of bangles in a Luviera box', blurb: 'A pair of bangles with two fine black bands.' }),
  bracelet({ n: 21, name: 'Wave Cuff Bracelet', fabric: GOLD, fit: 'Open cuff', color: 'Gold', hex: '#c69e57', wear: ['heirloom'], price: 3490, rating: 4.7, reviews: 46, blurb: 'Three waves of polished gold, open at the back to slip on.' }),
  bracelet({ n: 22, name: 'Pearl Slider Bracelet', fabric: GOLD, fit: 'Adjustable', color: 'Gold & Pearl', hex: '#d8c4a0', wear: ['everyday'], price: 2190, rating: 4.7, reviews: 89, family: 'slider', blurb: 'Tiny pearls and stones on a slider chain that fits every wrist.' }),
  bracelet({ n: 23, name: 'Rose Halo Bracelet', fabric: ROSE, fit: 'Adjustable', color: 'Rose Gold', hex: '#d8a48f', wear: ['everyday', 'colour'], price: 2490, rating: 4.8, reviews: 74, blurb: 'A round halo stone on a rose gold chain of tiny crystals.' }),
  bracelet({ n: 24, name: 'Emerald Cuff Bracelet', fabric: GOLD, fit: 'Open cuff', color: 'Emerald', hex: '#2f7a4f', wear: ['colour'], price: 3990, rating: 4.8, reviews: 52, isNew: true, badge: 'New', blurb: 'A slim cuff finished with an emerald-green stone.' }),
  bracelet({ n: 25, name: 'Crystal Slider Bracelet', fabric: GOLD, fit: 'Adjustable', color: 'Gold & Crystal', hex: '#cdb185', wear: ['everyday'], price: 2290, rating: 4.6, reviews: 63, family: 'slider', blurb: 'A row of crystals on a slider, easy to wear to work.' }),
  bracelet({ n: 26, name: 'Tennis Line Bracelet', fabric: GOLD, fit: '7 in', color: 'Gold & Crystal', hex: '#e2cfae', wear: ['bridal'], price: 4490, rating: 4.9, reviews: 118, family: 'tennis', bestseller: true, badge: 'Bestseller', blurb: 'A continuous line of brilliant stones. The bracelet for the big day and every day after.' }),
  bracelet({ n: 27, name: 'Infinity Cuff Bracelet', fabric: GOLD, fit: 'Open cuff', color: 'Gold', hex: '#cba765', wear: ['everyday'], price: 2690, rating: 4.7, reviews: 71, blurb: 'A pavé infinity knot on a slim open cuff.' }),
  bangle({ n: 28, name: 'Mint Enamel Bangle', fabric: GOLD, fit: 'Hinged', color: 'Mint Enamel', hex: '#a9d8c4', wear: ['colour'], price: 3290, rating: 4.7, reviews: 42, isNew: true, badge: 'New', blurb: 'A hinged bangle painted with mint enamel and tiny pink flowers.' }),
  bracelet({ n: 29, name: 'Dainty Slider Bracelet', fabric: GOLD, fit: 'Adjustable', color: 'Gold', hex: '#d2b37c', wear: ['everyday'], price: 1490, rating: 4.6, reviews: 93, family: 'slider', blurb: 'The finest slider bracelet, set with three tiny stones.' }),
  bracelet({ n: 30, name: 'Open Circles Cuff', fabric: GOLD, fit: 'Open cuff', color: 'Gold', hex: '#c09a55', wear: ['everyday'], price: 2890, rating: 4.6, reviews: 37, blurb: 'Linked open circles in polished gold. Modern and light.' }),
  bangle({ n: 31, name: 'Screw Motif Kada', fabric: GOLD, fit: 'Single', color: 'Gold', hex: '#d0aa62', wear: ['everyday'], price: 2490, rating: 4.8, reviews: 156, bestseller: true, includes: 'One kada in a Luviera box', blurb: 'A sleek oval kada with screw motifs. Wear it alone or stacked.' }),
  bracelet({ n: 32, name: 'Charm Chain Bracelet', fabric: GOLD, fit: 'Adjustable', color: 'Gold', hex: '#c9a868', wear: ['everyday'], price: 1890, rating: 4.6, reviews: 49, blurb: 'A fine chain with tiny coin and star charms.' }),
  bracelet({ n: 33, name: 'Serpent Cuff Bracelet', fabric: GOLD, fit: 'Open cuff', color: 'Gold', hex: '#b48c4f', wear: ['heirloom'], price: 3290, rating: 4.7, reviews: 41, blurb: 'A coiled serpent cuff with crystal eyes.' }),
  bracelet({ n: 34, name: 'Sapphire Tennis Bracelet', fabric: GOLD, fit: '7 in', color: 'Sapphire', hex: '#2f4f8f', wear: ['colour'], price: 4990, rating: 4.8, reviews: 57, family: 'tennis', blurb: 'Alternating sapphire-blue and white stones, set in gold.' }),
  necklace({ n: 35, name: 'Teal Bead Layered Necklace', fabric: GOLD, fit: '18-22 in', color: 'Teal', hex: '#1f6f73', wear: ['colour'], price: 3790, rating: 4.7, reviews: 36, family: 'bead-layer', blurb: 'Many strands of teal glass beads gathered with a gold pearl clasp.' }),
  necklace({ n: 36, name: 'Dove Bead Layered Necklace', fabric: GOLD, fit: '18-22 in', color: 'Dove Grey', hex: '#8fa0b0', wear: ['colour'], price: 3790, rating: 4.6, reviews: 29, family: 'bead-layer', blurb: 'The layered bead necklace in a soft dove grey.' }),
  bracelet({ n: 37, name: 'Serpent Watch Bracelet', fabric: GOLD, fit: 'Wrap', color: 'Gold', hex: '#c69a4f', wear: ['heirloom'], price: 8990, rating: 4.9, reviews: 27, isNew: true, badge: 'New', blurb: 'A coiled serpent that wraps the wrist twice, ending in a pavé-framed watch face.' }),
  earring({ n: 38, name: 'Rose Pearl Hoops', fabric: ROSE, fit: 'Huggie', color: 'Rose Gold', hex: '#d3a088', wear: ['everyday'], price: 1990, rating: 4.7, reviews: 84, blurb: 'Chunky rose gold huggies with a pearl at the centre.' }),
  earring({ n: 39, name: 'Geometric Crystal Earrings', fabric: GOLD, fit: 'Drop', color: 'Gold & Crystal', hex: '#cdb58d', wear: ['bridal', 'heirloom'], price: 3490, rating: 4.8, reviews: 46, blurb: 'Stacked geometric frames filled with crystals.' }),
  earring({ n: 40, name: 'Emerald Leaf Studs', fabric: ROSE, fit: 'Stud', color: 'Emerald', hex: '#2f6b4a', wear: ['colour'], price: 2490, rating: 4.8, reviews: 63, family: 'leaf-stud', blurb: 'Rose gold leaves set with emerald-green stones.' }),
  earring({ n: 41, name: 'Amethyst Leaf Studs', fabric: ROSE, fit: 'Stud', color: 'Amethyst', hex: '#7b4d8f', wear: ['colour'], price: 2490, rating: 4.7, reviews: 41, family: 'leaf-stud', blurb: 'The leaf studs with amethyst-purple stones.' }),
  earring({ n: 42, name: 'Rose Leaf Studs', fabric: ROSE, fit: 'Stud', color: 'Rose Gold', hex: '#d7a593', wear: ['everyday'], price: 2290, rating: 4.7, reviews: 55, family: 'leaf-stud', blurb: 'The leaf studs in pure rose gold pavé.' }),
  earring({ n: 43, name: 'Pearl Drop Hoops', fabric: GOLD, fit: 'Hoop', color: 'Gold & Pearl', hex: '#e2d3b8', wear: ['everyday', 'bridal'], price: 2190, rating: 4.8, reviews: 97, bestseller: true, badge: 'Bestseller', blurb: 'Slim gold hoops with a freshwater-style pearl that swings.' }),
  earring({ n: 44, name: 'Pearl Halo Studs', fabric: GOLD, fit: 'Stud', color: 'Pearl', hex: '#e8e0cf', wear: ['bridal'], price: 2790, rating: 4.8, reviews: 59, blurb: 'A round pearl inside a ring of gold beads.' }),
  earring({ n: 45, name: 'Sapphire Drop Earrings', fabric: GOLD, fit: 'Drop', color: 'Sapphire', hex: '#2b4a8b', wear: ['colour'], price: 2990, compareAt: 3490, rating: 4.7, reviews: 38, badge: 'Sale', blurb: 'Sapphire-blue drops framed in gold rope.' }),
  bracelet({ n: 46, name: 'Diamond Tennis Bracelet', fabric: GOLD, fit: '7 in', color: 'Gold & Crystal', hex: '#e6d7bd', wear: ['bridal'], price: 5490, rating: 4.9, reviews: 73, family: 'tennis', blurb: 'Square-set brilliant stones in a slim gold line.' }),
  bracelet({ n: 47, name: 'Lapis Bead Bracelet', fabric: GOLD, fit: 'Stretch', color: 'Lapis', hex: '#2c4a86', wear: ['colour'], price: 1690, rating: 4.6, reviews: 44, blurb: 'Faceted lapis-blue beads with gold spacers.' }),
  necklace({ n: 48, name: 'Black Bead Bridal Set', fabric: GOLD, fit: '18 in', color: 'Gold & Black', hex: '#2d2621', wear: ['bridal'], price: 5490, compareAt: 6490, rating: 4.8, reviews: 49, badge: 'Sale', blurb: 'A pearl-studded black bead necklace with matching earrings.' }),
  ring({ n: 49, name: 'Flower Cocktail Ring', fabric: GOLD, fit: 'Cocktail', color: 'Gold', hex: '#d8b26c', wear: ['bridal', 'heirloom'], price: 3990, rating: 4.8, reviews: 62, blurb: 'A full bloom of pavé petals around a single brilliant.' }),
  ring({ n: 50, name: 'Sunburst Ring', fabric: GOLD, fit: 'Statement', color: 'Gold', hex: '#d4b06e', wear: ['everyday'], price: 2990, rating: 4.7, reviews: 51, isNew: true, badge: 'New', blurb: 'Rays of stones fan out from a round centre stone.' }),
  bracelet({ n: 51, name: 'Diamond Point Cuff', fabric: GOLD, fit: 'Open cuff', color: 'Gold', hex: '#cdb187', wear: ['everyday'], price: 2490, rating: 4.6, reviews: 34, blurb: 'A whisper-thin open cuff ending in two brilliant points.' }),
  ring({ n: 52, name: 'Ruby Serpent Ring', fabric: GOLD, fit: 'Wrap', color: 'Ruby', hex: '#a33a2c', wear: ['colour', 'heirloom'], price: 3490, rating: 4.8, reviews: 47, blurb: 'A coiled serpent ring with a ruby-red stone at its head.' }),
]

const slugify = (s) => s.toLowerCase().replace(/[’']/g, '').replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const id = (n) => `j${String(n).padStart(2, '0')}`

export const products = raw.map(({ n, ...p }) => ({
  id: id(n),
  slug: slugify(p.name),
  images: [`${id(n)}-1`, `${id(n)}-2`],
  cut: p.fit,
  model: p.sizes === RING ? '14' : p.sizes === BANGLE ? '2.6' : 'One size',
  ...p,
}))

export const getProduct = (pid) => products.find((p) => p.id === pid)
export const getProductBySlug = (slug) => products.find((p) => p.slug === slug)
