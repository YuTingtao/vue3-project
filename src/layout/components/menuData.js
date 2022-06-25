export default [
    {
        id: 1,
        title: '素材库',
        path: '',
        name: 'res',
        redirect: '/res-list',
        icon: 'document',
        hidden: 0,
        children: [
            {
                id: 2,
                title: '素材列表',
                path: '/res-list',
                name: 'resList',
                redirect: '',
                hidden: 0,
                children: []
            },
            {
                id: 3,
                title: '素材上传',
                path: '/res-upload',
                name: 'resUpload',
                redirect: '',
                hidden: 0,
                children: []
            }
        ]
    },
    {
        id: 4,
        title: '课程库',
        path: '',
        name: 'course',
        redirect: '/course-list',
        icon: 'box',
        hidden: 0,
        children: [
            {
                id: 5,
                title: '课程列表',
                path: '/course-list',
                name: 'courseList',
                redirect: '',
                hidden: 1,
                children: []
            }
        ]
    }
]
