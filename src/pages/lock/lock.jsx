import React, {useContext,useEffect} from 'react';
import {Button, Form, Input} from "antd";
import {LockOutlined} from "@ant-design/icons";
import {MyState} from "../../reducer";
import {removeCookie} from "../../util/cookie";
import {useTranslation} from "react-i18next";
import {useHistory} from "react-router-dom";
export default function Lock () {
    const history = useHistory();
    const {state,dispatch} = useContext(MyState);
    const { t } = useTranslation();
    useEffect(()=>{
        if(!state.lock){
            sessionStorage.clear();
            removeCookie('Token');
            history.push('/login')
        }
    },[])
    function onFinish(e){
        if(e.password === state.lock){
            dispatch({
                type:'setLock',
                lock:false
            })
            history.goBack(1);
        }
    }
    return(
        <>
            <Form
                name="normal_login"
                className="login-form"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
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
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        {t('determine')}
                    </Button>
                </Form.Item>
            </Form>
        </>
    )

}
