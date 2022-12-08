import React from 'react'
import MainRouting from './MainRouting'
import AuthContextProvider from './contexts/AuthContextProvider'
import IncomeContextProvider from './contexts/IncomeContextProvider'
import './index.css'
import Logo from './pages/Logo'
import HistoryContextProvider from './contexts/HistoryContextProvider'
import ExpenseContextProvider from './contexts/ExpenseContextProvider'

function App() {
  return (
    <>
      <ExpenseContextProvider>
        <HistoryContextProvider>
          <IncomeContextProvider>
            <AuthContextProvider>
              <MainRouting />
            </AuthContextProvider>
          </IncomeContextProvider>
        </HistoryContextProvider>
      </ExpenseContextProvider>
    </>
  )
}

export default App
