import React, { useState } from 'react';

export const StateContext = React.createContext();

export const StateProvider = ({ children }) => {
  const initialState = {
    incomes: {
      salary: 1600,
      passiveIncomes: 0
    },
    expenses: {
      taxes: 300,
      homeMortagePayment: 200,
      schoolLoanPayment: 0,
      carLoanPayment: 100,
      creditCardPayment: 100,
      otherExpenses: 300,
      bankLoanPayment: 0,
      childExpenses: 0,
    },
    assets: {
      savings: 600,
    },
    liabilities: {
      homeMortage: 20000,
      schoolLoans: 0,
      carLoans: 4000,
      creditCardDebt: 3000,
      bankLoan: 0,
    },
  };
  const [data, setData] = useState(initialState);

  return (
    <StateContext.Provider
      value={{
        data,
        setData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
