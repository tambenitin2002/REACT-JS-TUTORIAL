//! Till 09/09/2024

// import React, {Component} from "react";

// export default class App extends Component {

//     constructor(){
//       super()
//       this.state={
//         name: "Nitin",
//         age:24,
//         skill:{
//           rating:3
//         }
//       };
      

//     }
  

// render(){
//   return(
//       <div>
//           <h1>
//             {this.state.name}<br />
//             <button onClick={()=>this.setState({name:"Nit"})}>Change Name</button>
//             <hr />
//             {this.state.age}
//             <hr />
//             {this.state.skill.rating}
//             <br />
//             <button onClick={()=>this.setState({skill:{rating:1}})}>Change Ratting</button>
//           </h1>
        
        
//       </div>
//   )
// }
// }



// import React, {Component} from "react";

// export default class App extends Component {

//     constructor(){
//       super()
//       this.state={
//         count:0
//       };
      

//     }

//  increament(){
//         this.setState({
//           count:this.state.count+1
//         })
//       }
// decreament(){
//     this.setState({
//           count:this.state.count-1
//         })
//       }

//  reset(){
//         this.setState({
//           count:0
//         })
//       }     
// render(){
//   return(
      
      // <div>
      //   <h1>{this.state.count}</h1>
      //   <button onClick={()=>this.setState({count:this.state.count+1})}>Increament</button>
      //   <button onClick={()=>this.setState({count:this.state.count-1})}>Decreament</button>
      //   <button onClick={()=>this.setState({count:0})}>Reset</button>
      // </div>

     
      
     
      
//       <div>
//       <h1>{this.state.count}</h1>
//       <button onClick={()=>this.increament()}>Increament</button>
//       <button onClick={()=>this.decreament()}>Decreament</button>
//       <button onClick={()=>this.reset({count:0})}>Reset</button>
//     </div>
//   )
// }

// }