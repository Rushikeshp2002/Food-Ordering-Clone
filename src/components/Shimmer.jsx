

const Shimmer = () =>{
    return(
        <div className="restraunt-list">
            {Array(10)
            .fill("")
            .map((e,i)=>
                <div className="Shimmer-card" key={i}></div>
            )}
        </div>

    )
}

export default Shimmer;