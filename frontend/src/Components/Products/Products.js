import React from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import ProductsTable from "../ProductsTable/ProductsTable";
import AddNewProduct from "./AddNewProduct/AddNewProduct";
export default function Products() {
  return (
    <>
      <AddNewProduct />
      <ProductsTable />
    </>
  );
}
