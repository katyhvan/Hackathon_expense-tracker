import React from "react";
import MainRouting from "./MainRouting";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Logo from "./pages/Logo";
import IncomeContextProvider from "./contexts/IncomeContextProvider";
import "./styles/index.css";

function App() {
  return (
    <div>
      <IncomeContextProvider>
        <AuthContextProvider>
          <Logo />
          <MainRouting />
        </AuthContextProvider>
      </IncomeContextProvider>
    </div>
  );
}

export default App;
