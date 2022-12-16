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

  const [userNewFirstName, setUserNewFirstName] = useState("");
  const [userNewLastName, setUserNewLastName] = useState("");
  const [userNewUsername, setUserNewUsername] = useState("");
  const [userNewPassword, setUserNewPassword] = useState("");
  const [userNewPhone, setUserNewPhone] = useState("");
  const [userNewCity, setUserNewCity] = useState("");
  const [userNewEmail, setUserNewEmail] = useState("");
  const [userNewAddress, setUserNewAddress] = useState("");
  const [userNewScore, setUserNewScore] = useState("");
  const [userNewBuy, setUserNewBuy] = useState("");

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
    const userNewInfos = {
      firsname: userNewFirstName,
      lastname: userNewLastName,
      username: userNewUsername,
      password: userNewPassword,
      phone: userNewPhone,
      city: userNewCity,
      email: userNewEmail,
      address: userNewAddress,
      score: userNewScore,
      buy: userNewBuy,
    };

    fetch(`http://localhost:7000/api/users/${userID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userNewInfos),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowEditModal(false);
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
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowEditModal(true);
                      setUserID(user.id);
                      setUserNewFirstName(user.firsname);
                      setUserNewLastName(user.lastname);
                      setUserNewUsername(user.username);
                      setUserNewPassword(user.password);
                      setUserNewPhone(user.phone);
                      setUserNewCity(user.city);
                      setUserNewEmail(user.email);
                      setUserNewAddress(user.address);
                      setUserNewScore(user.score);
                      setUserNewBuy(user.buy);
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
              placeholder="نام جدید را وارد کنید"
              value={userNewFirstName}
              onChange={(event) => setUserNewFirstName(event.target.value)}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="نام خانوادگی جدید را وارد کنید"
              value={userNewLastName}
              onChange={(event) => setUserNewLastName(event.target.value)}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="نام کاربری جدید را وارد کنید"
              value={userNewUsername}
              onChange={(event) => setUserNewUsername(event.target.value)}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="رمز جدید را وارد کنید"
              value={userNewPassword}
              onChange={(event) => setUserNewPassword(event.target.value)}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="شماره تلفن جدید را وارد کنید"
              value={userNewPhone}
              onChange={(event) => setUserNewPhone(event.target.value)}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="شهر جدید را وارد کنید"
              value={userNewCity}
              onChange={(event) => setUserNewCity(event.target.value)}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="ایمیل جدید را وارد کنید"
              value={userNewEmail}
              onChange={(event) => setUserNewEmail(event.target.value)}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <textarea
              className="edit-user-info-input"
              placeholder="ادرس جدید را وارد کنید"
              value={userNewAddress}
              onChange={(event) => setUserNewAddress(event.target.value)}
            ></textarea>
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="نمره جدید را وارد کنید"
              value={userNewScore}
              onChange={(event) => setUserNewScore(event.target.value)}
            />
          </div>
          <div className="edit-user-info-input-group">
            <span>
              <AiOutlineDollarCircle />
            </span>
            <input
              type="text"
              className="edit-user-info-input"
              placeholder="مقدار خرید جدید را وارد کنید"
              value={userNewBuy}
              onChange={(event) => setUserNewBuy(event.target.value)}
            />
          </div>
        </EditModal>
      )}
    </div>
  );
}
