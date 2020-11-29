import cookies from 'react-cookies'

export const setCookie = (key,value)=>{
    cookies.save(key,value)
}

export const getCookie = (key)=>{
    return cookies.load(key)
}

export const removeCookie = (key)=>{
     cookies.remove(key)
}
