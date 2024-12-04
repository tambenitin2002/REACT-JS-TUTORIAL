import React from "react";
export default class State extends React.Component {
  constructor(){
    super();
    this.state={
        name:"Nitin",
        email:"email@gmail.com",
        password:"pass",
        skill:{
            skill1:"java",
            skill2:"python",
            skill3:"javascript",
            skill4:"HTML"
        }

    };
  }
  render(){
      return(
        <div>
            <h1>{this.state.name}</h1>
            <h2>{this.state.email}</h2>
            <h2>{this.state.password}</h2>
            <h2>Skill: </h2>
            <ul>
                {Object.entries(this.state.skill).map(([key,skill])=>(
                    <li key={key}>

                        {key}:{skill}
                    </li> 
                ))
                
            }
            </ul>

            <button onMouseOver={()=>this.setState({name:"Nitin Tambe"})}>Over Here!</button>

        </div>
      )
  }
}