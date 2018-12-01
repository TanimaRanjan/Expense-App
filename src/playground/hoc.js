// Higer Order component (HOC) - A component that renders another components
// Reuse Code
// Render hijacking
// Prop Manipulation
// Abstract State

import React from 'react'
import ReactDOM from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        {props.isAdmin && <p>hello admin</p>}
        <p>Information is simple {props.info}   </p>
    </div>
)

const withAdminWarning = (WrapperComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private message. Do not share</p> }
            <WrapperComponent {...props} />
        </div>
    )   
}

const requireAuthentication = (WrapperComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? 
                    ( 
                        <WrapperComponent {...props}/>
                        )
                : 
                    <p>Login </p>}
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDOM.render(<AdminInfo isAdmin={false} info="details details" />, document.getElementById('app'))
ReactDOM.render(<AuthInfo isAuthenticated={true} info="details details" />, document.getElementById('app'))