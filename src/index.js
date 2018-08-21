import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './pages/App'
import store from './store'

import "./assets/css/index.scss"
//import registerServiceWorker from './registerServiceWorker';

/*if(document.querySelector("#appQd")){
    setTimeout(()=>{
        document.body.removeChild(document.querySelector("#appQd"))
    },2000);
}*/

//版权信息
const pkg = require('../package.json');
window.SunPlayer = window.SunPlayer = `欢迎使用 Sun听英语!
当前版本为：V${pkg.version}
作者：Sun
歌曲来源于网易云音乐 (http://music.163.com)`
console.info(`%c${window.SunPlayer}`, `color:#198cff`);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
//registerServiceWorker();
