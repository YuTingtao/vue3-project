// 用户菜单，模拟后端返回
export default [
  {
    path: '/useCase',
    name: 'useCase',
    redirect: '',
    title: '组件案例',
    icon: 'document',
    hidden: 0,
    children: [
      {
        path: '/svgIcon',
        name: 'svgIcon',
        redirect: '',
        title: 'svg图标',
        icon: '',
        hidden: 0
      },
      {
        path: '/wangEditor',
        name: 'wangEditor',
        redirect: '',
        title: '富文本编辑器',
        icon: '',
        hidden: 0
      }
    ]
  }
]
