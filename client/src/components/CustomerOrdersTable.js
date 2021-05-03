import React, { useEffect, useState, useContext } from "react";
import AppContext from "../store/context";
import "./CustomerOrdersTable.scss";
import OrderRow from "./OrderRow";
import ReactPaginate from "react-paginate";

const CustomerOrdersTable = ({orders}) => {
  const { chosenCustomer, customerOrders } = useContext(AppContext);
  

  const [pageNumber, setPageNumber] = useState(0);
  const ordersPerPage = 3;
  const pagesVisited = pageNumber * ordersPerPage;

    

  return (
    <>
      {customerOrders ? (
        <div className="ordersTable">
          <div className="ordersHeader">
            <h2>{`${chosenCustomer.firstName}'s orders`}</h2>
           <div className="help"><span className="infoHelp">i</span> <span>Help</span></div>
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
              {console.log("displayOrders", customerOrders, orders, chosenCustomer)}
              {customerOrders.map((order) => {
                return <OrderRow order={order} key={order?._id} />;
              })}
            </tbody>
          </table>

          {/* <ReactPaginate
            previousLabel={"Back"}
            nextLabel={"Next"}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={changePage}
            containerClassName={"pagination"}
            activeClassName={"active"}
          /> */}
        </div>
      ) : (
        <p>no orders</p>
      )}
    </>
  );
};

export default CustomerOrdersTable;
