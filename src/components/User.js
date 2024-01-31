import { useState } from "react";

const User = ({ name, location }) => {

    const [ count1, setCount1 ] = useState(0);
    const [ count2, setCount2 ] = useState(2);
    
    return(
        <div className="user">
            <div>User Name: { name }</div>
            <div>Location: { location }</div>
            <div>Count1: { count1 }</div>
            <div>Count2: { count2 }</div>
            <button onClick={()=>{
                 setCount1(count1+1)
            }}>Clicked</button>
        </div>
    )
}

export default User;