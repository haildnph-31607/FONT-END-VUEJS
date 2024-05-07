const admin = [
  {
    path: "/admin",
    component: () => import("../layouts/admin.vue"),
    children: [
      {
        path: "users",
        name: "admin.users",
        component: () => import("../pages/admin/users/index.vue"),
        
      },
      {
        path: "users/create",
        name: "admin.users.create",
        component: () => import("../pages/admin/users/create.vue"),
      },
      {
        path: "roles",
        name: "admin.roles",
        component: () => import("../pages/admin/roles/index.vue"),
      },
      {
        path: "setting",
        name: "admin.setting",
        component: () => import("../pages/admin/setting/index.vue"),
      },
    ],
  },
];
export default admin;
