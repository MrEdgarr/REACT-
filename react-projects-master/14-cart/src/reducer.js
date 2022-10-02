const reducer = (state, action) => {
    if (action.type === 'CLEAR_CART') {
        return { ...state, cart: [] }
    }


    if (action.type === 'REMOVE') {
        return {
            ...state,
            cart: state.cart.filter((cartItem) => cartItem.id !== action.payload)
        }
    }

    //  Cach 1

    // if (action.type === 'INCREASE') {
    //     let tempCart = state.cart.map((cartItem) => {
    //         if (cartItem.id === action.payload) {
    //             return { ...cartItem, amount: cartItem.amount + 1 }
    //         }
    //         return cartItem;
    //     });
    //     return {
    //         ...state, cart: tempCart
    //     }
    // }
    // if (action.type === 'DECREASE') {
    //     let tempCart = state.cart.map((cartItem) => {
    //         if (cartItem.id === action.payload) {
    //             return { ...cartItem, amount: cartItem.amount - 1 }
    //         }
    //         return cartItem;
    //     }).filter((cartItem) => cartItem.amount !== 0)//Xoa phan thu bang 0
    //     return {
    //         ...state, cart: tempCart
    //     }
    // }

    if (action.type === 'GET_TOTALS') {

        let { total, amount } = state.cart.reduce(
            (cartTotal, cartItem) => {
                const { price, amount } = cartItem
                const itemTotal = price * amount; //Tổng tiền
                cartTotal.total += itemTotal; //Tính tổng sản phẩm

                //Số lượng sản phẩm trong giỏ hàng
                cartTotal.amount += amount;

                return cartTotal  // Trả về total, amount
            }, {
            total: 0,
            amount: 0,
        })

        // console.log(total + ' ' + amount);

        total = parseFloat(total.toFixed(2));


        return { ...state, total, amount }
    }

    if (action.type === 'LOADING') {
        return { ...state, loading: true }
    }
    if (action.type === 'DISPLAY_ITEMS') {
        return { ...state, cart: action.payload, loading: false }
    }


    ///  CACH 2
    if (action.type === 'TOGGLE_AMOUNT') {
        let tempCart = state.cart.map((cartItem) => {
            if (cartItem.id === action.payload.id) {
                if (action.payload.type === 'inc') {
                    return { ...cartItem, amount: cartItem.amount + 1 }
                }
                if (action.payload.type === 'dec') {
                    return { ...cartItem, amount: cartItem.amount - 1 }
                }
            }
            return cartItem
        }).filter((cartItem) => cartItem.amount !== 0)

        return { ...state, cart: tempCart }
    }
    throw new Error('no matching action type')
}

export default reducer