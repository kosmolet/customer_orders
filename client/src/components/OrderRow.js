import React, { useState, useEffect } from "react";
import { ReactComponent as SE } from "../assets/images/Svenska.svg";
import { ReactComponent as UK } from "../assets/images/uk.svg";
import { ReactComponent as ArrowDown } from "../assets/images/corner-down-right.svg";
import Qliro from "../assets/images/Qliro.svg";
import Trustly from "../assets/images/Trustly.svg";
import VISA from "../assets/images/VISA.png";
import AMEX from "../assets/images/AMEX.png";
import PayPal from "../assets/images/Paypal.png";
import Upsell from "../assets/images/Upsell.svg";
import "./OrderRow.scss";

const OrderRow = ({ order }) => {
  const paymentMethodImage = (paymentMethod) => {
    switch (paymentMethod) {
      case "QLIRO":
        return Qliro;
      case "VISA":
        return VISA;
      case "AMEX":
        return AMEX;
      case "PayPal":
        return PayPal;
      case "Trustly":
        return Trustly;
      default:
        return null;
    }
  };

  const paymentStatusColor = (status) => {
    switch (status) {
      case "Paid":
        return "#64E1C3";
      case "In Progress":
        return "#F16500";
      case "Failed":
        return "#FE1B1B";
      default:
        return "#222222";
    }
  };

  const orderTypeColor = (orderType) => {
    switch (orderType) {
      case "Online":
        return {
          background: "#ECECEC",
          color: "black",
        };
      case "Instore":
        return {
          background: "#000000",
          color: "white",
        };
      case "Manual":
        return {
          background: "#F16500",
          color: "black",
        };
      default:
        return {
          background: "#ECECEC",
          color: "black",
        };
    }
  };

  return (
    <tr className="orderRow">
      <td className="orderType">
        <p style={orderTypeColor(order.orderType)}>{order.orderType}</p>

        {order.flagged && <img className="flag" src={Upsell} alt="flag"></img>}
      </td>

      <td>
        <span className="idRow">
          {order._id}
          <ArrowDown className="arrowIcon" />
        </span>
      </td>
      <td>
        <p className="created">{order.created.slice(0, 10)}</p>
      </td>
      <td>
        <span className="butik">
          {order.countryCode === "SE" ? (
            <SE className="countryImg" />
          ) : (
            <UK className="countryImg" />
          )}
          {order.store}
        </span>
      </td>
      <td>
        <span className="payment">
          <img
            src={paymentMethodImage(order.paymentMethod)}
            alt="paymentImg"
            className="paymentImg"
          ></img>

          {order.paymentMethod}
        </span>
      </td>
      <td>
        <span className="statusPay">
          <span
            className="dotIcon"
            style={{ backgroundColor: paymentStatusColor(order.paymentStatus) }}
          ></span>
          <span className="status">{order.paymentStatus}</span>
        </span>
      </td>
      <td>
        <p className="amount">{order.amount}</p>
      </td>
    </tr>
  );
};

export default OrderRow;
