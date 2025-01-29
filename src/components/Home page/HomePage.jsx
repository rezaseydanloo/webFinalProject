
import Payments from "./Pay/Payments";
import Deposits from "./Depos/Deposits"
import ThirdColumn from "./Thirdsetion/ThirdColumn";
import ToolBar from "./ToolbarSetion/ToolBar";
import { createContext, useEffect, useState } from "react";
import Transactions from "./AdminPages/Transactions";
import UsersList from "./AdminPages/UsersList";
import axios from "axios";

export const AppContext = createContext(null)


export default function HomePage(){

    const [Status , setStatus ] = useState(0)
    const [AdminOption , setAdminOption] = useState(false)
    const [isAdmin , setisAdmin] = useState()
    const [information , setinformation] = useState([]);
    const [information2 , setinformation2] = useState({
        name : "",
        lastname : "",
        nationalcode : "",
        cardnumber : "",
        balance : "",
        isAdmin : false
    });

    useEffect(()=>{

        const fetchData = async () => {
            try {
              const response = await axios.get('/api/maininformation'); // Retrieved data
              setinformation(response.data)
              setinformation2(information[0])
              setisAdmin(information2.isAdmin)
              setAdminOption(information2.isAdmin)
              console.log(information2)
            } catch (error) {
              console.error(error);
            }
          };
          fetchData();
    },[])
   
    return(

        <AppContext.Provider value={{Status , setStatus , information2 ,AdminOption , setAdminOption , isAdmin}}>
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