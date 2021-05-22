<template>
  <div class="flex flex-col">
    <div class="font-bold">Naloga 4</div>
    <p class="self-center">Zapiši 21 v binarnem sistemu</p>
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
  computed: {
    correct: function() {
      return this.answer == '10101'
    }
  },
  methods: {
    test() {
      if (this.correct)  {
        alert('Razodetje Jezusa Kristusa, ki mu ga je dal Bog, da bi pokazal svojim služabnikom, kar se mora vsak čas zgoditi. Sporočil ga je po svojem angelu svojemu služabniku Janezu.')
        this.$router.push('/5')
      } else
        alert('Napačen odgovor')
    }
  }
}
</script>
