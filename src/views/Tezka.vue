<template>
  <div class="grid grid-cols-3 gap-4 p-8">
    <Modal answer="10101" :hack="hack" v-on:solved="check[0] = true">
      <template v-slot:title>
        Matematika
      </template>
      Zapiši 21 v binarnem sistemu
      <template v-slot:secret>
        2. ______ lepa kot cvetica pisana, usmiljena kraljica. Skrbno vlada za nemočne ljudi. ______ tri dni se je postila, upala, ponižno je molila, da vsemogočni ljudstvo rešil bi.
      </template>
    </Modal>

    <Modal answer="PRAVPRIŠLABOM!" :hack="hack" v-on:solved="check[1] = true">
      <template v-slot:title>
        Skrivna sporočila
      </template>
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
      <template v-slot:secret>
        4. _ Gospa moja, _ Mati moja, tebi se vsega darujem;
      </template>
    </Modal>

    <Modal answer="7" :hack="hack" v-on:solved="check[2] = true">
      <template v-slot:title>
        Telovadba
      </template>
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
      <template v-slot:secret>
        11. Črka, ki je najbolj podobna številu 5
      </template>
    </Modal>

    <Modal answer="7,8,9,10,3,2,1,5,4,6" :hack="hack" v-on:solved="check[3] = true">
      <template v-slot:title>
        Gozdarstvo
      </template>
      <p class="self-center">
        Oštevilčene žogice spustimo po klančini. Žogice lahko padejo v luknje na klančini in tako se vrstni red žogic spremeni. Ko žogica pride do luknje, pade vanjo, če je še dovolj prostora. Če prostora v luknji ni, se žogica odkotali dalje. Vsaka luknja ima na dnu tudi zatič; če ga odstranimo, sprožimo vzmet, ki vrže žogice iz luknje. Poglejmo primer:
      </p>
      <img class="self-center" src="../assets/Naloga7_1.png" width="720" height="300"/>
      <p>
        Po klančini spustimo deset žogic. Na klančini so tri luknje, A, B in C, v katerih je prostora za 3, 2 in 1 žogico, po vrsti (glej spodnjo sliko). Zatiče odstranjujemo po vrsti, najprej A, nato B in na koncu C, a vedno najprej počakamo, da se žogice nehajo kotaliti.
      </p>
      <img class="self-center" src="../assets/Naloga7_2.png" width="480" height="300" />
      <p>
        Kakšen je vrstni red, ko so vse žogice na ravnini?
      </p>
      <template v-slot:secret>
        5. Ž
      </template>
    </Modal>

    <Modal answer="A" :hack="hack" v-on:solved="check[4] = true">
      <template v-slot:title>
        Sveto pismo
      </template>
      Kaj ima Adam spredaj in Eva zadaj?
      <template v-slot:secret>
        12. 1. Mz 24, 12
      </template>
    </Modal>

    <Modal answer="17" :hack="hack" v-on:solved="check[5] = true">
      <template v-slot:title>
        Čiščenje ribnika
      </template>
      V ribnik so zasadili lokvanj in ta se je razraščal tako hitro, da se je površina njegovega listja in cvetov vsak dan podvojila. Natanko po 18 dneh je bila celotna gladina ribnika že zaraščena. V koliko dneh bi bila prekrita celotna gladina, če bi zasadili 2 lokvanja?
      <template v-slot:secret>
        1. Prva črka evangelija, ki se konča z: Jezus pa je storil še veliko drugega. Če bi to popisali eno za drugim, mislim, da ves svet ne bi mogel obseči knjig, ki bi bile napisane.
      </template>
    </Modal>

    <Modal answer="23" :hack="hack" v-on:solved="check[6] = true">
      <template v-slot:title>
        Rojstni dan
      </template>
      Animator Timen bo čez 4 leta start toliko, kot znaša vsota števk, njegovega letnice rojstva. Koliko je star Timen?
      <template v-slot:secret>
        9. Osnovna enota za silo
      </template>
    </Modal>

    <Modal answer="7" :hack="hack" v-on:solved="check[7] = true">
      <template v-slot:title>
        Družabne igre
      </template>
      V igri **** so po metu, premaknemo za vsoto rezultatov na dnu obeh kock. Za koliko mest se najpogosteje premaknemo?
      <template v-slot:secret>
        1. Prva črka svetopisemske knjige, ki se začne z: Pesem pesmi, ki je Salomonova.
      </template>
    </Modal>

    <div v-if="completed">V konzoli zaženi "hack();" metodo. Konzolo odpreš z "desni klik" in "preglej" ali (CTRL + SHIFT + I) </div>
    <button id="Button1" class="btn btn-blue flex-none w-40 self-end disabled:opacity-0" disabled @click="hack=true">Spremeni Svet</button>
  </div>
  <vue-countdown v-if="hack && !timer" :time="5 * 60 * 1000" :interval="100" v-slot="{ minutes, seconds }" @end="timer = true">
    Preostali čas: {{ minutes }} min : {{ seconds }} s
  </vue-countdown>
  <div v-if="timer">
    Kaj je čas potekel?
  </div>
  <div v-if="hack" class="flex">
    <input class="input input-blue" maxlength="1" v-model="crka1" placeholder="1" />
    <input class="input input-blue" maxlength="1" v-model="crka2" placeholder="2"/>
    <input class="input input-blue" maxlength="1" v-model="crka3" placeholder="3"/>
    <input class="input input-blue" maxlength="1" v-model="crka4" placeholder="4"/>
    <input class="input input-blue" maxlength="1" v-model="crka5" placeholder="5"/>
    <input class="input input-blue" maxlength="1" v-model="crka6" placeholder="6"/>
    <input class="input input-blue" maxlength="1" v-model="crka7" placeholder="7"/>
    <input class="input input-blue" maxlength="1" v-model="crka8" placeholder="8"/>
    <input class="input input-blue" maxlength="1" v-model="crka9" placeholder="9"/>
    <input class="input input-blue" maxlength="1" v-model="crka10" placeholder="10"/>
    <input class="input input-blue" maxlength="1" v-model="crka11" placeholder="11"/>
    <input class="input input-blue" maxlength="1" v-model="crka12" placeholder="12"/>
  </div>
</template>

<script>
import Modal from '../components/Modal.vue'
import VueCountdown from '@chenfengyuan/vue-countdown'

export default {
  components: {
    Modal, VueCountdown
  },
  data(){
    return {
      hack: false,
      timer: false,
      check: [false, false, false, false, false, false, false, false],
      crka1: '',
      crka2: '',
      crka3: 'd',
      crka4: '',
      crka5: '',
      crka6: 'e',
      crka7: 'l',
      crka8: '',
      crka9: '',
      crka10: 'o',
      crka11: '',
      crka12: ''
    }
  },
  computed: {
    completed() {
      return this.check.find(e => e === false) === undefined
    },
    correct: function() {
      return this.crka1 + this.crka2 + this.crka3 + this.crka4 + this.crka5 + this.crka6 + this.crka7 + this.crka8 + this.crka9 + this.crka10 + this.crka11 + this.crka12
    }
  },
  watch: {
    correct(newValue) {
      if(newValue.toLowerCase() === 'vedoželjnost') {
        this.$router.push('/konec')
      }
    }
  }
}
</script>
