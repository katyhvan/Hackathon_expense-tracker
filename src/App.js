import React from "react";
import MainRouting from "./MainRouting";
import AuthContextProvider from "./contexts/AuthContextProvider";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <MainRouting />
      </AuthContextProvider>
    </div>
  );
}

export default App;
