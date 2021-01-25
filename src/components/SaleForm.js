import React, { useState } from "react";

import { createSale } from "../api";
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

  return (
    <form id="sale" style={{ marginBottom: "25px" }} onSubmit={handleSubmit}>
      <h5 class="doc-row__title">Cliente</h5>
      <label htmlFor="sale">
        <input
          id="client"
          name="client"
          className="nv-input"
          placeholder="Introduzca el nombre"
          onChange={handleChange}
        />
      </label>
      <h5 class="doc-row__title">Location</h5>
      <label htmlFor="sale">
        <input
          id="location"
          name="location"
          className="nv-input"
          placeholder="Introduzca el nombre"
          onChange={handleChange}
        />
      </label>
      <table>
        <tr>
          <th>140gls</th>
          <th>215gls</th>
          <th>265gls</th>
          <th>330gls</th>
        </tr>
        <tr>
          <td>
            <input
              type="number"
              id="140gls"
              name="140gls"
              className="nv-input"
              placeholder="#"
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="number"
              id="215gls"
              name="215gls"
              className="nv-input"
              placeholder="#"
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="number"
              id="265gls"
              name="265gls"
              className="nv-input"
              placeholder="#"
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="number"
              id="330gls"
              name="330gls"
              className="nv-input"
              placeholder="#"
              onChange={handleChange}
            />
          </td>
        </tr>
      </table>
      <table>
        <tr>
          <th>410gls</th>
          <th>530gls</th>
          <th>600gls</th>
          <th>tapas</th>
        </tr>
        <tr>
          {" "}
          <td>
            <input
              type="number"
              id="410gls"
              name="410gls"
              className="nv-input"
              placeholder="#"
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="number"
              id="530gls"
              name="530gls"
              className="nv-input"
              placeholder="#"
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="number"
              id="600gls"
              name="600gls"
              className="nv-input"
              placeholder="#"
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              type="number"
              id="lids"
              name="lids"
              className="nv-input"
              placeholder="#"
              onChange={handleChange}
            />
          </td>
        </tr>
      </table>

      <h5 class="doc-row__title">¿Cliente Especial?</h5>
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
