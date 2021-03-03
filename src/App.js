import React, { useEffect, useState } from "react";
import { getAllSales, deleteSale, editSale } from "./api";
import { SaleForm, SaleList } from "./components";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    <Router>
      <div>
        <nav>
          <ul className="menu-ul">
            <Link to="/">
              <li className="menu-li">Home</li>
            </Link>
            <Link to="/pedidos">
              <li className="menu-li">Lista Pedidos</li>
            </Link>
          </ul>
        </nav>
        <Switch>
          <Route path="/pedidos">
            <div className="sales-container">
              <div className="App">
                <ToastContainer />
                <header className="App-container">
                  <div className="sales-container">
                    <SaleList
                      onEdit={handleEdit}
                      onRemove={handleRemove}
                      data={sales}
                    />
                  </div>
                </header>
              </div>
            </div>
          </Route>
          <Route path="/users"></Route>
          <Route path="/">
            <div className="sales-container">
              <div className="App">
                <ToastContainer />
                <header className="App-container">
                  <div className="sales-container">
                    <SaleForm sales={sales} setSales={setSales} />
                  </div>
                </header>
              </div>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
