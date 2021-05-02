import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fetchBaseURL from "../axios";
import "./Home.scss";

const Home = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const getCustomers = async () => {
      const data = await fetchBaseURL.get(`customer/`);
      setCustomers(data.data.customers);
    };
    getCustomers();
  }, []);

  return (
    <div>
      <h3>Customers</h3>
      {console.log("customers on home", customers)}
      {customers.map((customer) => {
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
