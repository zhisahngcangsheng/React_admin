import React, {useContext} from 'react';
import style from "./css/user.less";
import {Button, Form, Input} from "antd";
import {LockOutlined, UserOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";

import {useHistory} from 'react-router-dom';
import {setCookie} from "../../util/cookie";
import {login} from './../../api/login';
import asyncComponent from "../../component/asyncComponent";
import {MyState} from "../../reducer";
export default function User() {
    const {dispatch} = useContext(MyState);
    const { t } = useTranslation();
    const history = useHistory();
    function onFinish(e){
        login({}).then(res =>{
            /*
            * 根据接口信息返回配置动态路由
            * 将用户信息和路由信息储存到sessionStorage里
            * 登录按钮函数
            * */
            if(res.data.code === 200){
                let router = res.data.data.router.reduce((perv,cur,index)=>{
                    if(index === 1){
                        perv.children.forEach(i => {
                            i.component = asyncComponent(()=>import(`@/pages/${i.path}`));
                        })
                    }
                    cur.children.forEach(i => {
                        i.component = asyncComponent(()=>import(`@/pages/${i.path}`));

                    })
                    return perv.children.concat(cur.children)
                })
                dispatch({
                    type:'setRouter',
                    router,
                });
                dispatch({
                    type:'setRouterList',
                    routerList:res.data.data.router,
                });
                sessionStorage.setItem('router',JSON.stringify(res.data.data.router));
                setCookie('Token',res.data.data.token)
                history.replace('/home/1');
            }
        })
    }
    return(
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: t('user')}]}
                >
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder={t('user')} />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: t('password') }]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder={t('password')}
                    />
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit" className={style.loginSub}>
                        {t('login')}
                    </Button>
                </Form.Item>
            </Form>

    )

}


