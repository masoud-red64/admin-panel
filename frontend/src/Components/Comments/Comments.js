import React, { useEffect, useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import ErrorBox from "../ErrorBox/ErrorBox";
import "./Comments.css";

export default function Comments() {
  const [allComments, setAllComments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/api/comments/")
      .then((res) => res.json())
      .then((comments) => setAllComments(comments));
  });
  return (
    <div className="cms-main">
      {allComments.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>اسم کاربر</th>
              <th>محصول</th>
              <th>کامنت</th>
              <th>تاریخ</th>
              <th>ساعت</th>
            </tr>
          </thead>
          <tbody>
            {allComments.map((comment) => (
              <tr key={comment.id}>
                <td>{comment.userID}</td>
                <td>{comment.productID}</td>
                <td>
                  <button className="products-table-btn">دیدن متن</button>
                </td>
                <td>{comment.date}</td>
                <td>{comment.hour}</td>
                <td>
                  <button className="products-table-btn">حذف</button>
                  <button className="products-table-btn">ویرایش</button>
                  <button className="products-table-btn">پاسخ</button>
                  <button className="products-table-btn">تایید</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg={"هیج کامنتی یافت نشد"} />
      )}
    </div>
  );
}
