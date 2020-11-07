const initialState = {
    socket:null,
}

export const socketReducer =(state = initialState, action)=>{
    switch (action.type) {
        case "SOCKET":
            return {
                ...state,
                socket:action.payload.socket,
            }
            break;
    
        default:
            return state
            break;
    }
}