import React, {useContext, useState} from 'react';
import {useHistory} from 'react-router-dom'
import style from './css/user.less';
import {LockOutlined,} from '@ant-design/icons';
import {Button, Popover, Modal, Form, Input} from "antd";
import {useTranslation} from "react-i18next";
import {MyState} from "../../reducer";


export default function HeaderUser() {
    const [lock, setlock] = useState(false);
    const history = useHistory();
    const { t } = useTranslation();
    const {dispatch} = useContext(MyState)
    function onFinish(e){
        dispatch({
            type:'setLock',
            lock:e.password
        })
        history.push('/lock')
    }
    return (<>
        <div className={style.container}>
            <Popover placement="top" content='锁屏'>
                <Button shape="circle" onClick={() => setlock(true)}
                        icon={<LockOutlined style={{display: 'inline'}}/>}/>
            </Popover>

        </div>
        <Modal
            title="锁屏"
            visible={lock}
            footer={null}
            onCancel={()=>setlock(false)}
        >
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
        </Modal>
    </>)
}

