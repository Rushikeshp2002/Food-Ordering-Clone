import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnline";
import UserContext from "../Utils/UserContext";



const Title = () => {
    return(
     <h1 id='title' key="h2" className="text-3xl py-4 px-5">
     Food Villa
    </h1>
    );
 };

 const HeaderComp = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(true);
  const isOnline = useOnline();

  const {user} = useContext(UserContext);
    return(
      <div className="w-full flex justify-between align-middle  bg-rose-500 text-white">
        <Title />
        <div>
         <ul className="flex my-5">
          <li className="px-3 text-xl"><Link to="/">Name</Link></li>
          <li className="px-3 text-xl"><Link to="/about">About</Link></li>
          <li className="px-3 text-xl"><Link to="/contact">Contact No</Link></li>
          <li className="px-3 text-xl"><Link to="/instamart">Instamart</Link></li>
          <li className="px-3 text-xl">Cart</li>
         </ul>
        </div>
          <h1 className="text-xl py-5  my-1 relative left-36">{user.name}</h1>
        
        <h1 className="py-7 absolute right-36">{isOnline ? "✅" : "⚔️"}</h1>
        {
        (isLoggedIn) ? 
        <button onClick={()=>{setIsLoggedIn(false)}} className="text-lg bg-white text-black w-16 h-8 my-5 mx-2 rounded">Login</button> 
        : 
        <button  onClick={()=>{setIsLoggedIn(true)}} className="text-base  bg-gray-700 text-white w-16 h-8 my-5  mx-2 rounded">LogOut</button>
       }

      </div>
     
  
    );
  
  };

export default HeaderComp;