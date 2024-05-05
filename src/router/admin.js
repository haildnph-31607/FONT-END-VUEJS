const admin =[
    {
        path:"/admin",
        component:()=>import("../layouts/admin.vue"),
        children:[
            {
             path:"users",
             name:"admin.users",
             component:()=>import("../pages/admin/users/index.vue")
            },
            {
                path:"roles",
                name:"admin.roles",
                component:()=>import("../pages/admin/roles/index.vue")
               },
               {
                path:"setting",
                name:"admin.setting",
                component:()=>import("../pages/admin/setting/index.vue")
               }
        ]

     }

]
export default admin;