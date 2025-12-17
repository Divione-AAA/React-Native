export const categories = [
  {
    id: 1,
    name: 'Pizza',
    image: require('../assets/images/pizzaIcon.png'),
  },
  {
    id: 2,
    name: 'Burger',
    image: require('../assets/images/pizzaIcon.png'),
  },
  {
    id: 3,
    name: 'Italian',
    image: require('../assets/images/pizzaIcon.png'),
  },
  {
    id: 4,
    name: 'Chinese',
    image: require('../assets/images/pizzaIcon.png'),
  },
  {
    id: 5,
    name: 'Noodles',
    image: require('../assets/images/pizzaIcon.png'),
  },
  {
    id: 6,
    name: 'Desserts',
    image: require('../assets/images/pizzaIcon.png'),
  },
  {
    id: 7,
    name: 'Drinks',
    image: require('../assets/images/pizzaIcon.png'),
  },
];

export const featured = [
  {
    id: 1,
    title: 'KFC Favorites',
    description: 'Crispy chicken and classic sides',
    restaurants: [
      {
        id: 1,
        name: 'KFC Express',
        image: require('../assets/images/kfc.webp'),
        description: 'Fried chicken, fries and drinks',
        lng: 38.2145602,
        lat: -85.5324269,
        address: '101 Chicken Blvd',
        stars: 4.3,
        reviews: '5.2k',
        category: 'Fast Food',
        dishes: [
          {
            id: 1,
            name: 'Original Recipe Chicken',
            description: '11 herbs and spices classic',
            price: 7.99,
            image: require('../assets/images/kfc.webp'),
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Fast Food Mix',
    description: 'Burgers, fries and onion rings',
    restaurants: [
      {
        id: 2,
        name: 'Snack Town',
        image: require('../assets/images/disadvantages-of-fast-food (1).webp'),
        description: 'All your guilty pleasures',
        lng: 38.2150001,
        lat: -85.5301234,
        address: '202 Grease Street',
        stars: 4.1,
        reviews: '3.9k',
        category: 'Fast Food',
        dishes: [
          {
            id: 1,
            name: 'Double Cheeseburger',
            description: 'Stacked beef and cheddar',
            price: 6.49,
            image: require('../assets/images/disadvantages-of-fast-food (1).webp'),
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Fried Sandwiches',
    description: 'Crispy sandwiches and sides',
    restaurants: [
      {
        id: 3,
        name: 'Crunch Bite',
        image: require('../assets/images/download (7).jpeg'),
        description: 'Sandwiches with a crunch',
        lng: 38.2167890,
        lat: -85.5312345,
        address: '303 Crust Avenue',
        stars: 4.0,
        reviews: '2.7k',
        category: 'Sandwiches',
        dishes: [
          {
            id: 1,
            name: 'Fried Chicken Sandwich',
            description: 'Golden fried with pickles',
            price: 5.99,
            image: require('../assets/images/download (7).jpeg'),
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Pizza Night',
    description: 'Cheesy slices and sides',
    restaurants: [
      {
        id: 4,
        name: 'Napoli Pie',
        image: require('../assets/images/n7yx-hero (1).jpg'),
        description: 'Classic pizza and garlic bread',
        lng: 38.2176543,
        lat: -85.5329876,
        address: '404 Dough Street',
        stars: 4.6,
        reviews: '6.1k',
        category: 'Pizza',
        dishes: [
          {
            id: 1,
            name: 'Margherita Pizza',
            description: 'Tomato, mozzarella and basil',
            price: 8.99,
            image: require('../assets/images/n7yx-hero (1).jpg'),
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Asian Bowls',
    description: 'Noodles, veggies and flavor',
    restaurants: [
      {
        id: 5,
        name: 'Wok & Roll',
        image: require('../assets/images/rawImage (1).jpg'),
        description: 'Fresh stir-fry and noodles',
        lng: 38.2181234,
        lat: -85.5334567,
        address: '505 Bamboo Road',
        stars: 4.4,
        reviews: '4.8k',
        category: 'Asian',
        dishes: [
          {
            id: 1,
            name: 'Vegetable Lo Mein',
            description: 'Savory noodles with mixed veggies',
            price: 7.49,
            image: require('../assets/images/rawImage (1).jpg'),
          },
        ],
      },
    ],
  },
];

