
export const reducer = (state,action)=>{
    switch (action.type){
        case "setRouter":
            return{
                ...state,
                router:action.router,
            }
        case "setRouterList":
            return{
                ...state,
                routerList:action.routerList,
            }
        case "setLock":
            return{
                ...state,
                lock:action.lock,
            }
        default:
            return state
    }
}
