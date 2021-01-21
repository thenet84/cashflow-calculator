import React, { useContext } from 'react';
import { StateContext } from '../providers/state-provider';

const MonthlyCashflow = () => {
  const { data, addMonthlyCashflow } = useContext(StateContext);

  return (
    <div className="wrapper">
      <p> Salary: {data?.incomes?.salary} </p>
      <p> + </p>
      <p> Passive incomes: {data?.totalPassiveIncomes} </p>
      <p> = Total incomes:{data?.totalIncomes} </p>
      <p> - </p>
      <p> Total expenses: {data?.totalExpenses} </p>
      <p> Monthly Cash Flow: {data?.monthlyCashflow} </p>
      <p> Balance: {data?.balance} </p>
      <button onClick={addMonthlyCashflow}>Add Monthly Cashflow</button>
    </div>
  );
};

export default MonthlyCashflow;
