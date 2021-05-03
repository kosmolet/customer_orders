import React, { useEffect, useState, useContext } from "react";
import AppContext from "../store/context";
import "./CustomerOrdersTable.scss";
import OrderRow from "./OrderRow";
import ReactPaginate from "react-paginate";

const CustomerOrdersTable = () => {
  const { chosenCustomer } = useContext(AppContext);

  const [ordersTotal, setOrders] = useState([]);
  const [displayOrders, setDisplayOrders] = useState([]);

  const [pageNumber, setPageNumber] = useState(0);
  const ordersPerPage = 4;
  const pagesVisited = pageNumber * ordersPerPage;

  const mapedOrders = displayOrders.map((order) => {
    return <OrderRow order={order} key={order?.orderId} />;
  });

  useEffect(() => {
    if (chosenCustomer.orders) {
      const ordersTotal = chosenCustomer.orders.slice(0, 5);
      setOrders(ordersTotal);
      const displayOrders1 = ordersTotal.slice(
        pagesVisited,
        pagesVisited + ordersPerPage
      );
      setDisplayOrders(displayOrders1);
    }
  }, [chosenCustomer,pageNumber]);

  const pageCount = Math.ceil(ordersTotal.length / ordersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="ordersTable">
        <div className="ordersHeader">
          <h2>{`${chosenCustomer.firstName}'s orders`}</h2>
          <div className="help">
            <span className="infoHelp">i</span> <span>Help</span>
          </div>
        </div>
        <table className="table" border="0">
          <thead>
            <tr>
              <th></th>
              <th>Order number</th>
              <th>Created</th>
              <th>Store</th>
              <th>Payment method</th>
              <th>Payment status</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {mapedOrders}
          </tbody>
        </table>

        <ReactPaginate
          previousLabel={"Back"}
          nextLabel={"Next"}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={changePage}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </>
  );
};

export default CustomerOrdersTable;
