import React, { useState } from 'react';

import professions from '../../data/professions.json';

export const StateContext = React.createContext();

export const StateProvider = ({ children }) => {
  const initialState = {
    totalPassiveIncomes: 0,
    totalIncomes: 0,
    totalExpenses: 0,
    monthlyCashflow: 0,
    balance: 0,

  };
  const [data, setData] = useState(initialState);

  const getTotal = object => Object.values(object).reduce((total, value) => total + value, 0);

  const setProfession = professionIndex => {
    const professionData = professions[professionIndex];
    const totalIncomes = professionData.incomes.salary;
    const totalExpenses = getTotal(professionData.expenses)
    const monthlyCashflow = totalIncomes - totalExpenses;
    
    setData({ 
      ...data,
      ...professionData,
      totalIncomes,
      totalExpenses,
      monthlyCashflow,
      balance: professionData.assets.savings + monthlyCashflow,
    });
  }

  const addMonthlyCashflow = () => {
    setData({...data, balance: data.balance + data.monthlyCashflow });
  }

  return (
    <StateContext.Provider
      value={{
        data,
        setData,
        setProfession,
        addMonthlyCashflow,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};
