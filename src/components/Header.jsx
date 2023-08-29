import { useState , useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../Utils/useOnline";
import UserContext from "../Utils/UserContext";



const Title = () => {
    return(
     <h1 id='title' key="h2" className="text-5xl py-3">
     Food Villa
    </h1>
    );
 };

 const HeaderComp = () => {
  const [isLoggedIn,setIsLoggedIn] = useState(true);
  const isOnline = useOnline();

  const {user} = useContext(UserContext);
    return(
      <div className="w-full flex justify-between align-middle p-3 bg-rose-500 text-white">
        <Title />
        <div>
         <ul className="flex my-5">
          <li className="px-5 text-2xl"><Link to="/">Name</Link></li>
          <li className="px-5 text-2xl"><Link to="/about">About</Link></li>
          <li className="px-5 text-2xl"><Link to="/contact">Contact No</Link></li>
          <li className="px-5 text-2xl"><Link to="/instamart">Instamart</Link></li>
          <li className="px-5 text-2xl">Cart</li>
         </ul>
        </div>
          <h1 className="text-2xl py-5 my-1 relative left-60">{user.name}</h1>
        
        <h1 className="py-6 absolute right-36">{isOnline ? "✅" : "❌"}</h1>
        {
        (isLoggedIn) ? 
        <button onClick={()=>{setIsLoggedIn(false)}} className="text-2xl bg-white text-black w-28 h-12 my-3 rounded">Login</button> 
        : 
        <button  onClick={()=>{setIsLoggedIn(true)}} className="text-2xl  bg-gray-700 text-white w-28 h-12 my-3 rounded">LogOut</button>
       }

      </div>
     
  
    );
  
  };

export default HeaderComp;