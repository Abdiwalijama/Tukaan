


export const initialState = JSON.parse(localStorage.getItem('shop_cart')) || {
  products: [],
  total: 0,
}

export const REDUCER_ACTION_TYPE = {
  ADD_TO_CART: 'ADD_TO_CART',
  UPDATE_PRODUCT_QUANTITY: 'UPDATE_PRODUCT_QUANTITY',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  CALCULATE_TOTAL_PRICES: 'CALCULATE_TOTAL_PRICES',
}
export const shopReducer = (state, action) =>{
  const {type, payload} = action

  switch(type){
    case REDUCER_ACTION_TYPE.ADD_TO_CART:
      return{
        ...state,
        products:payload.products
      }

      case REDUCER_ACTION_TYPE. UPDATE_PRODUCT_QUANTITY:
        return {
          ...state,
          products:payload.products
        }

        case REDUCER_ACTION_TYPE.REMOVE_FROM_CART:
          return {
            ...state,
            products:payload.products
          }

          case REDUCER_ACTION_TYPE.CLEAR_CART:
            return {
              initialState
            }

            case REDUCER_ACTION_TYPE.CALCULATE_TOTAL_PRICES:
              return {
                ...state,
                total:payload.total
              }
              default:
                return state


  }
}