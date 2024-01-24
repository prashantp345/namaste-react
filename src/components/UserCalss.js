import React from "react";

class UserClass extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count1 : 1,
            count2: 3
        }
        console.log(this.props.name+"Clild construtor")
    }

    componentDidMount() {
        console.log(this.props.name+"Clild componentDidMount")
    }

    render() {
        console.log(this.props.name+"Clild render")
        return(
            <div className="user">
                <div>User Name : {this.props.name}</div>
                <div>Location: {this.props.location}</div>
                <div>Location: {this.state.count1}</div>
                <div>Location: {this.state.count2}</div>
                <button onClick={()=>{
                    this.setState({ 
                        count1: this.state.count1+1
                    });
                }}>Count Clicked</button>
            </div>
        )
    }
}

export default UserClass;