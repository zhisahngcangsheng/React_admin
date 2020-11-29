import React,{useContext} from 'react';
import {MyState} from "../App";
import {useHistory} from 'react-router-dom';
import asyncComponent from "./asyncComponent";
import {Button} from 'antd'


import "antd/dist/antd.css";



export default function Text () {
    const history = useHistory();
    let {dispatch} = useContext(MyState);
    return(
        <Button type='primary' onClick={()=>{
            sessionStorage.setItem("Token","1");
            const data = [
                {
                    pathName: "/home",
                    path: "/home/home",
                    math: {
                        value: "我是首页"
                    }
                }
            ];
            const RouterList = data.map(i => {
                i.component = asyncComponent(() => import(`./../pages${i.path}`));
                return i
            })
            dispatch({
                type:'setRouter',
                router:RouterList
            })
            history.push('/home');

        }}>跳转</Button>
    )
}
