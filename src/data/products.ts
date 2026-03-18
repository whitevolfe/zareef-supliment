export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'sports' | 'gym';
  image: string;
  description: string;
  featured?: boolean;
}

export const products: Product[] = [
  // sports supplements
  {
    id: 'e1',
    name: 'Whey Protein Isolate',
    price: 12999,
    category: 'sports',
    image: '/assets/suppliment1.webp',
    description: 'High-quality whey protein for muscle recovery',
    featured: true,
  },
  {
    id: 'e2',
    name: 'Creatine Monohydrate',
    price: 24999,
    category: 'sports',
    image: '/assets/suppliment3.webp',
    description: 'Boost strength and power during workouts',
    featured: true,
  },
  {
    id: 'e3',
    name: 'BCAA Powder',
    price: 8999,
    category: 'sports',
    image: '/assets/suppliment4.jpg',
    description: 'Branched-chain amino acids for endurance and recovery',
  },
  {
    id: 'e4',
    name: 'Pre-Workout Energy Mix',
    price: 4999,
    category: 'sports',
    image: '/assets/suppliment5.jpg',
    description: 'Increase energy and focus before training',
  },
  {
    id: 'e5',
    name: 'Omega-3 Fish Oil',
    price: 3499,
    category: 'sports',
    image: '/assets/suppliment6.jpg',
    description: 'Supports heart, joint, and brain health',
  },
  {
    id: 'e6',
    name: 'Multivitamin Capsules',
    price: 5999,
    category: 'sports',
    image: '/assets/suppliment7.jpg',
    description: 'Daily vitamins to support overall health',
  },

  // gym / wellness supplements
  {
    id: 'c1',
    name: 'Collagen Peptides Powder',
    price: 4500,
    category: 'gym',
    image: '/assets/suppliment8.jpg',
    description: 'Supports skin, hair, nails, and joint health',
    featured: true,
  },
  {
    id: 'c2',
    name: 'Vitamin C & Zinc Gummies',
    price: 6999,
    category: 'gym',
    image: '/assets/suppliment9.jpg',
    description: 'Immune-boosting daily gummies',
    featured: true,
  },
  {
    id: 'c3',
    name: 'Magnesium & Calcium Complex',
    price: 2999,
    category: 'gym',
    image: '/assets/suppliment10.jpg',
    description: 'Supports bone health and muscle relaxation',
  },
  {
    id: 'c4',
    name: 'Detox Green Tea Blend',
    price: 3999,
    category: 'gym',
    image: '/assets/suppliment1.webp',
    description: 'Natural detox and metabolism support',
  },
  // {
  //   id: 'c5',
  //   name: 'Hair & Nail Biotin Capsules',
  //   price: 5499,
  //   category: 'gym',
  //   image: '/assets/suppliment2.webp',
  //   description: 'Strengthens hair and nails',
  // },
  {
    id: 'c6',
    name: 'Aromatherapy Essential Oil Set',
    price: 8999,
    category: 'gym',
    image: '/assets/suppliment4.jpg',
    description: 'Relaxation and wellness with natural oils',
  },
];
