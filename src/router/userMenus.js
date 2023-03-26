// 用户菜单，模拟后端返回
export default [
  {
    path: '/useCase',
    name: 'useCase',
    redirect: '',
    title: '组件案例',
    icon: 'document',
    hidden: 0,
    buttons: [], // 按钮权限
    children: [
      {
        path: '/svgIcon',
        name: 'svgIcon',
        redirect: '',
        title: 'svg图标',
        icon: '',
        hidden: 0,
        buttons: ['新增', '编辑', '删除'], // 按钮权限
      },
      {
        path: '/wangEditor',
        name: 'wangEditor',
        redirect: '',
        title: '富文本编辑器',
        icon: '',
        hidden: 0,
        buttons: ['新增', '编辑', '删除'], // 按钮权限
      }
    ]
  }
]
