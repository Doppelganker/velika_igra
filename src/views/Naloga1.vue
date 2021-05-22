<template>
  <div class="flex flex-col">
    <div class="font-bold">Naloga 1</div>
    <p class="self-center">Izberite ime za svojo skupino</p>
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
          alert('V osmem mesecu, v drugem letu Dareja, se je Gospodova beseda zgodila preroku Zahariju, Berehjájevemu sinu, Idójevemu vnuku, rekoč:')
          this.$router.push('/2')
        }
    }
  }
}
</script>
