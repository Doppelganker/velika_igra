<template>
  <div class="hello">
    <h1 v-if="check">{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return {
      check: true
    }
  }
}
</script>
