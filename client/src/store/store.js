import React, { useReducer } from "react";
import AppContext from "./context";
import reducer from "./reducer";
import initialState from "./state";

import {
  SET_CUSTOMERS,
  SET_CHOSEN_CUSTOMER,
  SET_ORDERS,
  SET_CHOSEN_ORDER,
} from "./actions";

const Store = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setCustomers = (customers) => {
    dispatch({
      type: SET_CUSTOMERS,
      payload: customers,
    });
  };

  const setChosenCustomer = (customer) => {
    dispatch({
      type: SET_CHOSEN_CUSTOMER,
      payload: customer,
    });
  };

  const setCustomerOrders = (showtimes) => {
    dispatch({
      type: SET_ORDERS,
      payload: showtimes,
    });
  };

  const setChosenOrder = (showtime) => {
    dispatch({
      type: SET_CHOSEN_ORDER,
      payload: showtime,
    });
  };

  return (
    <AppContext.Provider
      value={{
        state,
        customersAll: state.customers,
        chosenCustomer: state.chosenCustomer,
        customerOrders: state.customerOrders,
        chosenOrder: state.chosenOrder,
        setCustomers,
        setChosenCustomer,
        setCustomerOrders,
        setChosenOrder,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default Store;
