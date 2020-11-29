import Mock from 'mockjs'
Mock.mock('/login','post',()=>{
    return{
        code:200,
        msg:"登录成功",
        data:{
            token:"userToken",
            router:[{
                title:"菜单标题",
                icon:'BugOutlined',
                children:[
                    {
                        pathName: "/home/:name",
                        path: "home/home",
                        math: {
                            value: "我是首页1"
                        }
                    }
                ]
            },{
                title:"菜单标题",
                icon:'BulbOutlined',
                children:[
                    {
                        pathName: "/home/:name",
                        path: "home/home",
                        math: {
                            value: "我是首页"
                        }
                    }
                ]
            },]
        }
    }
})
