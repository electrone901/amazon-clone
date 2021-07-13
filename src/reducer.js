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
      id: '1004',
      title:
        'Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric',
      price: 98.99,
      image:
        'https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$',
      rating: 5,
    },
  ],
  user: null,
}

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0)

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      }
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
