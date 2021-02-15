// Higher Order Component (HOC) - A component (HOC) that renders aother component

import React from "react";
import ReactDOM from "react-dom";


const Info = (props) => (
  
    <div>
        <h1>Info</h1>
        <p>The Info is: {props.info}</p>
    </div>    

);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
        {props.isAdmin? <p>This is private info please do not share!</p>: undefined}
        <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {
            props.isAuthenticated? 
            (<WrappedComponent {...props} />) 
            :
            (<p>You need to login to see this page!</p>)
        }
        
        </div> 

    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);
//ReactDOM.render(<AdminInfo isAdmin={true} info="there are the details"/>, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="there are the details"/>, document.getElementById("app"));