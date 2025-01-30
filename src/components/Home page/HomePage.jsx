
import Payments from "./Pay/Payments";
import Deposits from "./Depos/Deposits"
import ThirdColumn from "./Thirdsetion/ThirdColumn";
import ToolBar from "./ToolbarSetion/ToolBar";
import { createContext, useEffect, useState } from "react";
import Transactions from "./AdminPages/Transactions";
import UsersList from "./AdminPages/UsersList";
import axios from "axios";

export const AppContext = createContext(null)

let information = {
    name : "",
    lastname : "",
    nationalcode : "",
    cardnumber : "",
    balance : "",
    isAdmin : false
}

export default function HomePage(){

    const [Status , setStatus ] = useState(0)
    const [AdminOption , setAdminOption] = useState(false)
    const [isAdmin , setisAdmin] = useState()
    
    

    useEffect(()=>{

        const fetchData = async () => {
            try {
              const response = await axios.get('/api/maininformation'); // Retrieved data
              setisAdmin(response.data.isAdmin)
              setAdminOption(response.data.isAdmin)
              information = response.data[0]
            } catch (error) {
              console.error(error);
            }
          };
          fetchData();
    },[])
   
    return(

        <AppContext.Provider value={{Status , setStatus ,AdminOption , setAdminOption , isAdmin , information}}>
            <div className=" flex items-center  h-screen gap-x-3 justify-center bg-slate-800">
                {AdminOption ? (

                    <div className=" caret-transparent w-[55%] h-[95%] flex justify-center gap-1 bg-slate-800  flex-wrap overflow-auto">
                        <ToolBar />
                        <Transactions />
                        <UsersList />
                    </div>

                ):(

                    <div className=" caret-transparent w-[55%] h-[95%] flex justify-center gap-1 bg-slate-800  flex-wrap overflow-auto">
                        <ToolBar />
                        <Deposits />
                        <Payments />
                    </div>
                    
                )}
            <ThirdColumn />
        </div>
        </AppContext.Provider>
        
    );
}