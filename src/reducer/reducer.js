const initialState = {
    user:null,
    loading:true
}

export const userReducer =(state = initialState, action)=>{
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                user:action.payload.user,
                loading:action.payload.loading
            }
            break;
    
        default:
            return state
            break;
    }
}