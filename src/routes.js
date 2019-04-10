import loadable from '@loadable/component'

/**
 * 路由配置
 */
const routes = [
    {
        path: '/',
        exact: true,
        component: loadable(() => import('./view/home/layout'), {
            fallback: 'Loading',
        }),
    },
    {
        component: loadable(() => import('./view/home/layout'), {
            fallback: 'Loading',
        }),
        routes: [
            {
                path: '/home/resume',
                component: loadable(() => import('./view/home/resume')),
            },
            {
                path: '/home/resume/discribtion',
                component: loadable(() => import('./view/home/discribtion')),
            },
            {
                path: '/home/discribtion',
                component: loadable(() => import('./view/home/discribtion')),
            },
        ]
    },

    {
        path: '/project',
        component: loadable(() => import('./view/project/layout'))
    },
    {
        component: loadable(() => import('./view/common/notFound'))
    }
]

export default routes;
