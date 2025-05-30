import React, { use } from 'react';
import { Authcontext } from '../Auth/Authcontext';
import { Navigate } from 'react-router';

const Privaterouter = ({childern}) => {

   const {users} = use(Authcontext)

   if(!users){
    <Navigate to="/signup"></Navigate>
   }

    return childern
};

export default Privaterouter;