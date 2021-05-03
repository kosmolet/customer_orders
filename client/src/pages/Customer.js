import React, { useEffect, useContext } from "react";
import AppContext from "../store/context";
import fetchBaseURL from "../axios";
import CustomerHeader from "../components/CustomerHeader";
import CustomerContacts from "../components/CustomerContacts";
import CustomerOrdersTable from "../components/CustomerOrdersTable";

const Customer = ({ match }) => {
  const {
    setChosenCustomer,
    setCustomerOrders,
  } = useContext(AppContext);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await fetchBaseURL.get(
        `/customer/${match.params.customerId}/orders`
      );

      const customerWithOrders = await data.data.orders[0];
      setChosenCustomer(customerWithOrders);
      setCustomerOrders(customerWithOrders.orders);
    };
    fetchOrders();
  }, [match]);

  return (
    <div className="customerPage">
      <CustomerHeader />
      <CustomerContacts />
      <CustomerOrdersTable />
    </div>
  );
};

export default Customer;
