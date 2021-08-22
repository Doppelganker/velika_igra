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

    <Modal answer="6" :hack="false" v-on:solved="check[8] = true">
      <template v-slot:title>
        Hišne številke
      </template>
      Rok stanuje na ulic,  kjer so številke oštevilčene s številkami od 1 do 22. Kolikokrat je na hišnih številkah zapisana številka 2?
    </Modal>

    <Modal answer="4" :hack="false" v-on:solved="check[9] = true">
      <template v-slot:title>
        Božični okraski
      </template>
      Nuša je imela 12 kroglic in 12 barvnih trakov. Izdelovala je novoletne okraske. Za vsak okrasek je porabila 2 kroglici in 3 barvne trakove. Največ koliko okraskov je naredila?
    </Modal>

    <Modal answer="9" :hack="false" v-on:solved="check[10] = true">
      <template v-slot:title>
        Aligatorčki
      </template>
      Manca je za Petjo pripravila zakopliciran račun, pomagaj ji ga rešiti.
      0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0
    </Modal>

    <Modal answer="" :hack="false" v-on:solved="check[11] = true">
      <template v-slot:title>
        Barvanje
      </template>
      Na papir narišite čimveč črt, ki se lahko sekajo. Na listu bo nastalo več likov. Pobarvajte z čim manj barvami, tako da liki, ki se dotikajo ne smejo biti iste barve. Meni uspe z 4 barvami, pa vam?
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
      check: [false, false, false, false, false, false, false, false, false, false, false, false]
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
