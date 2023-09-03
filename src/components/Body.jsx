
import React, { useEffect, useState } from "react";
import Card from "../components/RestrauntCard";
// import { restrauntList } from "../Constants";
import Shimmer from "./Shimmer";
import  useOnline from "../Utils/useOnline";

function filterData(searchTxt,restraunts) {
    const filterData = restraunts.filter((restraunts) => restraunts?.info?.name?.toLowerCase()?.includes(searchTxt.toLowerCase()));
    return filterData;
  }




const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchTxt, setSearchText] = useState("");
    
useEffect(()=>{
      getRestraunts();
      console.log("Render");
    },  []);
    
async function getRestraunts() {
      const data =  await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5912716&lng=73.73890899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      console.log("rrrr");
      setAllRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
} 

const isOnline = useOnline();

if(!isOnline){
  return <h1>🔴Oops you are Offline</h1>
}


if(!allRestaurants) return null;

 
   
    
    return allRestaurants?.length === 0 ? (
      <Shimmer />
    ) : (
      <>
      <div className="w-3/5 py-3 rounded-full flex m-auto align-middle justify-center">
        <input type="text" 
        className="w-3/6 h-10 rounded-full px-6 text-lg border-2 border-red-700 " 
        placeholder="Search here" 
        value={searchTxt} 
        onChange={(e) =>{
           setSearchText(e.target.value);
        }}
        />
        <button className="bg-rose-500 w-36 rounded-full text-lg text-white mx-2 hover:bg-rose-600" onClick={()=>{
            const info = filterData(searchTxt, allRestaurants);
            setFilteredRestaurants(info);
        } }>Search</button>
      </div>
      <div className="inline-flex flex-wrap w-full my-auto mx-10">
      
       {filteredRestaurants?.map((restraunt) => {
          return (
            <Card {...restraunt?.info} key={restraunt.info.id}/>
          );
        })}
      </div>
      </>
    );
  };

export default Body;