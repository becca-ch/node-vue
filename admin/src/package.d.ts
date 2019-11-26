
// 解析因为引入的包不是ts 写的引起的报错
declare module 'vue-ele-form' {
  export const install: ()=>any  // 想在vue中挂载(Vue.use(EleForm))必须返回一个install 函数
}