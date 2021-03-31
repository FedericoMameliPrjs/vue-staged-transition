# vue-staged-transition
Simple Vue Component to perform stage delayed transitions.

## Usage
```vue
<template>
  <vue-staged-transition :styles="transitionStyles" appear mode="out-in" :delay="500">
    <template v-for="product in products">
      <product-card :product="product" :key="product.slug">
    </template>
  </vue-staged-transition>
</template>

<script>
import VueStagedTransition from 'vue-staged-transition'

export default {
  components: { VueStagedTransition },
  data(){
    return{
      transitionStyles: [
        {
          opacity: 0
        },

        {
          opacity: 1
        }
      ]
    }
  }
}
</script>

```
