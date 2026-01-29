import React from "react";
import { userContext } from './context';
 
export default function Content() {
    let [user, setUser] = React.useContext(userContext)

    const contentStyle = {
        backgroundColor: '#ddd',
        textAlign: 'center',
        padding: 10,
        margin: 10
    }

    const onCliclSignin = (event) => {
        event.preventDefault()
        setUser("Tom Jerry")
    }
    return (
        <div style={contentStyle}>
            {
                (user)
                ? <span>Hello {user}</span>
                : <span>Please <a href='' onClick={onCliclSignin}>Signin</a></span>
            }
        </div>
    )
}