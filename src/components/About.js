import User from "./User";
import UserClass from "./UserCalss";
import { Component } from "react";
import UserContext from "../utils/UserContext";

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
                <div className="flex">
                    LoggedIn User:
                    <UserContext.Consumer>
                        { ({loggedInUser}) => (
                            <h1 className="font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <h2>This is namaste react About</h2>
                <User name="Prashant Pradhan" location="Aurnagabad"/>
                <UserClass name="X Pradhan" location="X_Aurnagabad"/>
                <UserClass name="Y Pradhan" location="X_Aurnagabad"/>
            </div>
        )
    }
}

export default About;