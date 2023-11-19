import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState :{
        items: [],
        count: {},
        total: 0,
    },
    reducers: {
        addItem: (state,action)=>{
            const id = action.payload.id;
            if(!state.count[id])
            state.items.push(action.payload);
            if(state.count[id]){
                state.count[id] = state.count[id]+1; 
            }else{
                state.count[id] = 1;
            }
            state.total = Math.round(state.total+(action.payload.price/100));

        },
        clearCart: (state)=>{
            state.items = [];
            count = {};
        },
        removeItem: (state,action)=>{
            state.items = state.items.filter((item)=>{
                return !(item.id===action.payload.id && state.count[action.payload.id]===1)
            }); 
            const id = action.payload.id;
            if(state.count[id]>=1){
                if(state.count[id]>1)
                state.count[id] = state.count[id]-1; 
                else
                delete state.count[id];
            state.total = Math.round(state.total-(action.payload.price/100));
            }

        }
    }
});

//exporting all actions
export const {addItem,clearCart,removeItem} = cartSlice.actions;

//.reducer =>combines all reducers and export one
export default cartSlice.reducer;

