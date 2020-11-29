import React,{useContext} from 'react';
import { Menu } from 'antd';
import * as Icon from '@ant-design/icons';
import {MyState} from './../../reducer';
import {useHistory,useRouteMatch} from 'react-router-dom';

// 1、useHistory 跳转
// 2、useLocation 路由信息
// 3、useParams 参数
// 4、useRouteMatch 路由路径信息
export default function MenuList () {
    const { SubMenu } = Menu;
    const {state} = useContext(MyState);
    const history = useHistory();
    const historyList = useRouteMatch();
    let defaultKey = ['/home/:name','list0']
    if(sessionStorage.getItem('routerActive')){
        defaultKey = JSON.parse(sessionStorage.getItem('routerActive'))
    }
    function handleClick(e) {
        if(e.key === historyList.path) return;
        sessionStorage.setItem('routerActive',JSON.stringify(e.keyPath))
        history.push(e.key)
    }
    return(
        <Menu
            onClick={handleClick}
            defaultSelectedKeys={[defaultKey[0]]}
            defaultOpenKeys={[defaultKey[1]]}
            mode="inline"
            theme="dark"
        >
            {
                state.routerList.map((i,index) =>{
                    let Btn = Icon[i.icon];
                    return (
                        <SubMenu key={`list${index}`} icon={<Btn/>} title={i.title}>
                            {i.children.map(item=>{
                                return (
                                    <Menu.Item key={item.pathName}>{item.math.value}</Menu.Item>
                                )
                            })}
                        </SubMenu>
                    )
                })
            }
        </Menu>
    )


}
