import { useEffect, useState } from "react"

const useUser = email =>{
    const [isUser, setIsUser] = useState(false);
    const [isUserLoading, setIsUserLoading] = useState(true);
    useEffect(() =>{
        if(email){
            fetch(`https://hospital-management-server-beta.vercel.app/users/isUser/${email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setIsUser(data.isUser);
                setIsUserLoading(false);
            })
        }
    }, [email])
    return [isUser, setIsUserLoading]
 }

export default useUser;