import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import fetchBaseURL from "../axios";
import AppContext from "../store/context";
import "./Home.scss";

const Home = () => {
  const { customersAll, setCustomers } = useContext(AppContext);

  useEffect(() => {
    const getCustomers = async () => {
      const data = await fetchBaseURL.get(`customer/`);
      setCustomers( data.data.customers);
    };
    getCustomers();
  }, []);

  return (
    <div className="home">
      <h3>Customers</h3>
      {console.log(customersAll, "store customersAll")}
      {customersAll.map((customer) => {
        return (
          <Link to={`/customer/${customer._id}`} key={customer._id}>
            <button id={customer._id} className="customer-button" type="button">
              {`${customer.firstName} ${customer.lastName}`}
            </button>
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
