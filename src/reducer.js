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

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_BASKET':
      return { ...state, basket: [...state.basket, action.item] }
    case 'REMOVE_FROM_BASKET':
      let newBasket = [...state.basket]
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id,
      )
      if (index >= 0) {
        newBasket.splice(index, 1)
      } else {
        console.warn(
          `Can't remove product ( id: ${action.id}) as its not found!`,
        )
      }

      return { ...state, basket: newBasket }
    default:
      return state
  }
}

export default reducer
