import Vue from 'vue'
import Vuex from 'vuex'
import word from './modules/word'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        word,
    }
})