import {svg} from '../assets/svg';

const tabs = [
  {
    id: 1,
    name: 'Home',
    icon: svg.HomeTabSvg,
  },
  {
    id: 2,
    name: 'Categories',
    icon: svg.CategoriesTabSvg,
  },
  {
    id: 3,
    name: 'Order',
    icon: svg.OrderTabSvg,
  },
  {
    id: 4,
    name: 'Wishlist',
    icon: svg.WishlistTabSvg,
  },
  {
    id: 5,
    name: 'Profile',
    icon: svg.ProfileTabSvg,
  },
];

const onboardingData = [
  {
    title: 'Welcome\nto Funiq!',
    description: 'Labore sunt culpa excepteur\nculpa occaecat ex nisi mollit.',
    image: 'https://george-fx.github.io/manero/onboarding/01.jpg',
  },
  {
    title: 'Easy Track\nyour Order!',
    description: 'Labore sunt culpa\nexcepteur culpa occaecat ex nisi mollit.',
    image: 'https://george-fx.github.io/manero/onboarding/02.jpg',
  },
  {
    title: 'Door to Door\nDelivery!',
    description: 'Labore sunt culpa\nexcepteur culpa occaecat ex nisi mollit.',
    image: 'https://george-fx.github.io/manero/onboarding/03.jpg',
  },
];

const sortingBy = [
  {id: 1, title: 'Best match'},
  {id: 2, title: 'Price: low to high'},
  {id: 3, title: 'Price: high to low'},
  {id: 4, title: 'Newest'},
  {id: 5, title: 'Customer rating'},
  {id: 6, title: 'Most popular'},
];

const reviews = [
  {
    id: 1,
    name: 'Adrianna Mercado',
    image: 'https://george-fx.github.io/manero/reviews/01.jpg',
    comment:
      'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
    rating: 5,
    date: '23 Jan 2022',
  },
  {
    id: 2,
    name: 'Dante Valdez',
    image: 'https://george-fx.github.io/manero/reviews/02.jpg',
    comment:
      'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
    rating: 5,
    date: '23 Jan 2022',
  },
  {
    id: 3,
    name: 'Troy Ingram',
    image: 'https://george-fx.github.io/manero/reviews/03.jpg',
    comment:
      'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
    rating: 5,
    date: '23 Jan 2022',
  },
  {
    id: 4,
    name: 'Joshua Bean',
    image: 'https://george-fx.github.io/manero/reviews/04.jpg',
    comment:
      'Consequat ut ea dolor aliqua laborum tempor Lorem culpa. Commodo veniam sint est mollit proident commodo.',
    rating: 5,
    date: '23 Jan 2022',
  },
];

const payments = [
  {
    id: 1,
    type: 'Visa',
    number: ' **** 4864',
    icon: 'https://george-fx.github.io/kastelli/payments/01.png',
  },
  {
    id: 2,
    type: 'Mastercard',
    number: ' **** 3597',
    icon: 'https://george-fx.github.io/kastelli/payments/02.png',
  },
  {
    id: 3,
    type: 'Apple Pay',
    icon: 'https://george-fx.github.io/kastelli/payments/03.png',
  },
];

const products = [
  {
    id: 1,
    name: 'Kids Red Hoodie, S, pink',
    quantity: 1,
    price: 34.95,
  },
  {
    id: 2,
    name: 'Kids Red Hoodie, S, pink',
    quantity: 1,
    price: 34.95,
  },
];

const history = [
  {
    id: 1,
    orderId: 456654,
    date: 'Aug 31, 2023',
    time: 'at 8:32 pm',
    total: 25.83,
    status: 'Shipping',
    products: products,
  },
  {
    id: 2,
    orderId: 456654,
    date: 'Aug 31, 2023',
    time: 'at 8:32 pm',
    total: 281.85,
    status: 'Delivered',
    products: products,
  },
  {
    id: 3,
    orderId: 456654,
    date: 'Aug 31, 2023',
    time: 'at 8:32 pm',
    total: 281.85,
    status: 'Canceled',
    products: products,
  },
];

const cards = [
  {
    id: 1,
    image: 'https://george-fx.github.io/manero/cards/01.jpg',
  },
  {
    id: 2,
    image: 'https://george-fx.github.io/manero/cards/02.jpg',
  },
  {
    id: 3,
    image: 'https://george-fx.github.io/manero/cards/03.jpg',
  },
];

export {tabs, onboardingData, reviews, payments, sortingBy, history, cards};
