import type { RouteRecordRaw } from 'vue-router';

// 使用案例
const example: RouteRecordRaw[] = [
  {
    path: '/example',
    meta: {
      title: '使用案例', // 标题
      icon: 'document' // 图标
    },
    children: [
      // 公共组件
      {
        path: '/example/base-component',
        component: () => import('@/views/example/BaseComponent.vue'),
        meta: {
          title: '公共组件'
        }
      },
      // 自定义指令
      {
        path: '/example/custom-directive',
        component: () => import('@/views/example/CustomDirective.vue'),
        meta: {
          title: '自定义指令'
        }
      },
      // 按钮权限
      {
        path: '/example/button-permission',
        component: () => import('@/views/example/ButtonPermission.vue'),
        meta: {
          title: '按钮权限',
          buttons: [
            { name: 'add', title: '新增' },
            { name: 'edit', title: '编辑' },
            { name: 'delete', title: '删除' }
          ]
        }
      },
      // 大文件上传
      {
        path: '/example/large-file-upload',
        component: () => import('@/views/example/LargeFileUpload.vue'),
        meta: {
          title: '大文件上传'
        }
      }
    ]
  }
];

export default example;
