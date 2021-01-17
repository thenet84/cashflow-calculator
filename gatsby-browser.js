import  React  from  'react';
import { StateProvider } from  './src/providers/state-provider';

export  const  wrapRootElement = ({ element }) => {
  return <StateProvider>{element}</StateProvider>;
};