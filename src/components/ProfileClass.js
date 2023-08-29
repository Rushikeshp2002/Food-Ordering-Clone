import React from "react";

class Profile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        console.log("constructor");
    }

    componentDidMount(){
        console.log("componentDidMount");
    }
    render(){
        console.log("render");
        return(
            
            <>
             <h1>{"My name is : "+this.props.name}</h1>
             <h2>{this.state.count}</h2>
             <button onClick={()=>{
               this.setState({
                count:this.state.count+1,
               })
             }}>SetCount</button>
            </>
        )
    }
}

export default Profile;