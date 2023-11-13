import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import PortfolioNav from './components/portfolioNav'
import './App.css'

function App() {

  return (
    <div>
      <PortfolioNav />
      <main className="mx-3">
        <Outlet />
      </main>
    </div>
  );
};
 
export default App
