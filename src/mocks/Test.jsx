import axios from "axios"
import { useEffect, useState } from "react"


export default function Test(){

    const [User , setuser] = useState ([])

    useEffect(()=> {

        const fetchData = async () => {
            try {
              const response = await axios.get('/api/users');
              console.log(response.data); // Retrieved data
              setuser(response.data)
            } catch (error) {
              console.error(error); // Error handling
            }
          };
          fetchData();

    } , [])


    return(
        <div>
            {User.map((user)=>(

                <div key={user.id}> 
                
                    <p> name : {user.name} </p>
                    <p> id : {user.id} </p>
                    <br />
                
                 </div>

            ))}
        </div>
    )
}