import React from 'react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layouts from './Layouts/Layouts'
import Home from './Pages/Home'
import Skill from './Pages/Skill'
import Profile from './Pages/Profile'
import Contact from './Pages/Contact'
import About from './Pages/About'

const RouterTwo = () => {
    
    const pathRouter = createBrowserRouter([
        {
            path:"/",
            element: <Layouts />,
            children:[
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path:"about",
                    element:<About />,
                },
                {
                    path:"profile",
                    element:<Profile />,
                },
                {
                    path:"skill",
                    element:<Skill />,
                },
                {
                    path:"Contact",
                    element:<Contact />,
                },
            ],
        },

    ])
  return (
    <RouterProvider router = {pathRouter} />

  )
}

export default RouterTwo
