import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AComponent from '../components/AComponent.vue'
import BComponent from '../components/BComponent.vue'
import CComponent from '../components/CComponent.vue'

const router = new VueRouter({
    mode: 'abstract', 
    routes: [
        {
            path: '/a',
            component: AComponent
        },
        {
            path: '/b',
            component: BComponent
        },
        {
            path: '/c',
            component: CComponent
        },
    ]
})

export default router