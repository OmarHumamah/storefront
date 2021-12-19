let initialState = {
  products: [
    {
      category: 'TVs',
      name: 'Smart TV 42"',
      price: 599,
      description: 'Smart tv with android 11 os and with size 42"',
      inventory: 1
    },
    {
      category: 'Phons',
      name: 'I Fruit xs',
      price: 220,
      description: 'I Fruit xs 250G + 6G octa-core 5G',
      inventory: 2
    },
    {
      category: 'Watches',
      name: 'sun-song watch',
      price: 150,
      description: 'sun-song watch smart watch for smart phones 2G ram',
      inventory: 3
    },
    {
      category: 'TVs',
      name: 'LED TV 32"',
      price: 109,
      description: 'LED TV with two HDMI ports 32"',
      inventory: 4
    },
    {
      category: 'Phons',
      name: 'Sun-Song s15',
      price: 899,
      description: 'Sun-Song s15 with android 12 os 256G + 12G, O-LED 9" 5G ',
      inventory: 5
    },
    {
      category: 'Watches',
      name: 'I Watch',
      price: 369,
      description: 'I Watch watch smart watch for I fruit phones 4G ram',
      inventory: 6
    },

  ],
}

const prodReducer = (state = initialState, action) => {
  let { type } = action;

  switch (type) {
    case 'SETCATEGORY':
      let products = initialState.products;
      return { products };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

export default prodReducer;