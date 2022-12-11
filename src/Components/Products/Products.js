import React from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import AddNewProduct from "./AddNewProduct/AddNewProduct";
export default function Products() {
  return (
    <>
      <ErrorBox msg={"هیج محصولی یافت نشد"} />

      <AddNewProduct />
    </>
  );
}
