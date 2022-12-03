import React from "react";
import MainRouting from "./MainRouting";
import AuthContextProvider from "./contexts/AuthContextProvider";
import Logo from "./pages/Logo";
import IncomeContextProvider from "./contexts/IncomeContextProvider";
// import Logo from "./pages/Logo";

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
