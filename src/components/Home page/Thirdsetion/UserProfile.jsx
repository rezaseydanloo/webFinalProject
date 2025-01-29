import { useContext, useEffect, useState } from "react"
import { AppContext } from "../HomePage"

export default function UserProfile(){

    const {isAdmin} = useContext(AppContext)
    const {information2} = useContext(AppContext)

  

    return(
        <div className=" w-[96%] h-[45%] mt-4 rounded-xl border-2 border-slate-500 bg-slate-700 " >
            
            <h1 className="text-center pt-2 items-center text-white text-xl">پنل اطلاعات</h1>
            
            <hr className="mb-5 mt-3 border-1  border-teal-600 w-[92%] ml-4"/>
            
            <div className="flex mb-4">
                <h1 className="w-[85%] text-xl text-white text-right"> {console.log(information2)} </h1>
                <h1 className="w-[15%] text-xl text-slate-400 pr-3  text-right">: نام</h1>
            </div>
            
            <div className="flex mb-4">
                <h1 className="w-[68%] text-xl text-white text-right"> </h1>
                <h1 className="w-[32%] text-xl text-slate-400 pr-3  text-right">  :نام خانوادگی</h1>
            </div>
            
            <div className="flex mb-4">
                <h1 className="w-[75%]  text-white text-xl text-right"> </h1>
                <h1 className="w-[25%] text-xl  text-slate-400 pr-3  text-right"> : کد ملی</h1>
            </div>
            
            <div className="flex mb-4">
                <h1 className="w-[65%] text-xl text-white text-right"></h1>
                <h1 className="w-[35%] text-xl text-slate-400 pr-3  text-right">:  شماره حساب</h1>
            </div>
            
            <div className="flex mb-4">
                <h1 className="w-[68%] text-xl text-white text-right"></h1>
                <h1 className="w-[32%] text-xl text-slate-400 pr-3  text-right">:   مانده حساب</h1>
            </div>
            
            <div className="flex mb-4">
                

                    {isAdmin ? (<h1 className="w-[80%] text-xl text-white text-right"> ادمین </h1> ) :
                               (<h1 className="w-[80%] text-xl text-white text-right"> کاربر </h1>)}

                <h1 className="w-[20%] text-xl text-slate-400 pr-3  text-right">:  عنوان</h1>
            </div>

        </div>
    )
}