// File: SchoolProject.ts

import { createApp } from 'vue';

const app = createApp({
  render: h => h(App),
});

app.mount('#app');

console.log('Vue is successfully mounted!');
