<template>
  <div class="flex justify-center">
    <h1 class="font-bold text-6xl mt-40">Čestitke {{name}}</h1>
    <Firework :boxHeight="'100%'" :boxWidth="'100%'" />
  </div>
</template>

<script>
import Firework from '../components/Firework.vue'

export default {
  components: {
    Firework
  },
  computed: {
    name() {
      return this.$store.state.name
    }
  }
}
</script>
