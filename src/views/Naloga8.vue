<template>
  <div class="flex flex-col">
    <div class="font-bold">Naloga 8</div>
    <p class="self-center">Skrivnostni namige v sveti knjigi poišči, iz začetnic naslovov geslo sestavi.</p>
    <p class="self-end" title="8. namig v kodi strani se skriva">Namig</p>
    <div class="flex">
      <input class="input input-blue" maxlength="1" v-model="crka1" />
      <input class="input input-blue" maxlength="1" v-model="crka2" />
      <input class="input input-blue" maxlength="1" v-model="crka3" />
      <input class="input input-blue" maxlength="1" v-model="crka4" />
      <input class="input input-blue" maxlength="1" v-model="crka5" />
      <input class="input input-blue" maxlength="1" v-model="crka6" />
      <input class="input input-blue" maxlength="1" v-model="crka7" />
      <input class="input input-blue" maxlength="1" v-model="crka8" />
    </div>
    <button class="btn btn-blue flex-none w-40 self-end" @click="test()">Nadaljuj</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      crka1: '',
      crka2: '',
      crka3: '',
      crka4: '',
      crka5: '',
      crka6: '',
      crka7: '',
      crka8: ''
    }
  },
  computed: {
    correct: function() {
      return (this.crka1 + this.crka2 + this.crka3 + this.crka4 + this.crka5 + this.crka6 + this.crka7 + this.crka8).toLowerCase() == 'zmernost'
    }
  },
  methods: {
    test() {
      if (this.correct)  {
        alert('Pavel, Silván in Timótej tesaloníški Cerkvi v Bogu Očetu in v Gospodu Jezusu Kristusu: milost vam in mir.')
        this.$router.push('/konec')
      } else
        alert('Napačen odgovor')
    }
  }
}
</script>
