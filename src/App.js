import React, { useEffect, useState } from "react";
import { getAllSales, deleteSale, editSale } from "./api";
import { SaleForm, SaleList } from "./components";

import { ToastContainer, toast } from "react-toastify";

import "./App.css";

function App() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    getAllSales.then((res) => setSales(res));
  }, []);

  function handleRemove(e, id) {
    e.preventDefault();
    deleteSale(id).then((res) => res);
    const newSalesArray = sales.filter((sale) => sale.ref.id !== id);
    setSales(newSalesArray);
    toast.success("Removed successfully");
  }

  function handleEdit(e, id, newText) {
    e.preventDefault();
    editSale(id, newText).then((res) => res);
  }

  return (
    <div className="App">
      <ToastContainer />
      <header className="App-container">
        <div className="sales-container">
          <SaleForm sales={sales} setSales={setSales} />
          <SaleList onEdit={handleEdit} onRemove={handleRemove} data={sales} />
        </div>
      </header>
    </div>
  );
}

export default App;
