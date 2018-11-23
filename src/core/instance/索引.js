import { 混入初始化 } from './初始化'
import { 混入状态 } from './状态'
import { 混入渲染 } from './渲染'
import { 混入事件 } from './事件'
import { 混入生命周期 } from './生命周期'
import { warn } from '../util/索引'

function Vue (选项) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue是构造器, 需要`new`调用')
  }
  this._init(选项)
}

混入初始化(Vue)
混入状态(Vue)
混入事件(Vue)
混入生命周期(Vue)
混入渲染(Vue)

export default Vue
