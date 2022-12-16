import React, { useEffect, useState } from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import ErrorBox from "../ErrorBox/ErrorBox";
import "./Comments.css";
import DetailsModal from "../DetailsModal/DetailsModal";
import EditModal from "../EditModal/EditModal";

export default function Comments() {
  const [allComments, setAllComments] = useState([]);
  const [isShowDetailsModal, setIsShowDetailsModal] = useState(false);
  const [isShowDeleteModal, setIsShowDeleteModal] = useState(false);
  const [mainCommentBody, setMainCommentBody] = useState("");
  const [commentID, setCommentID] = useState(null);
  const [isShowEditModal, setIsShowEditModal] = useState(false);
  const [isShowAcceptModal, setIsShowAcceptModal] = useState(false);
  const [isShowRejectModal, setIsShowRejectModal] = useState(false);

  useEffect(() => {
    getAllComments();
  });

  const getAllComments = () => {
    fetch("http://localhost:7000/api/comments/")
      .then((res) => res.json())
      .then((comments) => setAllComments(comments));
  };

  const deleteComment = () => {
    fetch(`http://localhost:7000/api/comments/${commentID}`, {
      method: "DELETE",
    }).then((res) => {
      console.log(res);
      setIsShowDeleteModal(false);
      getAllComments();
    });
  };

  const updateComment = (event) => {
    event.preventDefault();

    fetch(`http://localhost:7000/api/comments/${commentID}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        body: mainCommentBody,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        getAllComments();
        setIsShowEditModal(false);
      });
  };

  const acceptComment = () => {
    console.log("کامنت تایید شد");

    fetch(`http://localhost:7000/api/comments/accept/${commentID}`, {
      method: "POST",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setIsShowAcceptModal(false);
        getAllComments();
      });
  };

  const rejectComment = () => {
    setIsShowRejectModal(false);
  };

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
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setMainCommentBody(comment.body);
                      setIsShowDetailsModal(true);
                    }}
                  >
                    دیدن متن
                  </button>
                </td>
                <td>{comment.date}</td>
                <td>{comment.hour}</td>
                <td>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setCommentID(comment.id);
                      setIsShowDeleteModal(true);
                    }}
                  >
                    حذف
                  </button>
                  <button
                    className="products-table-btn"
                    onClick={() => {
                      setIsShowEditModal(true);
                      setMainCommentBody(comment.body);
                      setCommentID(comment.id);
                    }}
                  >
                    ویرایش
                  </button>
                  <button className="products-table-btn">پاسخ</button>
                  {comment.isAccept === 0 ? (
                    <button
                      className="products-table-btn"
                      onClick={() => {
                        setIsShowAcceptModal(true);
                        setCommentID(comment.id);
                      }}
                    >
                      تایید
                    </button>
                  ) : (
                    <button
                      className="products-table-btn"
                      style={{ backgroundColor: "red" }}
                      onClick={() => {
                        setIsShowRejectModal(true);
                        setCommentID(comment.id);
                      }}
                    >
                      رد
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <ErrorBox msg={"هیج کامنتی یافت نشد"} />
      )}

      {isShowDetailsModal && (
        <DetailsModal onHide={() => setIsShowDetailsModal(false)}>
          <p className="text-modal">{mainCommentBody}</p>
          <button
            className="text-modal-close-btn"
            onClick={() => setIsShowDetailsModal(false)}
          >
            بستن
          </button>
        </DetailsModal>
      )}

      {isShowDeleteModal && (
        <DeleteModal
          cancel={() => setIsShowDeleteModal(false)}
          submit={deleteComment}
          title={"آیا از حذف اطمینان دارید؟"}
        />
      )}

      {isShowEditModal && (
        <EditModal
          onClose={() => setIsShowEditModal(false)}
          onSubmit={updateComment}
        >
          <textarea
            value={mainCommentBody}
            onChange={(event) => setMainCommentBody(event.target.value)}
          ></textarea>
        </EditModal>
      )}

      {isShowAcceptModal && (
        <DeleteModal
          cancel={() => setIsShowAcceptModal(false)}
          submit={acceptComment}
          title={"آیا از تایید اطمینان دارید؟"}
        />
      )}

      {isShowRejectModal && (
        <DeleteModal
          cancel={() => setIsShowRejectModal(false)}
          submit={rejectComment}
          title={"آیا از رد کامنت اطمینان دارید؟"}
        />
      )}
    </div>
  );
}
