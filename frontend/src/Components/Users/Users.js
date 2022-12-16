import React, { useEffect, useState } from "react";
import ErrorBox from "../ErrorBox/ErrorBox";
import "./Users.css";
import DeleteModal from "../DeleteModal/DeleteModal";
import EditModal from "../EditModal/EditModal";
import { AiOutlineDollarCircle } from "react-icons/ai";

export default function Users() {
  const [allUsers, setAllUsers] = useState([]);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
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

  const updateUser = () => {
    setIsShowEditModal(false);
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
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowEditModal(true);
                      setUserID(user.id);
                    }}
                  >
                    ویرایش
                  </button>
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

      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={updateUser}
        >
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد کنید"
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار جدید را وارد کنید"
            />
          </div>
        </EditModal>
      )}
    </div>
  );
}
