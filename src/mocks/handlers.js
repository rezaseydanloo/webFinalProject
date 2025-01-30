import { http , HttpHandler, HttpResponse } from "msw";

export const handlers = [

    http.get(('/api/users') , (resolver)=>{
        return HttpResponse.json([
            {
                id: 1,
                name : "reza"
            },
            {
                id: 2,
                name : "amir"
            },
            {
                id: 3,
                name : "diba"
            }
        ]);
    }),

    http.get(('/api/maininformation') , (resolver)=>{
        return HttpResponse.json([
            {
                name : "diba",
                lastname : "yanough",
                nationalcode : "5790111661",
                cardnumber : "6219861800252396",
                balance : 1000000,
                isAdmin : true
            }
        ]);
    }),

    http.get(('/api/information') , (resolver)=>{
        return HttpResponse.json(
            JSON.parse(localStorage.getItem("signinKey"))
        );
    }),

    http.post("/api/login" , async({request})=> {
        const requestBody = await request.json();
        return HttpResponse.json({
            content : requestBody,
            status : "200"
        }
        )
    }),
    http.post("/api/signin" , async({request})=> {
        const requestBody = await request.json();
        localStorage.setItem("signinKey" , JSON.stringify(requestBody))
        return HttpResponse.json({
            status : "200"
        }
        )
    }),

]