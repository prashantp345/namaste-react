import React, { lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import  Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import Restaurantmenu from './components/RestaurantMenu.js';
import UserContext from './utils/UserContext.js';
import { Provider } from 'react-redux';
import appStore from './utils/appStore.js';
import Cart from './components/Cart.js';
const Grocery = lazy(()=> import('./components/Grocery'));

const AppLayout = () => {

    const [ userName, setUserName ] = useState();

    //authentication 
    useEffect(()=> {
        //Make an API call and send UserName and Password
        const data = {
            name: ""
        };
        setUserName(data.name);
    }, [])

    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                <div className='app'>
                    <Header />
                    <Outlet />
                </div>
            </UserContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    { 
        path:"/", 
        element: <AppLayout/> , 
        children: [
            { 
                path:"/", 
                element: <Body/>
            },
            { 
                path:"/about", 
                element: <About/>
            },
            { 
                path:"/contact", 
                element: <Contact/>
            },
            { 
                path:"/grocery", 
                element: <Suspense fallback={<h1>Grocery loading...</h1>}>
                            <Grocery/>
                        </Suspense>
            },
            { 
                path:"/restaurant/:resId", 
                element: <Restaurantmenu/>
            },
            { 
                path:"/cart", 
                element: <Cart/>
            },
        ],
        errorElement: <Error/>
    },

]);;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);