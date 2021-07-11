export const initialState = {
  basket: [
    {
      id: '1005',
      title:
        'New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)',
      price: 598.99,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg',
      rating: 4,
    },
    {
      id: '1006',
      title:
        'New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)',
      price: 598.99,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg',
      rating: 4,
    },
    {
      id: '1007',
      title:
        'New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)',
      price: 598.99,
      image:
        'https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg',
      rating: 4,
    },
  ],
  user: null,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return { ...state, basket: [...state.basket, action.item] }
    case 'REMOVE_FROM_BASKET':
      return { state }
    default:
      return state
  }
}

export default reducer
