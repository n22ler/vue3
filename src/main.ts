import { createApp } from 'vue'
import App from './App.vue'
import UI from "@/components/UI";
import Elements from "@/components/Elements";
import router from './router'
import store from './store'


const app = createApp(App)//создали приложение

UI.forEach(component=>{ //зарегистрировали UI
    app.component(component.name, component)
})

Elements.forEach(component=>{ //зарегистрировали Элементы
    app.component(component.name, component)
})


app.use(store).use(router).mount('#app')
