import { createContext } from "react";

const UserContext = createContext({
    user:{
        name:"Rushikesh",
        email:"blahblah@gmail.com",
    }
});

export default UserContext;