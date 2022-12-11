import React from "react";
import "./AddNewProduct.css";
import { BsCursorText } from "react-icons/bs";
import { BiDollar } from "react-icons/bi";
import { BsBag } from "react-icons/bs";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { GiSelfLove } from "react-icons/gi";
import { FaSellsy } from "react-icons/fa";
import { IoMdColorPalette } from "react-icons/io";

export default function AddNewProduct() {
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
            />
          </div>
          <div className="add-products-form-group">
            <BiDollar style={{ color: "gray" }} />
            <input
              type="text"
              placeholder="قیمت محصول را بنویسید"
              className="add-product-input"
            />
          </div>
          <div className="add-products-form-group">
            <BsBag style={{ color: "gray" }} />
            <input
              type="text"
              placeholder="موجودی محصول را بنویسید"
              className="add-product-input"
            />
          </div>
          <div className="add-products-form-group">
            <AiOutlineFolderAdd style={{ color: "gray" }} />
            <input
              type="text"
              placeholder="آدرس عکس محصول را بنویسید"
              className="add-product-input"
            />
          </div>
          <div className="add-products-form-group">
            <GiSelfLove style={{ color: "gray" }} />
            <input
              type="text"
              placeholder="میزان محبوبیت محصول را بنویسید"
              className="add-product-input"
            />
          </div>
          <div className="add-products-form-group">
            <FaSellsy style={{ color: "gray" }} />
            <input
              type="text"
              placeholder="میزان فروش محصول را بنویسید"
              className="add-product-input"
            />
          </div>
          <div className="add-products-form-group">
            <IoMdColorPalette style={{ color: "gray" }} />
            <input
              type="text"
              placeholder="تعداد رنگ بندی محصول را بنویسید"
              className="add-product-input"
            />
          </div>
        </div>
        <button className="add-products-btn">ثبت محصول</button>
      </form>
    </div>
  );
}
