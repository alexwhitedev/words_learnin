import { createLocalVue, mount } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/views/Home.vue'
import store from '@/store'


describe('Home.vue', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  it('should have correct title', () => {
    const wrapper = mount(Home, {
      store,
      localVue
    })
    console.log(wrapper.html())
    expect(wrapper.element.textContent).toBe('Home Page')
  })
})
