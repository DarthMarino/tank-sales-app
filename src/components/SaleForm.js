import React, { useState } from "react";

import VirtualList from "react-tiny-virtual-list";

import { createSale, searchClient } from "../api";
import { toast } from "react-toastify";

import "./SaleForm.css";

const SaleForm = ({ sales, setSales }) => {
  const [sale, setSale] = useState({
    client: "",
    location: "",
    "140gls": 0,
    "215gls": 0,
    "265gls": 0,
    "330gls": 0,
    "410gls": 0,
    "530gls": 0,
    "600gls": 0,
    lids: 0,
    specialClient: false,
  });
  const [results, setResults] = useState([]);
  const handleChange = ({ target: { name, value, type } }) => {
    if (type === "number") {
      value = parseInt(value);
    }
    if (value === "on") {
      value = true;
    }
    if (value === "off") {
      value = false;
    }
    setSale({ ...sale, [name]: value });
  };
  // Validate Client
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(sale);
    createSale(sale).then((res) => {
      const newSalesArray = sales.concat([res]);
      setSales(newSalesArray);
      toast.success("Added Successfully");
    });
  };
  async function sendSearch(e) {
    const sendResult = await searchClient(sale.client.toUpperCase());
    setResults(sendResult);
    console.log(sendResult);
  }
  return (
    <form id="sale" style={{ marginBottom: "25px" }} onSubmit={handleSubmit}>
      <h1 className="doc-row__title">Cliente</h1>
      <label htmlFor="sale">
        <input
          id="client"
          name="client"
          placeholder="Introduzca el nombre"
          onChange={handleChange}
        />
        <button type="button" onClick={sendSearch}>
          Buscar
        </button>
      </label>
      {results.length === 0 ? (
        <h5 style={{ marginBottom: 15 }}>Busca algo primero</h5>
      ) : (
        <VirtualList
          width="100%"
          height={results.length <= 5 ? 50 * results.length : 200}
          itemCount={results.length}
          itemSize={50}
          renderItem={({ index, style }) => (
            <div key={index} style={style}>
              {results[index][0]}
            </div>
          )}
        />
      )}
      <h1 className="doc-row__title">Location</h1>
      <label htmlFor="sale">
        <input
          id="location"
          name="location"
          placeholder="Introduzca la ubicacion"
          onChange={handleChange}
        />
      </label>
      <div className="flex-container">
        <div className="tank-input">
          <h5>140gls</h5>
          <input
            type="number"
            id="140gls"
            name="140gls"
            className="nv-input"
            placeholder="#"
            onChange={handleChange}
          />
        </div>
        <div className="tank-input">
          <h5>215gls</h5>
          <input
            type="number"
            id="215gls"
            name="215gls"
            className="nv-input"
            placeholder="#"
            onChange={handleChange}
          />
        </div>
        <div className="tank-input">
          <h5>265gls</h5>
          <input
            type="number"
            id="265gls"
            name="265gls"
            className="nv-input"
            placeholder="#"
            onChange={handleChange}
          />
        </div>
        <div className="tank-input">
          <h5>330gls</h5>
          <input
            type="number"
            id="330gls"
            name="330gls"
            className="nv-input"
            placeholder="#"
            onChange={handleChange}
          />
        </div>
        <div className="tank-input">
          <h5>410gls</h5>
          <input
            type="number"
            id="410gls"
            name="410gls"
            className="nv-input"
            placeholder="#"
            onChange={handleChange}
          />
        </div>
        <div className="tank-input">
          <h5>530gls</h5>
          <input
            type="number"
            id="530gls"
            name="530gls"
            className="nv-input"
            placeholder="#"
            onChange={handleChange}
          />
        </div>
        <div className="tank-input">
          <h5>6000gls</h5>
          <input
            type="number"
            id="600gls"
            name="600gls"
            className="nv-input"
            placeholder="#"
            onChange={handleChange}
          />
        </div>
        <div className="tank-input">
          <h5>Tapas</h5>
          <input
            type="number"
            id="lids"
            name="lids"
            className="nv-input"
            placeholder="#"
            onChange={handleChange}
          />
        </div>
      </div>

      <h1 className="doc-row__title">¿Cliente Especial?</h1>
      <label htmlFor="sale">
        <input
          type="checkbox"
          id="specialClient"
          name="specialClient"
          className="nv-input"
          placeholder="Introduzca el nombre"
          onChange={handleChange}
        />
      </label>
      <button type="submit">Create</button>
    </form>
  );
};
export default SaleForm;
