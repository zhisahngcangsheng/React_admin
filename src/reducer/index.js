import React, {useReducer,createContext} from "react";
import asyncComponent from "../component/asyncComponent";
import {reducer} from './reducer'
import {getCookie} from './../util/cookie'
export const MyState = createContext();
const data = {
    router:[],
    routerList:[],
    token:''
}
if(sessionStorage.getItem('router')){
    data.router = JSON.parse(sessionStorage.getItem('router')).reduce((perv,cur,index)=>{
        if(index === 1){
            perv.children.forEach(i => {
                i.component = asyncComponent(()=>import(`@/pages/${i.path}`));
            })
        }
        cur.children.forEach(i => {
            i.component = asyncComponent(()=>import(`@/pages/${i.path}`));

        })
        return perv.children.concat(cur.children);
    })
    data.token = getCookie('token');
    data.routerList = JSON.parse(sessionStorage.getItem('router'));
}
export default function App(props) {

    let [state,dispatch] = useReducer(reducer,data)

    return(
        <MyState.Provider value={{state,dispatch}}>
            {props.children}
        </MyState.Provider>

    )
}
