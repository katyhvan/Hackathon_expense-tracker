import React, { createContext, useReducer } from "react";

export const historyContext = createContext();

function getCountProductsHistory() {
  let history = JSON.parse(localStorage.getItem("history"));
  return history ? history.products.length : 0;
}

const INIT_STATE = {
  history: JSON.parse(localStorage.getItem("history")),
  historyCount: getCountProductsHistory(),
};

function reducer(prevState, action) {
  switch (action.type) {
    case "GET_HISTORY":
      return { ...prevState, history: action.payload };
    default:
      return prevState;
  }
}

const HistoryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  function addProductToHistory(productObj) {
    console.log(productObj);
    let history = JSON.parse(localStorage.getItem("history"));
    if (history === null) {
      history = {
        products: [],
      };
    }
    let newProduct = {
      item: productObj,
      count: 1,
    };

    history.products.push(newProduct);

    localStorage.setItem("history", JSON.stringify(history));
  }

  function getHistory() {
    let history = JSON.parse(localStorage.getItem("history"));
    if (!history) {
      history = {
        products: [],
        totalPrice: 0,
      };
    }

    dispatch({
      type: "GET_HISTORY",
      payload: history,
    });
  }

  function deleteHistoryProduct(id) {
    let history = JSON.parse(localStorage.getItem("history"));
    history.products = history.products.filter(elem => {
      return elem.item.id !== id;
    });
    dispatch({
      type: "CHANGE_HISTORY_COUNT",
      payload: history.products.length,
    });
    localStorage.setItem("history", JSON.stringify(history));
    getHistory();
  }

  const cloud = {
    addProductToHistory,
    getHistory,
    // changeProductCount,
    deleteHistoryProduct,
    productsInHistory: state.history,
    historyCount: state.historyCount,
  };
  console.log(cloud.productsInHistory);
  return (
    <historyContext.Provider value={cloud}>{children}</historyContext.Provider>
  );
};

export default HistoryContextProvider;
