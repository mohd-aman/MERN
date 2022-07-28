
let initialState = [
    {
        id:0,
        name:'IPhone',
        img:"https://rukminim1.flixcart.com/image/416/416/k2jbyq80pkrrdj/mobile-refurbished/x/j/s/iphone-11-128-d-mwm02hn-a-apple-0-original-imafkg242ugz8hwc.jpeg?q=70",
        price:40000,
        qty:1,
    },
    {
        id:1,
        name:"Kia car",
        img:"https://imgd.aeplcdn.com/0x0/n/cw/ec/115451/sonet-exterior-left-front-three-quarter.jpeg?isig=0",
        price:1000000,
        qty:1,
    },
    {
        id:2,
        name:"PS 4",
        img:"https://www.reliancedigital.in/medias/Sony-CUH-2208B-Gaming-Console-491898064-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NzQ2MTB8aW1hZ2UvanBlZ3xpbWFnZXMvaGNiL2gxYi85Mzc4MzMyNTQwOTU4LmpwZ3w4NTE2ZjkzYjQ2NWQwMDY0OTgzZjUxMGFiMmQxMWZlY2I0NGQ1ZjA4Y2RjN2ViOTQ1YzliYTIzNWM4Mjc4NWEw",
        price:30000,
        qty:1
    }
]


let reducer = (state=initialState,action)=>{
    switch(action.type){
        case "ADD_TO_CART":
            let cp = state.map((el)=>el);
            let id = action.payload;
            cp[id].qty = cp[id].qty+1;
            return cp;
        case "REMOVE_FROM_CART":
            cp = state.map((el)=>el);
            id = action.payload;
            if(cp[id].qty>0)
                cp[id].qty = cp[id].qty-1;
            return cp;
        default:
            return state;
    }
}

export default reducer;