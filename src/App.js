import React, { useEffect, useState } from 'react';
import './App.css';
import { getAllSales, deleteSale, editSale } from './api'
import {SaleForm} from './components'


function App() {
  
  const [sales, setSales] = useState([])

  useEffect(() => {
    getAllSales.then(res => setSales(res))
  }, [])

  return (
    <div className="App">
      <header className="App-container">
        <div className="sales-container">
        <SaleForm sales={sales} setSales={setSales} />
        </div>
      </header>
    </div>
  );
}

export default App;