import React, { useContext } from 'react';
import { StateContext } from '../providers/state-provider';

const SelectProfession = () => {
  const { setProfession } = useContext(StateContext);
  return (
    <div className="wrapper">
      <select onChange={e => {
        e.preventDefault();
        setProfession(e.target.value)
      }}>
        <option value="0">Janitor</option>
        <option value="1">Manager</option>
      </select>
    </div>
  );
};

export default SelectProfession;