const defaultLayout = () => import('layouts/DefaultLayout.vue')
const dashboardPage = () => import('pages/Index.vue')

const routes = [
  {
    path: '/',
    component: defaultLayout,
    children: [
      { path: '', component: dashboardPage, meta: { title: 'dashboard' } }
    ]
  }
]

export const dynamicRoutes = [
  {
    path: '/dashboard',
    component: defaultLayout,
    children: [
      { path: '/dashboard', component: dashboardPage, meta: { title: 'dashboard' } }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
