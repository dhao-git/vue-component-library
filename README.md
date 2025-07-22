# Vue Component Library

## Installation

```bash
npm install dhao-vue-library
```

## Usage

### Global Registration

```javascript
import { createApp } from 'vue';
import App from './App.vue';
import VueComponentLibrary from 'dhao-vue-library';

const app = createApp(App);
app.use(VueComponentLibrary);
app.mount('#app');
```

### Individual Component

```vue
<template>
  <VButton variant="primary" @click="handleClick">Click Me</VButton>
</template>

<script>
import { VButton } from 'dhao-vue-library';

export default {
  components: { VButton },
  methods: {
    handleClick() {
      console.log('Button clicked!');
    }
  }
};
</script>
```

## Development

```bash
# Run storybook for development
npm run storybook

# Build library
npm run build

# Run tests
npm test
```