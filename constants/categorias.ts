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
    title: 'Hot and Spicy',
    description: 'Soft and tender fried chicken',
    restaurants: [
      {
        id: 1,
        name: 'Papa Johns',
        image: require('../assets/images/pizza.png'),
        description: 'Hot and spicy pizzas',
        lng: 38.2145602,
        lat: -85.5324269,
        address: '434 Second Street',
        stars: 4,
        reviews: '4.4k',
        category: 'Fast Food',
        dishes: [
          {
            id: 1,
            name: 'Spicy Pepperoni',
            description: 'Pepperoni pizza with extra chili',
            price: 9.99,
            image: require('../assets/images/spicyPepperoni.png'),
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Sweet Treats',
    description: 'Delicious desserts to satisfy your cravings',
    restaurants: [
      {
        id: 2,
        name: 'Sugar Rush',
        image: require('../assets/images/dessert.png'),
        description: 'Cakes, cupcakes and more',
        lng: 38.2150001,
        lat: -85.5301234,
        address: '123 Candy Lane',
        stars: 4.5,
        reviews: '2.1k',
        category: 'Desserts',
        dishes: [
          {
            id: 1,
            name: 'Chocolate Lava Cake',
            description: 'Warm chocolate cake with molten center',
            price: 6.99,
            image: require('../assets/images/lavaCake.png'),
          },
          {
            id: 2,
            name: 'Strawberry Cheesecake',
            description: 'Creamy cheesecake topped with fresh strawberries',
            price: 7.49,
            image: require('../assets/images/cheesecake.png'),
          },
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Asian Delights',
    description: 'Savory flavors from the East',
    restaurants: [
      {
        id: 3,
        name: 'Wok Express',
        image: require('../assets/images/chinese.png'),
        description: 'Authentic Chinese and Thai dishes',
        lng: 38.2167890,
        lat: -85.5312345,
        address: '88 Bamboo Street',
        stars: 4.2,
        reviews: '3.8k',
        category: 'Asian',
        dishes: [
          {
            id: 1,
            name: 'Kung Pao Chicken',
            description: 'Spicy stir-fried chicken with peanuts',
            price: 8.99,
            image: require('../assets/images/kungPao.png'),
          },
          {
            id: 2,
            name: 'Pad Thai',
            description: 'Rice noodles with shrimp and tamarind sauce',
            price: 9.49,
            image: require('../assets/images/padThai.png'),
          },
        ],
      },
    ],
  },
];
