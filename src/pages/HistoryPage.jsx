import React, { useContext, useEffect } from "react";
import { useExpense } from "../contexts/ExpenseContextProvider";
import { historyContext } from "../contexts/HistoryContextProvider";
import { incomeContext } from "../contexts/IncomeContextProvider";
import InfoPage from "./InfoPage";

const HistoryPage = () => {
  const { addExpense } = useExpense();
  const { addIncome } = useContext(incomeContext);
  const {
    productsInHistory,
    getHistory,
    changeProductCount,
    deleteHistoryProduct,
  } = useContext(historyContext);
  console.log(productsInHistory.products);
  useEffect(() => {
    getHistory();
  }, [addExpense, addIncome]);

  return (
    <>
      <InfoPage />;
      <div className="containerList">
        <div className="List">
          <h2
            style={{
              fontFamily: "sans-serif",
              fontWeight: "500",
              fontSize: "48px",
              color: "#244A56",
            }}>
            History
          </h2>
          <div className="List_text">
            <div className="card_blk">
              <div className="list_txt">
                <p>Date</p>
              </div>
              <div className="list_txt">
                <p>Category</p>
              </div>
              <div className="list_txt">
                <p>Note</p>
              </div>
              <div className="list_txt">
                <p>Total</p>
              </div>
            </div>
          </div>
          {productsInHistory.products ? (
            <>
              {productsInHistory.products.map(elem => (
                <div>
                  <h4
                    style={{
                      marginLeft: "20px",
                      textAlign: "inherit",
                      marginTop: "15px",
                      fontFamily: "sans-serif",
                      color: "rgb(36, 74, 86)",
                    }}>
                    {elem.item.title}
                  </h4>
                  <div className="card">
                    <div className="card_blk">
                      <div className="card_txt">
                        <p>Dec 27, 2022</p>
                      </div>
                      <div className="card_txt">
                        <p>{elem.item.category}</p>
                      </div>
                      <div className="card_txt">
                        <p>{elem.item.note}</p>
                      </div>
                      <div className="card_txt">
                        <p>{elem.item.amount}$</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <h2>Пусто</h2>
          )}
        </div>
      </div>
      ;
    </>
  );
};

export default HistoryPage;
