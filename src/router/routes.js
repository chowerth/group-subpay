const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Index.vue") },
      {
        path: "/groupsubpay",
        component: () => import("pages/GroupSubpay.vue"),
      },
      {
        path: "/timeline",
        component: () => import("pages/Timeline.vue"),
      },
      {
        path: "/affirmations",
        component: () => import("pages/Affirmations.vue"),
      },
      {
        path: "/filesandtables",
        component: () => import("pages/FilesAndTables.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
