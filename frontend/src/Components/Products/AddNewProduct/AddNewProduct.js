import React, { useState } from "react";
import "./AddNewProduct.css";
import { BsCursorText } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { FaSellsy } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddNewProduct() {
  const [newProductTitle, setNewProductTitle] = useState("");
  const [newProductPrice, setNewProductPrice] = useState("");
  const [newProductCount, setNewProductCount] = useState("");
  const [newProductImg, setNewProductImg] = useState("");
  const [newProductPopularity, setNewProductPopularity] = useState("");
  const [newProductSale, setNewProductSale] = useState("");
  const [newProductColors, setNewProductColors] = useState("");

  const addNotify = () =>
    toast.success("😎محصول با موفقیت اضافه شد", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });

  const newProduct = {
    title: newProductTitle,
    price: newProductPrice,
    count: newProductCount,
    img: newProductImg,
    popularity: newProductPopularity,
    sale: newProductSale,
    colors: newProductColors,
  };
  const addNewProduct = (event) => {
    event.preventDefault();
    fetch("http://localhost:7000/api/products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
    if (
      newProductTitle &&
      newProductPrice &&
      newProductCount &&
      newProductImg &&
      newProductPopularity &&
      newProductSale &&
      newProductColors
    ) {
      addNotify();
    } else {
      alert("همه ی موارد را تکمیل کنید");
    }
  };

  return (
    <div className="products-main">
      <h1 className="products-title">افزودن محصول جدید</h1>

      <form action="#" className="add-products-form">
        <div className="add-products-form-wrap">
          <div className="add-products-form-group">
            <BsCursorText style={{ color: "gray" }} />
            <input
              type="text"
              placeholder="اسم محصول را بنویسید"
              className="add-product-input"
              value={newProductTitle}
              onChange={(event) => setNewProductTitle(event.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <BiDollar style={{ color: "gray" }} />
            <input
              type="text"
              placeholder="قیمت محصول را بنویسید"
              className="add-product-input"
              value={newProductPrice}
              onChange={(event) => setNewProductPrice(event.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <BsBag style={{ color: "gray" }} />
            <input
              type="text"
              placeholder="موجودی محصول را بنویسید"
              className="add-product-input"
              value={newProductCount}
              onChange={(event) => setNewProductCount(event.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <AiOutlineFolderAdd style={{ color: "gray" }} />
            <input
              type="text"
              placeholder="آدرس عکس محصول را بنویسید"
              className="add-product-input"
              value={newProductImg}
              onChange={(event) => setNewProductImg(event.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <GiSelfLove style={{ color: "gray" }} />
            <input
              type="text"
              placeholder="میزان محبوبیت محصول را بنویسید"
              className="add-product-input"
              value={newProductPopularity}
              onChange={(event) => setNewProductPopularity(event.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <FaSellsy style={{ color: "gray" }} />
            <input
              type="text"
              placeholder="میزان فروش محصول را بنویسید"
              className="add-product-input"
              value={newProductSale}
              onChange={(event) => setNewProductSale(event.target.value)}
            />
          </div>
          <div className="add-products-form-group">
            <IoMdColorPalette style={{ color: "gray" }} />
            <input
              type="text"
              placeholder="تعداد رنگ بندی محصول را بنویسید"
              className="add-product-input"
              value={newProductColors}
              onChange={(event) => setNewProductColors(event.target.value)}
            />
          </div>
        </div>
        <button className="add-products-btn" onClick={addNewProduct}>
          ثبت محصول
        </button>
      </form>
      <div>
        <ToastContainer />
      </div>
    </div>
  );
}
