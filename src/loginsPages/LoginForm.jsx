import React, { useState, useEffect } from "react";
import axios from "axios";

const LoginForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  // درخواست اجازه برای نوتیفیکیشن
  useEffect(() => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission();
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // ارسال داده‌ها به سرور
      const response = await axios.post("/submit", {
        name,
        phone,
        description,
      });

      if (response.data.success) {
        // ارسال نوتیفیکیشن مرورگر پس از ثبت موفق
        new Notification("درخواست شما ثبت شد!", {
          body: `نام: ${name} | شماره: ${phone}`,
        });

        alert("درخواست با موفقیت ارسال شد ✅");

        // پاک کردن فرم
        setName("");
        setPhone("");
        setDescription("");

        // بستن فرم (در صورتی که onClose فراخوانی می‌شود)
        onClose();
      } else {
        alert("مشکلی پیش آمد، لطفاً دوباره امتحان کنید.");
      }
    } catch (error) {
      console.error("خطا در ارسال فرم:", error);
      alert("خطایی رخ داد، لطفاً دوباره امتحان کنید ❌");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 text-lg font-sans">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md">
        <h2 className="text-blue-600 font-medium -mb-3 underline text-right">فرم درخواست آنلاین</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-right mb-1">نام</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-right"
              placeholder="نام خود را وارد کنید"
              required
            />
          </div>
          <div>
            <label className="block text-right mb-1">تلفن (برای پیگیری سریع‌تر)</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-right"
              placeholder="مثلاً: 09123456789"
              required
            />
          </div>
          <div>
            <label className="block text-right mb-1">توضیحات درخواست</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-2 text-right"
              placeholder="نیاز به سرم تراپی و تزریق عضلانی دارم"
              rows="4"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition hover:cursor-pointer"
          >
            ثبت
          </button>
        </form>
        <button
          onClick={onClose}
          className="block mt-2 underline underline-offset-8 hover:cursor-pointer hover:scale-120 text-lg text-gray-500 hover:text-gray-700 mx-auto"
        >
          بستن X
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
