## About Me

> Api:[网易云音乐 NodeJS 版 API](https://binaryify.github.io/NeteaseCloudMusicApi)

## Build Setup

> SunPlayer

```
git clone https://github.com/jianfengtheboy/react-sun-player.git //下载SunPlayer

cd SunPlayer //进入SunPlayer目录

npm install (或者cnpm install) //安装依赖

npm run dev (或者cnpm run dev) //服务端运行

npm run build //项目打包
```

> Tips

```
打开node_modules文件夹，找到react-scripts文件夹内的config文件夹，配置其中webpack.config.dev.js和webpack.config.prod.js文件:

1、const pxVW = require('postcss-px-to-viewport')；

2、function resolve(dir) {
    return path.join(__dirname, '..', dir)
  }

3、module > oneOf > test: /\.(css|scss)$/ > plugins > 添加：
      pxVW({
        viewportWidth: 1080,
        unitPrecision: 5,
        viewportUnit: 'vw',
        selectorBlackList: [],
        minPixelValue: 1,
        mediaQuery: false
      })
      和
      {
        loader: require.resolve('sass-loader') // compiles Less to CSS
      }

具体配置详见screenShoot文件夹图片
```

> 后台服务器

```
cd SunPlayer/server //进入后台服务器目录

npm install (或者cnpm install) //安装依赖

node app.js //服务端运行 访问 http://localhost:3000/
```

## Skills

- React（核心框架）
- React-Router（页面路由）
- Redux（状态管理）
- React-Redux
- Redux-Thunk
- ES 6 / 7（JavaScript 语言的下一代标准）
- Sass（CSS预处理器）
- Axios（网络请求）
- ClassNames（处理动态 clss ）
- [Better-Scroll](https://ustbhuangyi.github.io/better-scroll/#/zh)（一款重点解决移动端各种滚动场景需求的插件）
- FastClick（解决移动端300ms点击延迟）

## Project Files

```
├── public                                          // 项目启动页面
├── server                                          // 后台服务器目录
├── src                                             // 项目源码目录
│   ├── api                                         // 数据交互
│   │   └── index.js
│   ├── assets                                      // 静态资源目录
│   │   ├── css                                     // 样式表目录
│   │   │   ├── index.scss                          // 基础样式
│   │   │   ├── mixin.scss                          // 基础样式宏
│   │   │   ├── playCount.scss                      // 播放数量样式宏
│   │   │   ├── reset.css                           // 基础重置
│   │   │   └── base.scss                           // 基本变量
│   │   └── img                                     // 图片目录
│   ├── base                                        // 公共基础组件目录
│   │   ├── columnList                              // 歌单基础列表组件 —— 列
│   │   │   ├── columnList.js
│   │   │   └── columnList.scss
│   │   ├── drawer                                  // 抽屉组件
│   │   │   ├── drawer.js
│   │   │   └── drawer.scss
│   │   ├── loading                                 // loading 组件
│   │   │   ├── loading.js
│   │   │   └── loading.scss
│   │   ├── notification                            // 通知组件（Toast）
│   │   │   ├── notification.js
│   │   │   └── notification.scss
│   │   ├── progress                                // 进度条拖动组件
│   │   │   ├── progress.js
│   │   │   └── progress.scss
│   │   ├── rowList                                 // 歌单列表基础组件 —— 行
│   │   │   ├── rowList.js
│   │   │   └── rowList.scss
│   │   ├── scroll                                  // 滚动组件
│   │   │   ├── scroll.js
│   │   │   └── scroll.scss
│   │   ├── slide                                   // slide 组件
│   │   │   ├── slide.js
│   │   │   └── slide.scss
│   │   ├── songlist                                // 歌曲列表基础组件
│   │   │    ├── songlist.js
│   │   │    └── songlist.scss
│   │   └── toast                                   // Toast 组件
│   │        ├── toast.js
│   │        └── toast.scss
│   ├── common                                      // 公共 Js 目录
│   │   ├── asyncComponent.js                       // 路由懒加载配置
│   │   ├── config.js                               // 基础配置
│   │   └── util.js                                 // 公用 Js 方法
│   ├── components                                  // 公共项目组件目录
│   │   ├── menu                                    // 菜单组件
│   │   │   ├── menu-item                           // 菜单 Item 组件
│   │   │   │   └── menu-item.js
│   │   │   ├── menu.js
│   │   │   └── menu.scss
│   │   ├── sunHeader                               // 一级导航组件
│   │   │   ├── sunHeader.js
│   │   │   └── sunHeader.scss
│   │   ├── sunNav                                  // 二级导航组件
│   │   │   ├── sunNav.js
│   │   │   └── sunNav.scss
│   │   ├── player                                  // 播放组件
│   │   │   ├── player.js
│   │   │   └── player.scss
│   │   ├── searchList                             // 搜索列表详情组件
│   │        ├── searchList.js
│   │        └── searchList.scss
│   ├── model                                       // 数据模型目录
│   ├── pages                                       // 项目主页面目录
│   │   ├── discover                                // 发现页面
│   │   │   ├── discover.js
│   │   │   └── discover.scss
│   │   ├── playlist                                // 歌单详情页面
│   │   │   ├── playlist.js
│   │   │   └── playlist.scss
│   │   ├── search                                  // 搜索
│   │   │   ├── search.js
│   │   │   └── search.scss
│   │   ├── sheetlist                               // 歌单页面
│   │   │   ├── sheetlist.js
│   │   │   └── sheetlist.scss
│   │   ├── skin                                    // 皮肤切换页面
│   │   │   ├── skin.js
│   │   │   └── skin.scss
│   │   ├── toplist                                 // 排行榜页面
│   │   │   ├── toplist.js
│   │   │   └── toplist.scss
│   │   └── App.js                                  // 根组件
│   ├── store                                       // redux 目录
│   │   ├── actions.js                              // 配置 actions 方法
│   │   ├── actionTypes.js                          // 配置 actions 常量
│   │   ├── index.js                                // 引用 redux
│   │   └── reducers.js                             // 处理数据
│   └── index.js                                    // 入口主文件
```

## Functions

- 播放器
- 正在播放
- 排行榜
- 歌单列表
- 歌单详情
- 搜索（歌曲、歌单）
- 皮肤切换
