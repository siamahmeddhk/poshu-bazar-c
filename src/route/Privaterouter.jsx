import React, { use } from 'react';
import { Authcontext } from '../Auth/Authcontext';
import { Navigate, useLocation } from 'react-router';

const Privaterouter = ({childern}) => {

   const {users} = use(Authcontext)
   
   const location = useLocation()
   console.log(location)


   if(!users){
    return <Navigate to="/signup" state={location.pathname}></Navigate>
   }

    return childern
};

export default Privaterouter;