import React from "react";

const LoginBut = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" bg-emerald-500 text-2xl text-gray-600 px-6 py-2 rounded-xl hover:bg-emerald-950 hover:text-white hover:cursor-pointer hover:scale-95  transition"
    >
    ثبت آنلاین درخواست
    </button>
  );
};

export default LoginBut;
