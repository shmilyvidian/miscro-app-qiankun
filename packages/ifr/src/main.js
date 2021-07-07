import { 
  registerMicroApps, 
  start, 
  loadMicroApp,
  addGlobalUncaughtErrorHandler
} from 'qiankun';

class GodSDK {
  constructor(options) {
    this.register(options)
    //捕获错误
    addGlobalUncaughtErrorHandler(event=>{
      console.error(event.error)
    })
  }

  // 注册app
  register(micros, options, callback = {}){
    if(!micros || micros.length === 0){
      micros = [
        {
          name: 'vue app', // app name registered
          entry: '//localhost:9000',
          container: '#microApp',
          activeRule: '/sub_vue',
          props: options
        }
      ]
    }
    registerMicroApps(micros, {
      beforeLoad: app => {
        if(!callback['beforeLoad'] || typeof callback['beforeLoad'] !== 'function') return
        callback['beforeLoad'].call(app)
      },
      beforeMount: app => {
        if(!callback['beforeMount'] || typeof callback['beforeMount'] !== 'function') return
        callback['beforeMount'].call(app)
      },
      afterMount: app => {
        if(!callback['afterMount'] || typeof callback['afterMount'] !== 'function') return
        callback['afterMount'].call(app)
      },
      afterUnmount: app => {
        if(!callback['afterUnmount'] || typeof callback['afterUnmount'] !== 'function') return
        callback['afterUnmount'].call(app)
      }
    })
  }

  //应用启动
  init(){
    console.log('init');
    start()
  }

  //手动启动
  loadApp(app, configuration = {}){
    if(!app) return
    loadMicroApp(app, configuration)
  }
}
export default GodSDK

