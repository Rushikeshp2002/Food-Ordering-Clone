import Profile from "./ProfileClass";
import { useEffect } from "react";

const About = () => {

    useEffect(() =>{
        const timer = setInterval(() =>{
            console.log("Heyy");
        },1000)

        return ()=>{
          clearInterval(timer);
          console.log("Timer Cleared");
        }
    })
    return(
        <div>
            <h1>About this Page.......</h1>
            <h1>Heyyaaaaa</h1>
            <Profile name={"Rushikesh Patil"}/>
        </div>
    )
}

export default About;