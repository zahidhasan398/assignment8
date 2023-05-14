import React, { createContext, useState } from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
export const AllData=createContext();
const App = () => {
  
  
  return (
    <div>
      
      <Header></Header>
      <Outlet></Outlet>
     
    </div>
  );
};

export default App;