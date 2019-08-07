// 配置选项
module.exports = [
  {
    type: "confirm",
    name: "router",
    message: "是否安装vue-router"
  },
  {
    type: "confirm",
    name: "flexible",
    message: "是否使用移动端适配？",
    when: function (answers) {
      return answers.mobile
    }
  },
]