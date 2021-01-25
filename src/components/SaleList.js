import React, { memo } from "react";
import "./SaleList.css";
const SaleList = memo(({ data, onRemove, onEdit }) => (
  <>
    <table>
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
    </table>
    {data &&
      data.map((sale) => (
        <div key={sale.ref.id} className="sale-row">
          <p
            contentEditable
            suppressContentEditableWarning
            onChange={(e) =>
              onEdit(e, sale.ref.id, e.currentTarget.textContent)
            }
            onBlur={(e) => onEdit(e, sale.ref.id, e.currentTarget.textContent)}
            onInput={(e) => onEdit(e, sale.ref.id, e.currentTarget.textContent)}
          >
            <table>
              <tr>
                <th>{sale.data.client}</th>

                <th>{sale.data["140gls"]}</th>
                <th>{sale.data["215gls"]}</th>
                <th>{sale.data["265gls"]}</th>
                <th> {sale.data["330gls"]}</th>
                <th>{sale.data["410gls"]}</th>
                <th>{sale.data["530gls"]}</th>
                <th>{sale.data["600gls"]}</th>
                <th>{sale.data.lids}</th>
              </tr>
            </table>
          </p>
          <i class="nv-icon-check"></i>
        </div>
      ))}
  </>
));

export default SaleList;
