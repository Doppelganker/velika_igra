<template>
  <div class="flex flex-col">
    <div class="font-bold">Naloga 5</div>
    <div class="self-center">
      <div class="flex">
        <div>
        <p>
        Bober Boris želi bobrovki Branki poslati skrivno sporočilo:
        </p>
        <br />
        <b>
        DOBIVASEOBPOLOSMIH
        </b>
        <br />
        <br />
        <p>
        Vsako črko zapiše v tabelo s štirimi stolpci od leve proti desni, vrstico za vrstico tako, da začne zgoraj levo, kot kaže slika. Prazen prostor zapolni z X. Nato ustvari skrivno sporočilo tako, da bere znake z vrha navzdol, stolpec za stolpcem:
        </p>
        <br />
        <b>
        DVOLIOABOHBSPSXIEOMX
        </b>
        <br />
        <br />
        <p>
        Bobrovka Branka mu je odgovorila: <b>PPLMRRA!AIBXVŠOX</b>
        </p>
        <br />
        <p>
        Kaj mu je sporočila?
        </p>
      </div>
      <img src="../assets/Naloga5.png" width="300" />
    </div>
    </div>
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
      return this.answer.toUpperCase() == 'PRAVPRIŠLABOM!'
    }
  },
  methods: {
    test() {
      if (this.correct)  {
        alert('Besede Nehemija, Hahaljájevega sina: V mesecu kislévu, v dvajsetem letu, sem bil v mestni trdnjavi v Suzah.')
        this.$router.push('/6')
      } else
        alert('Napačen odgovor')
    }
  }
}
</script>
