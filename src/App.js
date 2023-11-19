import React, { lazy, Suspense, useState } from 'react'
import  ReactDOM  from 'react-dom/client';
import '../index.css';
import Title from './components/Title'
import HeaderComponent from './components/Header';
import Body from './components/Body';
import About from './components/About';
import Footer from './components/Footer';
import Error from './components/Error';
import Contact from './components/Contact';
import { createBrowserRouter, RouterProvider,Outlet } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Shimmer from './components/Shimmer';
import  UserContext  from './utils/UserContext';
import {Provider} from 'react-redux';
import store from './utils/store';
import Cart from './components/Cart';
// lazy loading , codeSplitting , Chunking, Dynamic Import

const Instamart = lazy(()=> import("./components/Instamart"))

/**
               * Header
               *        - Logo
               *        - Nav items
               *        - Cart
               * Body
               *        -Search Bar
               *        Restaurant List
               *                -Restaurant card
               *                        -Image
               *                        -Name
               *                        -Rating
               *                        -Cusines
               * Footer
               *        - links
               *        - Copyright
**/

const AppLayout = ()=>{
        const [user,setUser] = useState({
                name:"sushrith",
                email : "sushrith@gmail.com"
           });
        return (
           <Provider store={store}>
           <UserContext.Provider value={{user:user,setUser:setUser}}>     
                        <HeaderComponent/>     
                        {/* {outlet to fill children} */}
                        <Outlet/>
                        <Footer/>
            </UserContext.Provider>
           </Provider>
        );
};
        
const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <AppLayout/>,
            errorElement: <Error/>,
            children: [
                {
                        path: "/",
                        element: <Body/>
                },
                {
                        path: "/about",
                        element: <About/>,
                        children:[
                                {
                                        path: "profile",
                                        element: <Profile/>
                                }
                        ]
                },
                {
                        path: "/contact",
                        element: <Contact/>
                },
                {
                        path: "/restaurant/:id",
                        element: <RestaurantMenu/>
                },
                {
                        path: "/instamart",
                        element: <Suspense fallback={<Shimmer/>}><Instamart/></Suspense>
                },
                {
                        path:"/cart",
                        element: <Cart/>

                }
            ]
        },
        
]);
        
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
