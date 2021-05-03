import React, { useEffect, useContext } from "react";
import AppContext from "../store/context";
import ContactSection from "./ContactSection";
import EmailIcon from "../assets/images/EmailPhone.svg";
import ShippingIcon from "../assets/images/Shipping.svg";
import InvoiceIcon from "../assets/images/Invoice.svg";
import "./CustomerContacts.scss";

const CustomerContacts = () => {
  const { chosenCustomer } = useContext(AppContext);
  return (
    <div className="contactsRow">
      <ContactSection
        src={EmailIcon}
        name={chosenCustomer?.firstName}
        header={"Contact "}
        row1={chosenCustomer?.email}
        row2={chosenCustomer?.phone}
      />
      <ContactSection
        src={ShippingIcon}
        name={" "}
        header={"Shipping address"}
        row1={chosenCustomer?.address}
        row2={`${chosenCustomer?.postcode} ${chosenCustomer?.country}`}
      />
      <ContactSection
        src={InvoiceIcon}
        name={" "}
        header={"Invoice address"}
        row1={chosenCustomer?.address}
        row2={`${chosenCustomer?.postcode} ${chosenCustomer?.country}`}
      />
    </div>
  );
};

export default CustomerContacts;
