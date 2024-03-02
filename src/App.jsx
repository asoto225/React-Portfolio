import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import PortfolioNav from './components/portfolioNav'
import './css/App.css'

function App() {

  return (
    <div>
      {/* <PortfolioNav /> */}
      {/* <div> */}
        <Outlet />
      {/* </div> */}
    </div>
  );
};
 
export default App
