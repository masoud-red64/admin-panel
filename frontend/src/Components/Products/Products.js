import React, { useState, useEffect } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import ProductsTable from "../ProductsTable/ProductsTable";
import AddNewProduct from "./AddNewProduct/AddNewProduct";
export default function Products() {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const getAllProducts = () => {
    fetch("http://localhost:7000/api/products/")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((products) => setAllProducts(products));
  };

  return (
    <>
      <AddNewProduct getAllProducts={getAllProducts} />
      <ProductsTable
        allProducts={allProducts}
        getAllProducts={getAllProducts}
      />
    </>
  );
}
