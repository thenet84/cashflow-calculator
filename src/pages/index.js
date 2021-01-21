import React from 'react';
import MonthlyCashflow from '../components/monthly-cashflow-container';
import SelectProfession from '../components/select-profession-container';

export default function Home() {
  return (
    <div>
      <SelectProfession />
      <MonthlyCashflow />
    </div>
  );
}
