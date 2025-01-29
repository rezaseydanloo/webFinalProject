import { useState } from "react";
import PhoneNumberInput from "./PhoneNumberInput";
import Captcha from "./Captcha";
import BankIcon from "./BankIcon";
import { Link, useNavigate } from "react-router-dom"; // استفاده از useNavigate
import HomePage from "../Home page/HomePage";
import axios from "axios";

export default function SignInPage() {
  const [name, setName] = useState("");
  const [lastName, setlastName] = useState("");
  const [codeMeli, setCodeMeli] = useState("");
  const [date, setDate] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [resetCaptcha, setResetCaptcha] = useState(false);
  
  const navigate = useNavigate(); // استفاده از useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
   
    const formData = {
      name ,
      lastName ,
      codeMeli ,
      date,
      phoneNumber,
      password,
    };

  
    const sendSigninData = async ()=> {
      try{
        const response = await axios.post('/api/signin' , formData)
        console.log(response.status)
      }catch (error) {
        console.error(error); // Error handling
      }
    }
    sendSigninData()

    console.log("Form Data Submitted:", formData);
    alert("Form submitted!");

    // هدایت به صفحه Home پس از ارسال فرم
    navigate('/Home');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-slate-800 ">
      <BankIcon />
      <form
        onSubmit={handleSubmit}
        className="text-slate-200 text-right w-[35%] h-[90%] border-2 border-slate-400 rounded-2xl px-6 bg-slate-700 ">


        <h2 className="mt-2 mb-3 text-5xl font-bold underline decoration-teal-400 underline-offset-4 text-center text-slate-300  ">
          ساخت حساب
        </h2>

        <div className="mb-1">
          <label className="block mb-2 text-sm font-medium">:نام</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-4 py-2 text-gray-800 bg-slate-300 border-2 border-white rounded-lg focus:outline-none focus:ring-4 focus:ring-slate-500"
          />
        </div>


        <div className="mb-1">
          <label className="block mb-2 text-sm font-medium">
            :نام خانوادگی
          </label>
          <input
            type="text"
            onChange={(e) => setlastName(e.target.value)}
            required
            className="w-full px-4 py-2 text-gray-800 bg-slate-300 border-2 border-white rounded-lg focus:outline-none focus:ring-4 focus:ring-slate-500"
          />
        </div>


        <div className="mb-1">
          <label className="block mb-2 text-sm font-medium">:کد ملی</label>
          <input
            type="text"
            onChange={(e) => setCodeMeli(e.target.value)}
            required
            className="w-full px-4 py-2 text-gray-800 bg-slate-300 border-2 border-white rounded-lg focus:outline-none focus:ring-4 focus:ring-slate-500"
          />
        </div>


        <div className="mb-1">
          <label className="block mb-2 text-sm font-medium">:تاریخ تولد</label>
          <input
            type="date"
            onChange={(e) => setDate(e.target.value)}
            className="w-full px-4 py-2 text-gray-800 bg-slate-300 border-2 border-white rounded-lg focus:outline-none focus:ring-4 focus:ring-slate-500"
          />
        </div>


        <div className="mb-1">
        <label className="block mb-2 text-sm font-medium">: شماره همراه</label>
          <input
            type="text"
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full px-4 py-2 text-gray-800 bg-slate-300 border-2 border-white rounded-lg focus:outline-none focus:ring-4 focus:ring-slate-500"
          />
        </div>


        <div className="mb-1">
          <label className="block mb-2 text-sm font-medium">:رمز عبور</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-4 py-2 text-gray-800 bg-slate-300 border-2 border-white rounded-lg focus:outline-none focus:ring-4 focus:ring-slate-500"
          />
        </div>


        <Captcha resetCaptcha={resetCaptcha} />

        <button
          type="submit"
          className="w-full px-4 py-2 font-semibold text-slate-800 border-2 border-teal-400 bg-gradient-to-r from-teal-800 to-teal-300 rounded-lg focus:outline-none  hover:from-teal-400 hover:to-teal-400 "
        >
          Submit
        </button>{" "}
        <p className="mt-4 text-sm font-bold text-center">
          <button className=" mr-2 px-3 py-1 rounded-lg bg-slate-600 text-teal-100 hover:underline ">
            <Link to={'/'}> ورود به حساب </Link>
          </button>{" "}
          حساب دارید؟{" "}
        </p>
      </form>
    </div>
  );
}
