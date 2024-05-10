import { createApp } from 'vue'
import App from './App.vue'
import wrappercomponent from './wrappercomponent.vue'
// createApp(App).mount('#app')
createApp(wrappercomponent).mount('#app')