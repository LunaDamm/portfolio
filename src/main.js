import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {
  faCamera,
  faFolder,
  faHouse,
  faMusic,
  faSheetPlastic,
} from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faMusic)
library.add(faCamera)
library.add(faSheetPlastic)
library.add(faFolder)
library.add(faAddressCard)
library.add(faHouse)

const app = createApp(App)

/* add font awesome icon component */
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)

app.mount('#app')
