import Vue from 'vue'

describe('Initialization', () => {
  it('without new', () => {
    try { Vue() } catch (e) {}
    expect('Vue是构造器, 需要`new`调用').toHaveBeenWarned()
  })

  it('with new', () => {
    expect(new Vue() instanceof Vue).toBe(true)
  })
})
