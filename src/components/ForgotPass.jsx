import React from "react";
import { auth } from "../firebase";
// const email = "user@example.com";

const ForgotPass = () => {
  const email = JSON.parse(localStorage.getItem("email"));
  console.log("Email:", email);
  //   auth
  //     .sendPasswordResetEmail(email)
  //     .then(() => {
  //       console.log("email sent");
  //     })
  //     .catch((error) => {
  //       console.log(error, "error");
  //     });

  return <></>;
};

export default ForgotPass;
