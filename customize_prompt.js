// 配置选项
module.exports = [
    {
      type: "confirm",
      name: "router",
      message: "Install vue-router?",
      when: function (answers) {
        return answers.router
      }
    },
    {
      type: "confirm",
      name: "vux",
      message: "是否使用vux？"
    },{
      type: "checkbox",
      name: "env",
      message: "选择要配置的环境",
      choices: [
        {
          name: 'dev',
          message: '开发环境',
          checked: true
        }, {
          name: 'pro',
          message: '生产环境',
          checked: true
        }, {
          name: 'test',
          message: '测试环境',
          checked: true
        }, {
          name: 'grey',
          message: '灰度环境',
        }, {
          name: 'pre',
          message: '预发布环境'
        }
      ]
    }
  ]