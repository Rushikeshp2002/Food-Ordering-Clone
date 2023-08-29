import { useParams } from "react-router-dom";

const RestrauntMenu =()=>{
    // or const parrr = useParams;   const {id} = parr;
    const {id} = useParams();
    return(
       
        <>
         <h1>Restraunt:{id}</h1>
        <h1>Welcomee</h1>
        </>
    )

}

export default RestrauntMenu;