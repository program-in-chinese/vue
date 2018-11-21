import { initMixin } from './初始化'
import { stateMixin } from './状态'
import { renderMixin } from './渲染'
import { eventsMixin } from './事件'
import { lifecycleMixin } from './生命周期'
import { warn } from '../util/index'

function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

initMixin(Vue)
stateMixin(Vue)
eventsMixin(Vue)
lifecycleMixin(Vue)
renderMixin(Vue)

export default Vue
