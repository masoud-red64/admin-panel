import React, { useState } from "react";
import "./ProductsTable.css";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function ProductsTable() {
  const [isShowModal, setIsShowModal] = useState(false);

  const deleteModalSubmitAction = () => {
    setIsShowModal(false);
  };
  const deleteModalCancelAction = () => {
    setIsShowModal(false);
  };

  return (
    <>
      <table className="products-table">
        <thead>
          <tr className="products-table-heading-tr">
            <th>عکس</th>
            <th>اسم</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>
        <tbody>
          <tr className="products-table-tr">
            <td>
              <img
                src="/images/oil.jpeg"
                alt="oil image"
                className="products-table-img"
              />
            </td>
            <td>روغن سرخ کردنی</td>
            <td>92000 تومان</td>
            <td>82</td>
            <td>
              <button className="products-table-btn">جزییات</button>
              <button
                className="products-table-btn"
                onClick={() => setIsShowModal(true)}
              >
                حذف
              </button>
              <button className="products-table-btn">ویرایش</button>
            </td>
          </tr>
        </tbody>
      </table>
      {isShowModal && (
        <DeleteModal
          submit={deleteModalSubmitAction}
          cancel={deleteModalCancelAction}
        />
      )}
    </>
  );
}
