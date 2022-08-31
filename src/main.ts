import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import 'element-plus/dist/index.css'
import { ElButton } from '/lib/element-plus'


createApp(App)
.use(ElButton)
.mount('#app')
