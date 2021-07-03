<template>
  <div class="flex flex-col items-center gap-8 px-5">
    <div class="text-3xl font-bold">Naloga 1</div>
    <p class="self-start">Izberite ime za svojo skupino</p>
    <input class="input input-blue" v-model="answer" />
    <button class="btn btn-blue flex-none w-40 self-end" @click="test()">Nadaljuj</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      answer: ''
    }
  },
  methods: {
    test() {
        if(confirm('Je to vaše ime skupine: ' + this.answer)) {
          this.$store.commit('change', this.answer);
          this.$router.push('/2')
        }
    }
  }
}
</script>
