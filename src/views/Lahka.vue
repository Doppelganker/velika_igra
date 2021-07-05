<template>
  <div class="grid grid-cols-3 gap-4 p-8">
    <Modal answer="" :hack="false" v-on:solved="check[0] = true">
      <template v-slot:title>
        Pobarvanka
      </template>
      Pobarvajte dobljeno pobarvanko.
    </Modal>

    <Modal answer="E" :hack="false" v-on:solved="check[1] = true">
      <template v-slot:title>
        Uganka
      </template>
      Katero črko izmed spodaj napisanih je izbrala Saša, če veš, da če črko obrneš, dobiš grabljice.
      <p class="text-6xl">O E R G R</p>
    </Modal>

    <Modal answer="" :hack="false" v-on:solved="check[2] = true">
      <template v-slot:title>
        Šale
      </template>
      Vsak izmed vas mora povedati vsaj eno šalo.
    </Modal>

    <Modal answer="3" :hack="false" v-on:solved="check[3] = true">
      <template v-slot:title>
        Črka
      </template>
      Koliko črk L je v spodnjem stavku?
      <p class="text-6xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, consequuntur.</p>
    </Modal>

    <Modal answer="5" :hack="false" v-on:solved="check[4] = true">
      <template v-slot:title>
        Matematika
      </template>
      Ana ima 3 jabolka, Leon 6 čokolad in Patricija 2 hruški. Koliko kosov sadja imajo vsi 3 prijatelji skupaj?
    </Modal>

    <Modal answer="" :hack="false" v-on:solved="check[5] = true">
      <template v-slot:title>
        Labirint
      </template>
      Razrešite podan labirint.
    </Modal>

    <Modal answer="MIZA" :hack="false" v-on:solved="check[6] = true">
      <template v-slot:title>
        Uganka
      </template>
      Štiri noge ima, a hoditi ne more, ne zna. Kaj je to?
    </Modal>

    <Modal answer="" :hack="false" v-on:solved="check[7] = true">
      <template v-slot:title>
        Pesem
      </template>
      Skupaj zapojte (lahko tudi zaplešete).
    </Modal>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue'

export default {
  components: {
    Modal
  },
  data() {
    return {
      check: [false, false, false, false, false, false, false, false]
    }
  },
  computed: {
    completed() {
      return this.check.find(e => e === false) === undefined
    }
  },
  watch: {
    completed(newValue) {
      if(newValue === true) {
        this.$router.push('/konec')
      }
    }
  }
}
</script>
