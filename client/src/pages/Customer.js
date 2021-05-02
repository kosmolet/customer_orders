import React, { useState, useEffect } from "react";

import fetchBaseURL from "../axios";

const Customer = ({ match }) => {
  const [customerOrders, setOrders] = useState([]);
  useEffect(() => {
    const fetchOrders = async () => {
      const data = await fetchBaseURL.get(
        `/customer/${match.params.customerId}/orders`
      );

      const customerWithOrders = await data.data.orders[0];
      setOrders(customerWithOrders);
    };
    fetchOrders();
  }, [match]);

  return (
    <div>
      {console.log(customerOrders, "Customer details")}
      {console.log(customerOrders.orders, "Customer's orders")}
    </div>
  );
};

export default Customer;
