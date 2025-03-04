import Mock, { Random } from 'mockjs'

export default function() {
  Mock.mock('/api/getList', 'post', req => {
    const body = JSON.parse(req.body)
    const list = []
    for (let i = 0; i < (body.pageSize || 10); i++) {
      list.push(Mock.mock({
        'name': '@cname',
        'age|20-40': 20,
        'sex|0-1': 0,
        'email': '@email',
        'city': '@city'
      }))
    }
    return {
      code: '200',
      msg: '成功',
      data: {
        list: list,
        total: 100
      }
    }
  })
}