import { configureStore, createSlice } from '@reduxjs/toolkit'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// function for local staorgae

// function getlocaldata()
// {
//     const localdata=localStorage.getItem("product")
//     if(!localdata) return []
//     return JSON.parse(localdata)
// }

//function for session storage

// function getsessiondata()
// {
//     const sessiondata=sessionStorage.getItem("product")
//     if(!sessiondata) return []
//     return JSON.parse(sessiondata)
// }

const initialState={

    // issko [] bhi de skte the 
    // phele agr local storage use nhi krna toh
    // cartitems:getlocaldata(),

    // for session storage
    // cartitems:getsessiondata(),
    cartitems:[],
    productinfo: null,
    wishitems:[],
    allproducts:[],
    filterproducts:[],
}



const slice=createSlice({
    name:"addtocart",
    initialState,
    reducers:{
        addTocart(state,action){
            const itemindex=state.cartitems.findIndex(curr=>curr.id===action.payload.id)

            if (itemindex >= 0)
            {
            //    state.cartitems[itemindex].quantity += 1
            toast.error("This Product is already in to Cart");
            }
            else
            {
                state.cartitems.push({ ...action.payload, quantity: 1 })
                toast.success("Product is added to Cart");
            }
        },
        removeProduct(state, action) {
            state.cartitems = state.cartitems.filter(
              (item) => item.id !== action.payload.id
            );
        },
        increQty(state, action) {
            const increIndex = state.cartitems.findIndex(item => item.id === action.payload.id);
            if (increIndex >= 0) {
                state.cartitems[increIndex].quantity += 1;
            }
        },        
        decreQty(state,action){
            const decIndex = state.cartitems.findIndex(item => item.id === action.payload.id);
            if (decIndex >= 0) {
                if(state.cartitems[decIndex].quantity>1)
                {
                    state.cartitems[decIndex].quantity -= 1;
                }
                else
                {
                    toast.error("Minimum Quantity reached");
                }
            }
        },
        setproductinfo(state, action){
            state.productinfo = action.payload;
        },
        clearproductinfo(state){
            state.productinfo = null;
        },
        addtowishlist(state, action) {
            const wishitemindex = state.wishitems.findIndex(curr => curr.id === action.payload.id)

            if (wishitemindex >= 0) {
                state.wishitems = state.wishitems.filter(item => item.id !== action.payload.id)
                 toast.warning("Product removed from Wishlist");
            } else {
                state.wishitems.push({ ...action.payload, quantity: 1 })
                 toast.success("Product added to Wishlist");
            }
        },
        removefromwishlist(state,action){
            state.wishitems=state.wishitems.filter((item)=>item.id !== action.payload.id)
        },
        setallproducts(state, action){
            state.allproducts = action.payload;
            state.filterproducts = action.payload;
        },
        filterbycategory: (state, action) => {
            if (action.payload === "all") {
                state.filterproducts = [];
            } else {
                state.filterproducts = state.allproducts.filter(
                item => item.category === action.payload
                );
            }
        },

    }
})

export const {addTocart,
            removeProduct,
            increQty,
            decreQty,
            setproductinfo,
            clearproductinfo,
            addtowishlist,
            removefromwishlist,
            setallproducts,
            filterbycategory
}=slice.actions


export const store=configureStore({
    reducer:{
        slice:slice.reducer
    }
})
export default slice.reducer;
   