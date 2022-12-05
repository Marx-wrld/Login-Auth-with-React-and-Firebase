import React from 'react'
import { Route, Navigate, Routes } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function PrivateRoute({ component : Component, ...rest}) { //wrapper for the current route

  const { currentUser } = useAuth()
  return (
    <Routes>
    <Route
      {...rest}
      render={props => {
        return currentUser ? <Component {...props} /> : <Navigate to="/login" />
      }}
    ></Route>
    </Routes>
  )
}

//{/* returning our route*/}
// {/* This route will take all the rest of the routes*/}
//here we check if we have a current user
         //if we have a current user then we just want to render out the component that we got passed into our class.
         //otherwise we don't want to render this component because its a private component. So, we want to redirect our user