import { initMixin } from './初始化'
import { stateMixin } from './状态'
import { renderMixin } from './渲染'
import { eventsMixin } from './事件'
import { lifecycleMixin } from './生命周期'
import { warn } from '../util/index'

function Vue (选项) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue是构造器, 需要`new`调用')
  }
  this._init(选项)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
