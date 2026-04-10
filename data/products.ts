// =============================================================================
// BLACKHORN CO. — PRODUCT INVENTORY
// =============================================================================
//
// HOW TO ADD A NEW PRODUCT:
//   1. Copy one of the existing product blocks below
//   2. Paste it after the last item (before the closing bracket "]")
//   3. Update the following fields:
//      - id:          A unique number (just use the next number in sequence)
//      - name:        The name/title of the piece (e.g., "Longhorn #7")
//      - category:    Must be one of: "Longhorn" | "Bison" | "Yak" | "Ram" | "Small Skulls" | "Other"
//      - finish:      "natural" if it's a cleaned bone skull with no paint
//                     "painted" if it has been hand-painted by an artist
//      - price:       The price as a number (e.g., 750 for $750 CAD)
//      - image:       Path to the image file in /public/images/ (e.g., "/images/longhorn-7.jpg")
//                     — Leave as "" if you don't have a photo yet
//      - description: A short 1-2 sentence description of the piece
//      - status:      "available" if it's for sale, "sold" if it has already sold
//
// HOW TO MARK A PIECE AS SOLD:
//   Change status: "available" to status: "sold"
//   The card will automatically show a "Sold" badge on the website.
//
// HOW TO REMOVE A PRODUCT:
//   Delete the entire block for that product (from the opening { to the closing },)
//   Make sure to remove any trailing comma issues.
//
// =============================================================================

export type ProductCategory = 'Longhorn' | 'Bison' | 'Yak' | 'Ram' | 'Small Skulls' | 'Other'
export type ProductFinish = 'natural' | 'painted'
export type ProductStatus = 'available' | 'sold'

export interface Product {
  id: number
  name: string
  category: ProductCategory
  finish: ProductFinish
  price: number
  image: string
  description: string
  status: ProductStatus
}

// =============================================================================
// YOUR PRODUCTS — EDIT THIS LIST TO UPDATE YOUR INVENTORY
// =============================================================================

export const products: Product[] = [
  {
    id: 1,
    name: 'Longhorn #1',
    category: 'Longhorn',
    finish: 'natural',
    price: 650,
    image: '',
    description: 'Full-spread longhorn skull, hand-cleaned to a natural bone finish. The horns span over four feet — a commanding piece straight from the range.',
    status: 'available',
  },
  {
    id: 2,
    name: 'Sunset Longhorn',
    category: 'Longhorn',
    finish: 'painted',
    price: 850,
    image: '',
    description: 'Hand-painted longhorn skull in warm desert tones — deep terracotta fading into ochre across the full span of the horns.',
    status: 'available',
  },
  {
    id: 3,
    name: 'Bison #1',
    category: 'Bison',
    finish: 'natural',
    price: 400,
    image: '',
    description: 'Massive bison skull, professionally cleaned and whitened to a clean bone finish. Impressive scale and natural presence.',
    status: 'available',
  },
  {
    id: 4,
    name: 'Golden Bison',
    category: 'Bison',
    finish: 'painted',
    price: 550,
    image: '',
    description: 'Ethically sourced bison skull painted in warm gold and rust tones. Pairs beautifully with natural wood and leather interiors.',
    status: 'available',
  },
  {
    id: 5,
    name: 'Yak #1',
    category: 'Yak',
    finish: 'natural',
    price: 400,
    image: '',
    description: 'Rare full yak skull with dramatic curved horns, hand-cleaned to natural bone. A striking conversation piece as-is.',
    status: 'available',
  },
  {
    id: 6,
    name: 'Highland Yak',
    category: 'Yak',
    finish: 'painted',
    price: 1300,
    image: '',
    description: 'Full yak skull with dramatic curved horns, painted in deep burgundy and copper by an Alberta artist — a true centerpiece.',
    status: 'available',
  },
  {
    id: 7,
    name: 'Storm Yak',
    category: 'Yak',
    finish: 'painted',
    price: 950,
    image: '',
    description: 'Striking yak skull featuring storm grey and electric blue hand-painted detail work. One-of-a-kind artist collaboration.',
    status: 'sold',
  },
  {
    id: 8,
    name: 'Ram #1',
    category: 'Ram',
    finish: 'natural',
    price: 600,
    image: '',
    description: 'Bighorn ram skull with tightly coiled horns, cleaned to a natural bone finish. Raw western character, ready to hang.',
    status: 'available',
  },
  {
    id: 9,
    name: 'Desert Ram',
    category: 'Ram',
    finish: 'painted',
    price: 600,
    image: '',
    description: 'Ram skull painted with desert sunset gradients — deep terracotta fading to ochre across the bone.',
    status: 'available',
  },
  {
    id: 10,
    name: 'Small Skull #1',
    category: 'Small Skulls',
    finish: 'natural',
    price: 75,
    image: '',
    description: 'Small cleaned skull — natural bone finish, great for shelf or mantle displays. Species available, ask for details.',
    status: 'available',
  },
  {
    id: 11,
    name: 'Painted Piglet',
    category: 'Small Skulls',
    finish: 'painted',
    price: 95,
    image: '',
    description: 'Compact pig skull with a hand-painted floral pattern. A conversation piece that surprises at every angle.',
    status: 'available',
  },
]
