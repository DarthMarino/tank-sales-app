import React, { memo } from "react";
import "./SaleList.css";
const SaleList = memo(({ data, onRemove, onEdit }) => (
  <>
    <h1>Lista de Pedidos</h1>

    <table className="table-container">
      <thead className="tbl-header">
        <tr>
          <th>Cliente</th>
          <th>140gls</th>
          <th>215gls</th>
          <th>265gls</th>
          <th>330gls</th>
          <th>410gls</th>
          <th>530gls</th>
          <th>600gls</th>
          <th>Tapas</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((sale) => (
            <tr key={sale.ref.id}>
              {/*<p
                contentEditable
                suppressContentEditableWarning
                onChange={(e) =>
                  onEdit(e, sale.ref.id, e.currentTarget.textContent)
                }
                onBlur={(e) =>
                  onEdit(e, sale.ref.id, e.currentTarget.textContent)
                }
                onInput={(e) =>
                  onEdit(e, sale.ref.id, e.currentTarget.textContent)
                }
              ></p>*/}{" "}
              <td data-column="Cliente">{sale.data.client}</td>
              <td data-column="140gls">{sale.data["140gls"]}</td>
              <td data-column="215gls">{sale.data["215gls"]}</td>
              <td data-column="265gls">{sale.data["265gls"]}</td>
              <td data-column="330gls"> {sale.data["330gls"]}</td>
              <td data-column="410gls">{sale.data["410gls"]}</td>
              <td data-column="530gls">{sale.data["530gls"]}</td>
              <td data-column="600gls">{sale.data["600gls"]}</td>
              <td className="responsive-end" data-column="Tapas">
                {sale.data.lids}
              </td>
              {/*<i class="nv-icon-check"></i>*/}
            </tr>
          ))}
      </tbody>
    </table>
  </>
));

export default SaleList;
