import { useContext, useState } from "react";
import { AppContext } from "../HomePage";



export default function PaymentWindow() {

   const {setStatus} = useContext(AppContext)

    const [CardNumber , setCardNumber ] = useState(null)
    const [Amount , setAmount ] = useState(null)

    const onChangeCardNumberHandler = (e)=> {
        setCardNumber(e.target.value)
        console.log(CardNumber)
    }
    const onChangeAmountHandler = (e)=> {
        setAmount(e.target.value)
        console.log(Amount)
    }


    
    return (
      <div className="caret-transparent h-[48%] w-[96%] rounded-lg overflow-auto mt-3 border-2 border-slate-500 bg-slate-700 p-4">

        <div className="flex">
          <h1 className=" text-center pl-6 w-[90%] text-white text-xl mb-2">درگاه پرداخت</h1>
          <button onClick={()=> {setStatus(0);setAmount(null);setCardNumber(null)}}
           className="w-[10%] text-red-700 bg-rose-400 rounded-lg text-3xl ">
                X
          </button>
        </div>
         
        <hr className="mb-3 mt-2"/>
        <form >
          <div className="mb-7">
            <label className="block text-right text-white mb-2" htmlFor="textDoc">
              : شماره کارت 
            </label>
            <input
              type="number"
              id="number"
              className="w-full caret-white text-black text-center bg-slate-500 p-2 rounded-lg border-0 border-white
              focus:ring-2 focus:ring-red-500 focus:outline-none"
              placeholder="xxxx / xxxx / xxxx / xxxx"
              required
              onChange={onChangeCardNumberHandler}
            />
          </div>

          <div className="mb-4 flex "> 
            <label className="w-[65%]  text-right text-white mb-2" htmlFor="textDoc">
                {(CardNumber==6219861800252396) ? ("رضا صیدانلو") : ("")}
              </label>
            <label className="w-[35%] text-right text-white mb-2" htmlFor="textDoc">
                : نام و نام خانوادگی
              </label>
          </div>
  
         
          <div className="mb-5">
            <label className="block text-right text-white mb-2" htmlFor="date">
              : مبلغ 
            </label>
            <input
              type="number"
              id="number"
              className="w-full caret-white text-black text-center bg-slate-500 p-2 rounded-lg border-0 border-white
              focus:ring-2 focus:ring-red-500 focus:outline-none"
              placeholder="   1xx xxx xxx"
              required
              onChange={onChangeAmountHandler}
            />
          </div>
  
          <button
            type="submit"
            className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            پرداخت
          </button>
        </form>


      </div>
    );
  }
