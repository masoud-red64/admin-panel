import React from "react";
import "./DetailsModal.css";

export default function DetailsModal() {
  return (
    <div className="modal-parent active">
      <div className="details-modal ">
        <table className="cms-table">
          <tr>
            <th>اسم</th>
            <th>قیمت</th>
            <th>محبوبیت</th>
          </tr>

          <tr>
            <td>لپتاپ</td>
            <td>12000000</td>
            <td>91</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
