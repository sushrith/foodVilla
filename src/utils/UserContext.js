import { createContext, useState } from "react";

const UserContext = createContext({
    user:{
            name: "Dummy Name",
            email: "dummy@gmail.com"
        }
    });
UserContext.displayName = "UserContext"; //jst for debuging using dev tools

export default UserContext;