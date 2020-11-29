import React, { useEffect,useState} from 'react';
import {dateFormat} from './../../util/date'
import style from './css/index.less'
import {Avatar,Menu, Dropdown} from 'antd';
import {useTranslation,} from 'react-i18next'
import User from './user.jsx'
import { DownOutlined } from '@ant-design/icons';
export default function Login() {
    const {i18n} = useTranslation();
    let [date,setDate] = useState('0000-00-00 00:00:00')
    useEffect(()=>{
       const time = setInterval(()=>{
            setDate(dateFormat(new Date()));
        },1000);
        return function (){
            clearInterval(time)
        }
    },[]);
    const menu =()=>{
        return (
            <Menu>
                <Menu.Item key="0">
                    <p  onClick={()=> {i18n.changeLanguage('zh')}}>
                        中文
                    </p>
                </Menu.Item>
                <Menu.Item key="1">
                    <p  onClick={()=> {i18n.changeLanguage('en')}}>
                        English
                    </p>
                </Menu.Item>
            </Menu>
        );
    }
    return (
        <>
            <div className={style.loginContainer}>
                <div className={style.container}>
                    <Avatar className={style.photo} size={90} src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'/>
                    <User/>
                    <p>{date}</p>
                    <Dropdown overlay={menu}>
                        <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                            {i18n.language === 'zh' ? '中文' : 'English'} <DownOutlined />
                        </span>
                    </Dropdown>
                </div>
                <p className={style.containers}/>

            </div>
        </>
    )
}

















