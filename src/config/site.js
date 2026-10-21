// Brand-level settings. Change the name, offers, fees or contact details here, not in components.
export const site = {
  name: 'Luviera',
  tagline: 'A little more luxurious.',
  currency: 'INR',
  locale: 'en-IN',
  freeShippingOver: 2999,
  shippingFee: 149,
  codFee: 79,
  stitchFee: 0,
  orderPrefix: 'LV',
  instagram: '@luviera.jewels',
  phone: '+91 98200 77461',
  email: 'concierge@luviera.in',

  announcements: ['Complimentary insured shipping above ₹2,999', 'Every piece arrives in our signature box', 'First piece? Take 10% off with LUXE10'],

  // Coupon codes accepted at bag / checkout (demo).
  coupons: {
    LUXE10: { type: 'percent', value: 10, label: '10% off your first piece' },
    GIFT500: { type: 'flat', value: 500, label: '₹500 off orders above ₹4,999', min: 4999 },
    BRIDAL1000: { type: 'flat', value: 1000, label: '₹1,000 off orders above ₹9,999', min: 9999 },
  },

  footer: {
    blurb: 'Rings, necklaces, earrings, bracelets and bangles, finished by hand and boxed to be given. A little more luxurious.',
    columns: [
      {
        title: 'Jewellery',
        links: [
          { label: 'Rings', to: '/shop/rings' },
          { label: 'Necklaces', to: '/shop/necklaces' },
          { label: 'Earrings', to: '/shop/earrings' },
          { label: 'Bracelets', to: '/shop/bracelets' },
          { label: 'Bangles', to: '/shop/bangles' },
          { label: 'Bridal', to: '/shop?occasion=bridal' },
        ],
      },
      {
        title: 'Help',
        links: [
          { label: 'Size guide', to: '/help#sizing' },
          { label: 'Shipping', to: '/help#shipping' },
          { label: 'Returns', to: '/help#returns' },
          { label: 'Track order', to: '/account' },
          { label: 'Contact', to: '/help#contact' },
        ],
      },
      {
        title: 'Luviera',
        links: [
          { label: 'About us', to: '/about' },
          { label: 'Gift finder', to: '/#gifts' },
          { label: 'Wishlist', to: '/wishlist' },
          { label: 'Privacy', to: '/help#privacy' },
        ],
      },
    ],
  },
}
