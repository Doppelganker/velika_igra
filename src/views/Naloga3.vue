<template>
  <div class="flex flex-col">
    <div class="font-bold">Naloga 3</div>
    <p class="self-center">V konzoli zaženi "hack();" metodo, in naredi gumb uporaben</p>
    <button id="Button1" class="btn btn-blue flex-none w-40 self-end disabled:opacity-50" disabled @click="test()">Nadaljuj</button>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
        alert('Bilo je v dneh Ahasvérja, tistega Ahasvérja, ki je kraljeval od Indije do Etiopije nad sto sedemindvajsetimi pokrajinami.')
        this.$router.push('/4')
    }
  }
}
</script>
