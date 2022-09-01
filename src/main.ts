import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'
import 'element-plus/dist/index.css'
import { ElTableV2 } from '/lib/element-plus'


createApp(App)
.use(ElTableV2)
.mount('#app')
