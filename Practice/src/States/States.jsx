import React, { Component } from "react";
// import ReactDOM,{createRoot} from "react-dom/client";
export default class States extends Component{
    constructor() {
     super();
      this.state={
        name:"Nitin",
        age:24,
        skill:{
            rating:3
        }
        };
      

    }

render(){
    return (
        <div>
        <h1>
        {this.state.name}<br/>
        <button onClick={()=>this.setState({name:"Aniket"})}>Click Here</button>
        <hr/>
        {this.state.age}
        <hr/>
        {this.state.skill.rating}
        <br/>
        <button onClick={()=>this.setState({skill:{rating:20}})}>Click Here To Change Rating</button>
        </h1>
        </div>
    )
}

}

// ReactDOM.creatRoot(document.getElementById("root")).render(<States/>)

