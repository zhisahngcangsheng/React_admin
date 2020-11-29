import React, { useContext} from "react"
import {HashRouter, Switch, Route, Redirect, Prompt} from "react-router-dom";
import Lock from './../pages/lock/lock'
import {getCookie} from './../util/cookie'
import {MyState} from "../reducer";
import Layout from './../component/Layout'
import Login from "./../pages/login/index"
export default function RouteConfig() {
    let {state} = useContext(MyState);
    console.log(state.lock);
    return (
        <HashRouter>
            <Switch>
                <Route path="/lock" component={Lock}/>
                {/*{state.lock ? <Redirect to='/lock' from='*'/>:''}*/}
                {state.length > 0 ?<Redirect to='/home/1' from='login'/>:''}
                <Route path="/login" exact={true} component={Login}></Route>
                {state.router.map(item => {
                    return <Route key={item.pathName} path={item.pathName} render={props => {

                        return getCookie("Token") ?
                            <Layout>
                                <Prompt message={(e)=>{
                                    if(e.pathname === '/login' && sessionStorage.getItem('router')){

                                    }
                                }}/>
                                <item.component {...props}>

                                </item.component>
                            </Layout>
                            :
                            <Redirect to='/app'/>
                    }}/>
                })}
                <Route path="/404" render={() => <span>你访问的页面丢失了</span>}/>


                {/*<Redirect to='/404' from='*' />*/}

                <Redirect to='/login' from='*'/>

            </Switch>
        </HashRouter>
    )
}

