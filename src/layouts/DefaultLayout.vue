<template>
  <div>
    <a href="/#/home/homepage" class="btn btn-primary">Home</a>
    <a href="/#/home/about" class="btn btn-primary">About</a>
  </div>
  <RouterView></RouterView>
</template>

<script lang="js">
import { RouterView } from 'vue-router';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'default layout',
  components: {
    RouterView,
  },
  setup() {
  },
})

</script>
