import requset from './../index'

export const login = (data)=>{
    return requset({
        url:'/login',
        method:'post',
        data,
    })
}
