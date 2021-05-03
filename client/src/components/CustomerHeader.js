import React, { useContext } from "react";
import AppContext from "../store/context";
import "./CustomerHeader.scss";

const CustomerHeader = () => {
  const { chosenCustomer } = useContext(AppContext);

  return (
    <div className="customerHeader">
      <p>{`${chosenCustomer?.firstName} ${chosenCustomer?.lastName} (${chosenCustomer?.ssn})`}</p>
    </div>
  );
};

export default CustomerHeader;
