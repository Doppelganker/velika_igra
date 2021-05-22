<template>
  <div class="flex flex-col">
    <div class="font-bold">Naloga 6</div>
    <div class="flex">
      <div>
        <p>
          Katja se na Bobrovem vrtu igra na drevesnih štorih. Z vsakega štora opazuje štiri sosednje štore (spredaj, zadaj, levo in desno) in sledi tem trem pravilom:
        </p>
        <br />
        <ol>
          <li>
            1. Če je eden od sosednjih štorov za ena višji od tistega, na
            katerem stoji, skoči nanj.
          </li>
          <li>
            2. Če ne, skoči na štor, ki je enako visok, ampak samo, če na
            njem še ni bila.
          </li>
          <li>
            3. Če se s trenutnega štora ne more premakniti po prejšnjih
            dveh pravilih, se ustavi.
          </li>
        </ol>
        <br />
        <p>
          Višine in mesta, na katerih so posamezni štori, so na sliki. Katja začne na štoru z višino 1. Kako visoko bo priskakala?
        </p>
      </div>
      <img src="../assets/Naloga6.png" />
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
      return this.answer == '7'
    }
  },
  methods: {
    test() {
      if (this.correct)  {
        alert('Gospodova beseda, ki se je zgodila Ozeju, Beeríjevemu sinu, v dneh Uzíja, Jotáma, Aháza in Ezekíja, Judovih kraljev, in v dneh Jerobeáma, Joáševega sina, Izraelovega kralja.')
        this.$router.push('/7')
      } else
        alert('Napačen odgovor')
    }
  }
}
</script>
