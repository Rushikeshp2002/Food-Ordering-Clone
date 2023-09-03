

const Shimmer = () =>{
    return(
       <>
       <>
       <h1 className="text-center text-xl my-5">Make sure to install Allow Cors Extension from Chrome store and turn the toggle on</h1>
        </>
        <div className="restraunt-list w-full h-full flex m-auto justify-center flex-wrap my-10 mx-2 animate-pulse">
        
        {Array(10)
        .fill("")
        .map((e,i)=>
            <div className="w-72 h-80 bg-gray-400 rounded-xl  m-10" key={i}>.</div>
        )}
    </div>

       </>
    )
}

export default Shimmer;