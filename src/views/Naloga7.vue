<template>
  <div class="flex flex-col">
    <div class="font-bold">Naloga 7</div>
    <p class="self-center">
      Oštevilčene žogice spustimo po klančini. Žogice lahko padejo v luknje na klančini in tako se vrstni red žogic spremeni. Ko žogica pride do luknje, pade vanjo, če je še dovolj prostora. Če prostora v luknji ni, se žogica odkotali dalje. Vsaka luknja ima na dnu tudi zatič; če ga odstranimo, sprožimo vzmet, ki vrže žogice iz luknje. Poglejmo primer:
    </p>
    <img class="self-center" src="../assets/Naloga7_1.png" width="720" height="300"/>
    <p>
      Po klančini spustimo deset žogic. Na klančini so tri luknje, A, B in C, v katerih je prostora za 3, 2 in 1 žogico, po vrsti (glej spodnjo sliko). Zatiče odstranjujemo po vrsti, najprej A, nato B in na koncu C, a vedno najprej počakamo, da se žogice nehajo kotaliti.
    </p>
    <img class="self-center" src="../assets/Naloga7_2.png" width="480" height="300" />
    <input placeholder="1,2,3,4,5,6,7,8,9,10" class="input input-blue" v-model="answer" />
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
      return this.answer == '7,8,9,10,3,2,1,5,4,6'
    }
  },
  methods: {
    test() {
      if (this.correct)  {
        alert('Bil je mož iz Ramatájim Cofíma, z Efrájimskega pogorja, ime mu je bilo Elkaná, sin Jeroháma, sinú Elihúja, sinú Tohuja, sinú Cufa, Efratejec.')
        this.$router.push('/8')
      } else
        alert('Napačen odgovor')
    }
  }
}
</script>
