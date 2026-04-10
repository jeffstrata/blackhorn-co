// =============================================================================
// BLACKHORN CO. — PRODUCT INVENTORY
// =============================================================================
//
// HOW TO ADD A NEW PRODUCT:
//   1. Copy one of the existing product blocks below
//   2. Paste it after the last item (before the closing bracket "]")
//   3. Update the following fields:
//      - id:          A unique number (just use the next number in sequence)
//      - name:        The name/title of the piece (e.g., "Painted Longhorn #7")
//      - category:    Must be one of: "Longhorn" | "Bison" | "Yak" | "Ram" | "Small Skulls" | "Other"
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
export type ProductStatus = 'available' | 'sold'

export interface Product {
  id: number
  name: string
  category: ProductCategory
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
    name: 'Sunset Longhorn',
    category: 'Longhorn',
    price: 850,
    image: '',
    description: 'A stunning full-spread longhorn skull with hand-painted warm desert tones. The horns span over four feet and command any room.',
    status: 'available',
  },
  {
    id: 2,
    name: 'Prairie Wind Longhorn',
    category: 'Longhorn',
    price: 725,
    image: '',
    description: 'Classic longhorn with a sweeping natural arch. Painted in muted sage and earth tones that evoke the Alberta foothills.',
    status: 'available',
  },
  {
    id: 3,
    name: 'Midnight Bison',
    category: 'Bison',
    price: 550,
    image: '',
    description: 'Massive bison skull with deep charcoal and midnight blue accents. A bold statement piece for any western-inspired space.',
    status: 'available',
  },
  {
    id: 4,
    name: 'Golden Bison',
    category: 'Bison',
    price: 475,
    image: '',
    description: 'Ethically sourced bison skull painted in warm gold and rust tones. Pairs beautifully with natural wood and leather interiors.',
    status: 'available',
  },
  {
    id: 5,
    name: 'Highland Yak',
    category: 'Yak',
    price: 1300,
    image: '',
    description: 'Rare full yak skull with dramatic curved horns. Painted in deep burgundy and copper — a true centerpiece.',
    status: 'available',
  },
  {
    id: 6,
    name: 'Storm Yak',
    category: 'Yak',
    price: 950,
    image: '',
    description: 'Striking yak skull featuring storm grey and electric blue hand-painted detail work. One-of-a-kind artist collaboration.',
    status: 'sold',
  },
  {
    id: 7,
    name: 'Rocky Ram',
    category: 'Ram',
    price: 600,
    image: '',
    description: 'Beautiful bighorn ram skull with tightly coiled horns. Finished in natural bone tones with subtle copper leaf accents.',
    status: 'available',
  },
  {
    id: 8,
    name: 'Desert Ram',
    category: 'Ram',
    price: 600,
    image: '',
    description: 'Ram skull painted with desert sunset gradients — deep terracotta fading to ochre. Ready to ship.',
    status: 'available',
  },
  {
    id: 9,
    name: 'Little Boar',
    category: 'Small Skulls',
    price: 185,
    image: '',
    description: 'Small wild boar skull with hand-detailed snout and tusks. Painted in a rugged charcoal wash. Great for shelf displays.',
    status: 'available',
  },
  {
    id: 10,
    name: 'Painted Piglet',
    category: 'Small Skulls',
    price: 95,
    image: '',
    description: 'Compact and detailed small pig skull with a whimsical floral pattern. A conversation piece that surprises at every angle.',
    status: 'available',
  },
]
