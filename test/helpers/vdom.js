import VNode from 'core/vdom/虚拟节点'

window.createTextVNode = function (text) {
  return new VNode(undefined, undefined, undefined, text)
}
