import { useEffect, useState } from "react";

const useOnline = () => {
    const [isOnline,setIsOnline] = useState(true);

    useEffect(()=>{ //we are using use effect bcause our eventListener should trigger only once
        
        const handleOnline = ()=>{
            setIsOnline(true);
        }

        const handleOffline = ()=>{
                setIsOnline(false);
            }
        

        window.addEventListener("online",handleOnline);
        window.addEventListener("offline",handleOffline);

        return ()=>{
            //if we dont cleanUp it will be still present for other components also
            window.removeEventListener("online",handleOnline);
            window.removeEventListener("offline",handleOffline);
        }
    },[]);
    
    return isOnline; 
}

export default useOnline