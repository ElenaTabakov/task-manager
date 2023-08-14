import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({isLogged, children} : {isLogged:boolean, children : any}) => {

   if (!isLogged) {
    return <Navigate to="/" replace />
   } 
    return children;
}

export default ProtectedRoute