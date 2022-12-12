import React from "react";
import DeleteModal from "../DeleteModal/DeleteModal";
import ErrorBox from "../ErrorBox/ErrorBox";

export default function Comments() {
  return (
    <>
      <ErrorBox msg={"هیج کامنتی یافت نشد"} />
      <DeleteModal />
    </>
  );
}
