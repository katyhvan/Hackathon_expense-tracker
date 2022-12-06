import React from "react";
import MainRouting from "./MainRouting";
import AuthContextProvider from "./contexts/AuthContextProvider";
import IncomeContextProvider from "./contexts/IncomeContextProvider";
import "./index.css";
import Logo from "./pages/Logo";
import HistoryContextProvider from "./contexts/HistoryContextProvider";
import ExpenseContextProvider from "./contexts/ExpenseContextProvider";

function App() {
  return (
    <div>
      <ExpenseContextProvider>
        <HistoryContextProvider>
          <IncomeContextProvider>
            <AuthContextProvider>
              {/* <Logo /> */}
              <MainRouting />
            </AuthContextProvider>
          </IncomeContextProvider>
        </HistoryContextProvider>
      </ExpenseContextProvider>
    </div>
  );
}

export default App;
