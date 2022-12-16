import React, { useEffect, useState } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import "./Users.css";
import DeleteModal from "../DeleteModal/DeleteModal";

export default function Users() {
  const [allUsers, setAllUsers] = useState([]);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [userID, setUserID] = useState(null);

  useEffect(() => {
    getAllUsers();
  }, []);

  const getAllUsers = () => {
    fetch("http://localhost:7000/api/users")
      .then((res) => res.json())
      .then((users) => setAllUsers(users));
  };

  const removeUser = () => {
    fetch(`http://localhost:7000/api/users/${userID}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowDeleteModal(false);
        getAllUsers();
      });
  };

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
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowDeleteModal(true);
                      setUserID(user.id);
                    }}
                  >
                    حذف
                  </button>
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

      {isShowDeleteModal && (
        <DeleteModal
          title={"ایا از حذف اطمینان دارد؟"}
          cancel={() => setIsShowDeleteModal(false)}
          submit={removeUser}
        />
      )}
    </div>
  );
}
