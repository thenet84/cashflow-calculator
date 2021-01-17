import React, { useContext } from 'react';
import { StateContext } from '../providers/state-provider';

const MonthlyCashflow = () => {
  const { data, setData } = useContext(StateContext);
  const totalExpenses = Object.values(data.expenses).reduce((total, expense) => total + expense);
  const totalIncomes = data.incomes.salary + data.incomes.passiveIncomes;
  console.log('totalExpenses: ', totalExpenses);
  return (
    <div className="wrapper">
      <p> Salary: {data.incomes.salary} </p>
      <p> + </p>
      <p> Passive incomes: {data.incomes?.passiveIncomes} </p>
      <p> = Total incomes:{totalIncomes} </p>
      <p> - </p>
      <p> Total expenses: {totalExpenses} </p>
      <p> Monthly Cash Flow: {totalIncomes - totalExpenses} </p>
      {/* <label htmlFor="set-message"> Set new message </label>{' '}
      <input type="text" id="set-message" placeholder="Message..." />
      <button
        onClick={() =>
          setData({
            ...data,
            incomes: {
              salary: document.getElementById('set-message').value,
            },
          })
        }
      >
        Set
      </button> */}
    </div>
  );
};

export default MonthlyCashflow;
