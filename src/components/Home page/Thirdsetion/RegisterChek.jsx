import { useContext, useState } from "react"
import { AppContext } from "../HomePage"

export default function RegisterChek(){

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

    return(
        <div className="caret-transparent h-[48%] w-[96%] rounded-lg overflow-auto mt-3 border-2 border-slate-500 bg-slate-700 p-4">

            <div className="flex">
            <h1 className=" text-center pl-6 w-[90%] text-white text-xl mb-2"> درگاه ثبت چک</h1>
            <button onClick={()=> {setStatus(0);setAmount(null);setCardNumber(null)}}
            className="w-[10%] text-red-700 bg-rose-400 rounded-lg text-3xl ">
                    X
            </button>
            </div>
            
            <hr className="mb-3 mt-2"/>

            <form >

{/* *********************************************************************************************************************************/}

            <div className="flex mb-2"> 
                <input
                type="number"
                id="number"
                className="w-[80%] caret-white text-black text-center bg-slate-500 p-2 rounded-lg border-0 border-white
                focus:ring-2 focus:ring-red-500 focus:outline-none"
                placeholder="xxxx / xxxx / xxxx / xxxx"
                required
                onChange={onChangeCardNumberHandler}
                />
                <label className=" w-[35%] block text-right text-white mb-2" htmlFor="textDoc">
                : شماره حساب
                </label>

            </div>
{/* *********************************************************************************************************************************/}

            <div className="flex mb-2"> 
                <input
                type="number"
                id="number"
                className="w-[80%] caret-white text-black text-center bg-slate-500 p-2 rounded-lg border-0 border-white
                focus:ring-2 focus:ring-red-500 focus:outline-none"
                placeholder="xxxx / xxxx / xxxx / xxxx"
                required
                onChange={onChangeCardNumberHandler}
                />
                <label className=" w-[35%] block text-right text-white mb-2" htmlFor="textDoc">
                : شماره حساب
                </label>

            </div>

{/* *********************************************************************************************************************************/}

            <div className="mb-2 flex">
                <input
                type="number"
                id="number"
                className="w-[70%] caret-white text-black text-center bg-slate-500 p-2 rounded-lg border-0 border-white
                focus:ring-2 focus:ring-red-500 focus:outline-none"
                placeholder="   1xx xxx xxx"
                required
                onChange={onChangeAmountHandler}
                />
                <label className="w-[30%] block text-right text-white mb-2" htmlFor="date">
                :  مبلغ چک 
                </label>
            </div>
{/* *********************************************************************************************************************************/}

            <div className="mb-3 flex">
                <input
                type="date"
                id="date"
                className="w-[70%] caret-white text-center bg-slate-500 p-2 rounded-lg border-0 border-white
                focus:ring-2 focus:ring-red-500 focus:outline-none"
                placeholder="   1xx xxx xxx"
                required
                onChange={onChangeAmountHandler}
                />
                <label className="w-[30%] block text-right text-white mb-2" htmlFor="date">
                :  تاریخ چک 
                </label>
            </div>
{/* *********************************************************************************************************************************/}

            <div className="mb-3 flex">
                <textarea className="w-[70%] rounded-lg bg-slate-300" rows={1} name="ChekText" id="ChekTextId">

                </textarea>
                <label className="w-[30%] block text-right text-white mb-2" htmlFor="date">
                :  توضیحات چک 
                </label>
            </div>

{/* *********************************************************************************************************************************/}

            <div className="flex ">
                <button
                    type="submit"
                    className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                    پرداخت
                </button>

                <div className=" flex w-[80%] "> 
                    <label className="w-[50%]  text-right text-white mb-2" htmlFor="textDoc">
                    {(CardNumber==6219861800252396) ? (" رضا صیدانلو") : ("")}
                    </label>
                    <label className="w-[50%] text-right text-white mb-2" htmlFor="textDoc">
                    : نام و نام خانوادگی
                </label>
                </div>
            </div>

            
            </form>


      </div>
    )
}