const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting () {
    return this.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Your project name',
        default: this.appname
      }
    ])
    .then(answers => {
      this.answers = answers
    })
  }

  writing () {
    // 把每一个文件都通过模版转换到目标目录
    const templates = [
      'index.html',
      'package.json',
      'public/favicon.ico',
      'src/main.js',
      'src/index.css',
      'src/App.vue',
      'src/assets/logo.png',
      'src/components/HelloWorld.vue'
    ]

    templates.forEach(item => {
      // item => 每个文件路径
      this.fs.copyTpl(
        this.templatePath(item),
        this.destinationPath(item),
        this.answers
      )
    })
  }
}