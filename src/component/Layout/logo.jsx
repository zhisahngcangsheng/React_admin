import React from 'react';
import style from './css/logo.less';
export default function Logo (e) {
    return(
        <div  className={style.container}>
            <img src={require('./img/logo.png').default} alt='' />
            {e.collapsed?null:<span>管理系统</span>}
        </div>
    )

}
