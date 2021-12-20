let initialState = {
  categories: [
    {
      name: 'TVs',
      displayName: 'TVs!',
      description: 'Display monitors'
    },
    {
      name: 'Phons',
      displayName: 'Phons!',
      description: 'Mobile phons smart'
    },
    {
      name: 'Watches',
      displayName: 'Watches!',
      description: 'Smart watches for phons'
    },
  ],
  activeCategory: null,
}

const catReducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'SETCATEGORY':
      let activeCategory = payload;
      let categories = initialState.categories;
      return { activeCategory, categories };

    case 'RESET':
      return { ...state, activeCategory: initialState.activeCategory};

    default:
      return state;
  }
}

export const setActiveCategory = (category) => {
  return {
    type: 'SETCATEGORY',
    payload: category
  }
}

export const reset = () => {
  return {
    type: 'RESET'
  }
}

export default catReducer;