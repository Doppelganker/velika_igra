<template>
  <div class="flex flex-col">
    <div class="font-bold">Naloga 2</div>
    <p class="self-center">Koda skrivnostna v sebi razkriva<br /> kaj geslo je in kje se skriva</p>
    <p class="self-end" title="CTRL+SHIFT+I ali desni klik in preglej">Namig</p>
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
      return this.answer == 'RokJe...'
    }
  },
  methods: {
    test() {
      if (this.correct)  {
        alert('V začetku je Bog ustvaril nebo in zemljo.')
        this.$router.push('/3')
      } else
        alert('Napačen odgovor')
    }
  }
}
</script>
