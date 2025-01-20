
import Payments from "./Pay/Payments";
import Deposits from "./Depos/Deposits"
import ThirdColumn from "./Thirdsetion/ThirdColumn";
import ToolBar from "./ToolbarSetion/ToolBar";
import { createContext, useState } from "react";

export const AppContext = createContext(null)

export default function HomePage(){

    const [Status , setStatus ] = useState(0)
   
    return(

        <AppContext.Provider value={{Status , setStatus}}>
            <div className=" flex items-center  h-screen gap-x-3 justify-center bg-slate-800">
            <div className=" caret-transparent w-[55%] h-[95%] flex justify-center gap-1 bg-slate-800  flex-wrap overflow-auto">
                <ToolBar />
                <Deposits />
                <Payments />
            </div>
            <ThirdColumn />
        </div>
        </AppContext.Provider>
        
    );
}