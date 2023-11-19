import React from 'react'
import { addItem, removeItem } from '../utils/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
const AddButton = ({item}) => {
    const dispatch = useDispatch();
const cartItems = useSelector(store=>store.cart.items);
const count = useSelector(store=>store.cart.count);
const handleAddItem = (item) => {
    dispatch(addItem(item))
}

const handleRemoveItem = (item) => {
    dispatch(removeItem(item))
}

const checkItemCount = (item) =>{
    if(count[item.id])
        return count[item.id];
    else
        return 0;
}
  return (
    <div  className='p-2 m-2 bg-green-100 border border-black shadow-md w-24 flex justify-evenly'>
    <span className="pr-3 cursor-pointer hover:bg-green-300 rounded-md" onClick={()=>handleRemoveItem(item)}>-</span>
    { checkItemCount(item)===0?<span>Add</span>:<span>{checkItemCount(item)}</span>
    }
    <span className="pl-3 cursor-pointer hover:bg-green-300 rounded-md" onClick={()=>handleAddItem(item)}>+</span>
</div>
  )
}

export default AddButton