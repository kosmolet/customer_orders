import {
  SET_CUSTOMERS,
  SET_CHOSEN_CUSTOMER,
  SET_ORDERS,
  SET_CHOSEN_ORDER,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CUSTOMERS:
      return { ...state, customers: action.payload };
    case SET_CHOSEN_CUSTOMER:
      return { ...state, chosenCustomer: action.payload };
    case SET_ORDERS:
      return { ...state, customerOrders: action.payload };
    case SET_CHOSEN_ORDER:
      return { ...state, chosenOrder: action.payload };
    default:
      return state;
  }
};

export default reducer;
