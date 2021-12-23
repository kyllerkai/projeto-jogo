/* eslint-disable */
export const images = [
  {
    id: '01',
    src: 'https://th.bing.com/th/id/R.1f0262335e583ddf6f79025d19c2632d?rik=OWYeoWi%2bevpK%2bg&pid=ImgRaw&r=0',
    alt: 'Awesome watch',
  },
  {
    id: '02',
    src: 'https://images.unsplash.com/photo-1451290337906-ac938fc89bce?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1777&q=80',
    alt: 'Awesome watch',
  },
  {
    id: '03',
    src: 'https://images.unsplash.com/photo-1568010434570-74e9ba7126bc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    alt: 'Awesome watch',
  },
  {
    id: '04',
    src: 'https://images.unsplash.com/photo-1569411032431-07598b0012c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    alt: 'Awesome watch',
  },
  {
    id: '05',
    src: 'https://images.unsplash.com/photo-1569411032431-07598b0012c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    alt: 'Awesome watch',
  },
]

export const products = [
  {
    id: '1',
    name: 'Wonder Egg Priority',
    currency: 'USD',
    price: 199,
    flag: 'new',
    imageUrl:
      'https://th.bing.com/th/id/R.1f0262335e583ddf6f79025d19c2632d?rik=OWYeoWi%2bevpK%2bg&pid=ImgRaw&r=0',
    rating: 4,
    ratingCount: 1,
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    images,
  },
  {
    id: '2',
    name: 'Demon Slayer',
    currency: 'USD',
    price: 199,
    salePrice: 179.99,
    flag: 'on-sale',
    imageUrl:
      'https://miro.medium.com/max/2128/1*1-4soyboICWuaciWYm_A1A.jpeg',
    rating: 4,
    ratingCount: 12,
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    images,
  },
  {
    id: '3',
    name: 'Dragon Ball Kai',
    currency: 'USD',
    price: 199,
    imageUrl:
      'https://th.bing.com/th/id/R.6e012598a852f80a8903c8d0fcda5fd5?rik=47MRmCN6kU7ujg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-RYLdq1RRyT8%2fTZs6fSnz03I%2fAAAAAAAACRQ%2fomEGjYYbfWw%2fs1600%2fdragon_ball_kai.jpg&ehk=T87v22J6Dy%2bTm9%2bt%2fAzZcbzYXwohsHeg27Gu8MCggfA%3d&risl=&pid=ImgRaw&r=0',
    rating: 4,
    ratingCount: 12,
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    images,
  },
  {
    id: '4',
    name: 'Kakegurui',
    currency: 'GBP',
    price: 199,
    imageUrl:
      'https://i.pinimg.com/originals/d4/ed/97/d4ed97a3a932c30019e8f5a89e43f4bc.jpg',
    rating: 5,
    ratingCount: 1,
    description:
      'With a sleek design and a captivating essence, this is a modern Classic made for every occasion.',
    images,
  },
]

export type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never

export type Product = ElementType<typeof products>
export type ProductImage = ElementType<typeof images>
