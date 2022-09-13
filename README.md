## 安装
- npm
``` js
npm install one-ui-element -S
```
- yarn
``` js
yarn add one-ui-element -S
```
## 用法

### 全局引入
``` js
import OneUI from 'one-ui-element'
Vue.use(OneUI)
```
### 按需引入
``` js
import { Button } from 'one-ui-element'
// 引入字体
import 'one-ui-element/lib/fonts/style.css'   
Vue.use(Button)
```


### 配置
按需引入的项目需要安装如下任意一个插件，进行配置
- babel-plugin-component
``` js
npm install babel-plugin-component -D
```
- Babel 配置
``` js
plugins: [
    [
      "component",
      {
        libraryName: "one-ui-element",
        // 是否解析名称为破折号模式
        camel2Dash: false,
        // import js and css from 'style.css'
        style: true,
      },
      "one-ui-element",
    ],
  ],
```





## 打包:

命令：

```
 npm run build:pro
```

打包完成后，打开lib目录下的style.css文件，需要更改url()里面的路径格式，然后再执行npm publish

更改前：

```
@font-face{font-family:iconfont;src:url(/resource/75b714b3a6.woff2) format("woff2"),url(/resource/3342e1caaa.woff) format("woff"),url(/resource/ab0cd4b073.ttf) format("truetype")}[class*=vt-icon]{font-family:iconfont!important;
```

更改后：

```
@font-face{font-family:iconfont;src:url(./resource/75b714b3a6.woff2) format("woff2"),url(./resource/3342e1caaa.woff) format("woff"),url(./resource/ab0cd4b073.ttf) format("truetype")}[class*=vt-icon]{font-family:iconfont!important;
```

