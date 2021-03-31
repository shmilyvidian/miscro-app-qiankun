import { initGlobalState } from 'qiankun'
import Vue from 'vue'

// 父应用的初始state
// Vue.observable是为了让initialState变成可响应：https://cn.vuejs.org/v2/api/#Vue-observable。
const initialState = Vue.observable({
  app: {
    name: 'main'
  }
})

const actions = initGlobalState(initialState)

actions.onGlobalStateChange((newState, prev) => {
  // state: 变更后的状态; prev 变更前的状态

  for (const key in newState) {
    initialState[key] = newState[key]
  }
  console.log('value is changed', newState);
})

// 定义一个获取state的方法下发到子应用
actions.getGlobalState = (key) => {

  return key ? initialState[key] : initialState
}

export default actions
