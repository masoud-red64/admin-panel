import React, { useEffect, useState } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import "./Users.css";

export default function Users() {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/api/users")
      .then((res) => res.json())
      .then((users) => setAllUsers(users));
  }, []);

  return (
    <div className="cms-main">
      <h1 className="cms-title">لیست کاربران</h1>
      {allUsers.length ? (
        <table className="cms-table">
          <thead>
            <tr>
              <th>نام </th>
              <th>نام خانوادگی</th>
              <th>یوزنیم</th>
              <th>رمز عبور</th>
              <th>شماره تماس</th>
              <th>ایمیل</th>
            </tr>
          </thead>
          <tbody>
            {allUsers.map((user) => (
              <tr key={user.id}>
                <td>{user.firsname}</td>
                <td>{user.lastname}</td>
                <td>{user.username}</td>
                <td>{user.password}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>
                  <button className="products-table-btn">حذف</button>
                  <button className="products-table-btn">جزییات</button>
                  <button className="products-table-btn">ویرایش</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg={"هیج کاربری یافت نشد"} />
      )}
    </div>
  );
}
