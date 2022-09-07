// Node.js Stream(流)
const fs = require('fs')

const path = require('path')
// node.js 用于连接路径。该方法的主要用途在于，会正确使用当前系统的路径分隔符，Unix系统是"/"，Windows系统是"\"。
const join = path.join

// 写一个把目标路径按当前文件路径转成绝对路径的方法
const resolve = (dir) => path.join(__dirname, '../', dir)

/**
 * @desc 大写转横杠
 * @param {*} str
 */
function upperCasetoLine(str) {
  let temp = str.replace(/[A-Z]/g, function (match) {
    return '-' + match.toLowerCase()
  })
  if (temp.slice(0, 1) === '-') {
    temp = temp.slice(1)
  }
  temp = temp.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
  return temp
}
// 将文字首字母变成大写的 例如：button -- Button,checkbox-group --- CheckboxGroup
function upperCaseFileName(str) {
  const temp = str.split('-')
  let fileName = ''
  if (temp.length > 1) {
    fileName = temp[0].slice(0, 1).toUpperCase() + temp[0].slice(1).toLowerCase() +
      temp[1].slice(0, 1).toUpperCase() + temp[1].slice(1).toLowerCase()
  } else {
    fileName = temp[0].slice(0, 1).toUpperCase() + temp[0].slice(1).toLowerCase()
  }

  return fileName
}

module.exports = {
  resolve,
  upperCasetoLine,
  /**
   * @desc 获取组件入口
   * @param {*} path
   */
  getComponentEntries (path) {
    // resolve() 返回绝对路径
    // fs.readdirSync(resolve(path))获取到组件代码所在的文件夹目录下所有文件名称，存在files变量中。
    // 读取文件内容的函数fs.readFileSync()是同步的 同步 readdir().返回文件数组列表。
    const files = fs.readdirSync(resolve(path))
    // files = ['button','checkbox',...,'index.js']

    const componentEntries = files.reduce((fileObj, item) => {
      //  文件路径  path = packages   item = button
      const itemPath = join(path, item)
      // itemPath = packages/button
      console.log(itemPath)
      //  在文件夹中 fs.statSync 同步 stat(). 返回 fs.Stats 的实例。
      const isDir = fs.statSync(itemPath).isDirectory()
      const [name, suffix] = item.split('.')

      //  文件中的入口文件
      if (isDir) {
        // 如果是字体
        if (name === 'fonts') {
          fileObj[name] = resolve(join(itemPath, 'iconfont.css'))
        } else {
          fileObj[`${upperCaseFileName(item)}`] = resolve(join(itemPath, 'index.js'))
        }
      } else if (suffix === 'js') { //  文件夹外的入口文件
        // babel-plugin-component,全部导入时，默认会找到./node_modules/one-ui-element/lib/style.css ./node_modules/one-ui-element/lib/index.css
        //
        const path = '.'
        fileObj[path] = resolve(`${itemPath}`)
      }
      return fileObj
    }, {})

    return componentEntries
  }
}
