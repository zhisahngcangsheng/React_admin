import React,{useState} from 'react';
import {Layout} from 'antd';
import Menu from './menu';
import Logo from './logo';
import HeaderUser from "./headerUser";
import style from './css/index.less';
import { Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons';
export default function LayoutContainer (Component) {
    let [collapsed,setCollapsed] = useState(false)
    const { Header,Sider, Content } = Layout;
    return (
            <Layout className={style.container} >
                <Sider
                    className={style.sider}
                    collapsed={collapsed}
                    collapsedWidth={80}
                    width={250}
                >
                    <Logo collapsed={collapsed}/>
                    <Menu/>
                </Sider>
                <Layout>
                    <Header className={style.header}>
                        <Button  type="primary" onClick={()=> setCollapsed(!collapsed)} >
                            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                        </Button>&nbsp;
                        <HeaderUser />
                    </Header>

                    <Content className={style.content}>

                        {Component.children}
                    </Content>
                </Layout>
            </Layout>

    )
}
