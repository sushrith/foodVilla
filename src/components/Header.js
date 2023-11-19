import React,{ useContext } from 'react'
import Title from './Title';
import { Link } from 'react-router-dom';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/UserContext';
import { useSelector } from 'react-redux';
const authenticateUser = () =>{
    return true;
}

const HeaderComponent = ()=>{
    const isOnline = useOnline();
const {user} = useContext(UserContext);
const cartItems = useSelector(store => store.cart.items);
    return (
            <div className='flex justify-between bg-pink-50 shadow-lg'>
                 {/* <Title/> */}
                 <div className=''>
                    <ul className='flex py-10'>
                            <li className='px-2'>
                                <Link to="/">
                                    Home    
                                </Link> 
                            </li>
                            <li className='px-2'>
                                <Link to="/about">
                                    About
                                </Link>
                            </li>
                            <li className='px-2'>
                                <Link to="/contact">
                                    Contact
                                </Link>
                            </li>
                            <li className='px-2'>
                                <Link to="/instamart">
                                    Instamart
                                </Link>
                            </li>
                            <li className='px-2'>
                                <Link to="/cart">
                                    Cart - {cartItems.length} items
                                </Link>
                            </li>
                    </ul>
                 </div>
                 {user.name}
                 {!authenticateUser?<button>{isOnline?'🟢':'🔴'}Login</button>:
                 <button>{isOnline?'🟢':'🔴'}Logout</button>}
            </div>
    );
}

export default HeaderComponent;