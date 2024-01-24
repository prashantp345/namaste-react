import User from "./User";
import UserClass from "./UserCalss";
import { Component } from "react";
class About extends Component {
    constructor() {
        console.log("Parent Constructor");
        super();
    }

    componentDidMount() {
        console.log("Parent componentDidMount")
    }
    render () {
        console.log("Parent render")
        return(
            <div>
                <h1>About</h1>
                <h2>This is namaste react About</h2>
                <User name="Prashant Pradhan" location="Aurnagabad"/>
                <UserClass name="X Pradhan" location="X_Aurnagabad"/>
                <UserClass name="Y Pradhan" location="X_Aurnagabad"/>
            </div>
        )
    }
}

export default About;