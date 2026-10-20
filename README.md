# Luviera

A demo storefront for Luviera, "A little more luxurious.": rings, necklaces and mangalsutras, earrings, bracelets and bangles in 18K gold and rose gold plating. 52 pieces from ₹1,490 to ₹8,990.

## Run it

```bash
npm install
npm run dev
```

Build with `npm run build`, then preview with `npm run preview`.

## What works

- **Home:**
  - A portrait hero slider with "Timeless brilliance". A card on the photo names the piece she is wearing.
  - Category tiles and four collection banners.
  - Loved most, the craft story and the promises.
  - **Gift finder:** pick the moment and drag the budget to see the best pieces under it.
  - Client notes, the journal, coupon codes and an Instagram wall.
- **Shop:**
  - Collections and Jewellery menus.
  - Categories: Rings, Necklaces, Earrings, Bracelets, Bangles.
  - Filters in the URL: material, collection, colour, price.
  - Sort, and search with suggestions.
- **Product page:**
  - Gallery with zoom, and finish siblings.
  - Ring sizes 10 to 18 and bangle sizes 2.4 to 2.8, with a size guide in mm.
  - Pincode check, reviews, related and recently viewed.
- **Bag:**
  - Drawer and full page.
  - Free insured shipping over ₹2,999.
  - Coupons: `LUXE10`, `GIFT500` (₹4,999+), `BRIDAL1000` (₹9,999+).
- **Checkout:**
  - Address with pincode autofill, then UPI, card, net banking or COD (₹79).
  - Order confirmation and order history on this device.
- **Also:** wishlist, account, help/FAQ, about us, a 404 page and an error page.

All data is local (`src/data`). The cart, wishlist and orders are saved in localStorage. No real payment is taken. Reviews and client notes are sample content.

## Stack

- Vite, React 19, React Router 7 and Tailwind CSS v4
- Motion, Lenis and Phosphor icons
- Cormorant Garamond and Instrument Sans
