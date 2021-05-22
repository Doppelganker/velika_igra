<template>
  <div>
    Čestitke {{ name }}
  </div>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$store.state.name
    }
  }
}
</script>
