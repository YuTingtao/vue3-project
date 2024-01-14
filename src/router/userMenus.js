// 用户菜单，模拟接口返回
export default [
  {
    path: '',
    name: '',
    title: '使用案例',
    icon: 'document',
    hidden: 0,
    buttons: [], // 按钮权限
    children: [
      {
        path: '/useCase/baseCase',
        name: 'baseCase',
        title: '基础案例',
        icon: '',
        hidden: 0,
        buttons: [ // 按钮权限
          { name: 'add', title: '新增' },
          { name: 'edit', title: '编辑' },
          { name: 'delete', title: '删除' }
        ]
      },
      {
        path: '/useCase/wangEditor',
        name: 'wangEditor',
        title: '富文本编辑',
        icon: '',
        hidden: 0,
        buttons: [ // 按钮权限
          { name: 'add', title: '新增' },
          { name: 'edit', title: '编辑' },
          { name: 'delete', title: '删除' }
        ]
      }
    ]
  }
]
