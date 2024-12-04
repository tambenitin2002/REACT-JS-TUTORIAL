import React from "react";
export default class   extends React.Component {
    constructor(){
        super();
        this.state={
             count:0,
        };
      }
        increament(){
              this.setState({
                count:this.state.count+1
              })

        }

        decreament(){
          this.setState({
            count:this.state.count-1
          })
        }

        reset(){
          this.setState({
            count:0
          })
        }


    
  render(){
    return(
        <div>
            <h1>{this.state.count}</h1>
            {/* <button onClick={()=>this.setState({count:this.state.count+1})}>Increament</button>
            <button onClick={()=>this.setState({count:this.state.count-1})}>Decreament</button>
            <button onClick={()=>this.setState({count:0})}>Reset</button> */}

           <button onClick={()=>this.increament()}>Increament</button>
           <button onClick={()=>this.decreament()}>Decreament</button>
           <button onClick={()=>this.reset({count:0})}>Reset</button>

        </div>
    )
  }

}